import { PrismaClient, StatusPedido } from '../generated/prisma';

const prisma = new PrismaClient();

async function main() {
  // Criando uma pessoa
  const pessoa = await prisma.pessoa.create({
    data: {
      email: 'cliente@example.com',
      nome: 'João Cliente',
      senha: 'senha123',
    },
  });

  // Criando um cliente associado à pessoa
  const cliente = await prisma.cliente.create({
    data: {
      emailCliente: pessoa.email,
      endereco: 'Rua das Flores, 123',
      telefone: '31999999999',
      //pessoa: { connect: { email: pessoa.email } },
    },
  });

  // Criando um funcionário
  const funcionarioPessoa = await prisma.pessoa.create({
    data: {
      email: 'funcionario@example.com',
      nome: 'Ana Funcionária',
      senha: 'senha456',
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

  // Criando uma pizza no menu
  const pizza = await prisma.pizza.create({
    data: {
      idPizza: 0,
      idCarrinho: 0, 
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

  // Criando um carrinho de compras
  const carrinhoDeCompras = await prisma.carrinhoDeCompras.create({
    data: {
        idCarrinho: 0, 
        subtotal: pizza.preco,
        listaPizzas: { connect: { idPizza: pizza.idPizza } },
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

  // Criando um pedido
  const pedido = await prisma.pedido.create({
    data: {
      idPedido: 0, 
      idAvaliacao: 0, 
      valotTotal: 30,
      statusPedido: StatusPedido.PEDIDO_RECEBIDO,
      emailCliente: cliente.emailCliente,
      emailFuncionario: funcionario.emailFuncionario,
      idCarrinho: carrinhoDeCompras.idCarrinho,
      idEntrega: entrega.idEntrega,
      idPagamento: pagamento.idPagamento,
    },
  });

  // Criando uma avaliação associada ao pedido
  await prisma.avaliacao.create({
    data: {
      idAvaliacao: 0, 
      nota: 5,
      comentario: 'Entrega rápida e pizza deliciosa!',
      data: new Date(),
      emailCliente: cliente.emailCliente,
      pedido: { connect: { idPedido: pedido.idPedido } },
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
