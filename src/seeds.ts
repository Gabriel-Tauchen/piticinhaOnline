import { PrismaClient, StatusPedido } from '../generated/prisma';
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const senhaHash = await argon2.hash('senha123'); //Gerar hash
  const senhaHash2 = await argon2.hash('senha456'); //Gerar hash
  // Criando uma pessoa
  const pessoa = await prisma.pessoa.create({
    data: {
      email: 'cliente@example.com',
      nome: 'João Cliente',
      senha: senhaHash,
    },
  });

  // Criando um cliente associado à pessoa
  const cliente = await prisma.cliente.create({
    data: {
      emailCliente: pessoa.email,
      endereco: 'Rua das Flores, 123',
      telefone: '31999999999',
    },
  });

  // Criando um funcionário
  const funcionarioPessoa = await prisma.pessoa.create({
    data: {
      email: 'funcionario@example.com',
      nome: 'Ana Funcionária',
      senha: senhaHash2,
    },
  });

  const funcionario = await prisma.funcionario.create({
    data: {
      emailFuncionario: funcionarioPessoa.email,
      cargo: 'Entregador',
    },
  });

  // Criando um menu
  const menu = await prisma.menu.create({
    data: {
      idMenu: 0, 
    },
  });

  // Criando um carrinho de compras
  const carrinhoDeCompras = await prisma.carrinhoDeCompras.create({
    data: {
        idCarrinho: 0, 
        subtotal: 0,
    },
  });

  // Criando uma pizza no menu
  const pizza = await prisma.pizza.create({
    data: {
      idPizza: 0,
      idCarrinho: carrinhoDeCompras.idCarrinho, 
      nome: 'Margherita',
      preco: 35.5,
      tamanho: 8,
      idMenu: menu.idMenu,
      Ingrediente: {
        create: [
          { idIngrediente: 0, nome: 'Queijo', preco: 5.0 },
          { idIngrediente: 1, nome: 'Tomate', preco: 3.0 },
          { idIngrediente: 2, nome: 'Manjericão', preco: 1.5 },
        ],
      },
    },
  });


  // Criando um pagamento
  const pagamento = await prisma.pagamento.create({
    data: {
      idPagamento: 0, 
      tipoPagamento: 1,
      isPago: true,
    },
  });

  // Criando uma entrega
  const entrega = await prisma.entrega.create({
    data: {
      idEntrega: 0, 
      tipoEntrega: 1,
      tempoEstimado: 30,
    },
  });

// Criando uma avaliação associada ao pedido
  const avalia = await prisma.avaliacao.create({
    data: {
      idAvaliacao: 0, 
      nota: 5,
      comentario: 'Entrega rápida e pizza deliciosa!',
      data: new Date(),
      emailCliente: cliente.emailCliente,
    },
  });


  // Criando um pedido
  const pedido = await prisma.pedido.create({
    data: {
      idPedido: 0, 
      idAvaliacao: avalia.idAvaliacao, 
      valotTotal: 30,
      statusPedido: StatusPedido.PEDIDO_RECEBIDO,
      emailCliente: cliente.emailCliente,
      emailFuncionario: funcionario.emailFuncionario,
      idCarrinho: carrinhoDeCompras.idCarrinho,
      idEntrega: entrega.idEntrega,
      idPagamento: pagamento.idPagamento,
    },
  });

  
  console.log('Banco de dados populado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
