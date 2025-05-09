-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PEDIDO_RECEBIDO', 'EM_PREPARO', 'ENVIADO', 'ENTREGUE');

-- CreateTable
CREATE TABLE "Pessoa" (
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "senha" TEXT NOT NULL,

    CONSTRAINT "Pessoa_pkey" PRIMARY KEY ("email")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "emailCliente" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("emailCliente")
);

-- CreateTable
CREATE TABLE "Funcionario" (
    "emailFuncionario" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,

    CONSTRAINT "Funcionario_pkey" PRIMARY KEY ("emailFuncionario")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "idAvaliacao" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "emailCliente" TEXT NOT NULL,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("idAvaliacao")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "idPedido" INTEGER NOT NULL,
    "valotTotal" INTEGER NOT NULL,
    "statusPedido" "StatusPedido" NOT NULL,
    "emailCliente" TEXT NOT NULL,
    "emailFuncionario" TEXT NOT NULL,
    "idCarrinho" INTEGER NOT NULL,
    "idEntrega" INTEGER NOT NULL,
    "idPagamento" INTEGER NOT NULL,
    "idAvaliacao" INTEGER NOT NULL,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("idPedido")
);

-- CreateTable
CREATE TABLE "Entrega" (
    "idEntrega" INTEGER NOT NULL,
    "tipoEntrega" INTEGER NOT NULL,
    "tempoEstimado" INTEGER NOT NULL,

    CONSTRAINT "Entrega_pkey" PRIMARY KEY ("idEntrega")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "idPagamento" INTEGER NOT NULL,
    "tipoPagamento" INTEGER NOT NULL,
    "isPago" BOOLEAN NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("idPagamento")
);

-- CreateTable
CREATE TABLE "CarrinhoDeCompras" (
    "idCarrinho" INTEGER NOT NULL,
    "subtotal" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "CarrinhoDeCompras_pkey" PRIMARY KEY ("idCarrinho")
);

-- CreateTable
CREATE TABLE "Pizza" (
    "idPizza" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "idCarrinho" INTEGER NOT NULL,
    "idMenu" INTEGER NOT NULL,

    CONSTRAINT "Pizza_pkey" PRIMARY KEY ("idPizza")
);

-- CreateTable
CREATE TABLE "Ingrediente" (
    "idIngrediente" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Ingrediente_pkey" PRIMARY KEY ("idIngrediente")
);

-- CreateTable
CREATE TABLE "Menu" (
    "idMenu" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("idMenu")
);

-- CreateTable
CREATE TABLE "_IngredienteToPizza" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngredienteToPizza_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idCarrinho_key" ON "Pedido"("idCarrinho");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idEntrega_key" ON "Pedido"("idEntrega");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idPagamento_key" ON "Pedido"("idPagamento");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idAvaliacao_key" ON "Pedido"("idAvaliacao");

-- CreateIndex
CREATE INDEX "_IngredienteToPizza_B_index" ON "_IngredienteToPizza"("B");

-- AddForeignKey
ALTER TABLE "Cliente" ADD CONSTRAINT "Cliente_emailCliente_fkey" FOREIGN KEY ("emailCliente") REFERENCES "Pessoa"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Funcionario" ADD CONSTRAINT "Funcionario_emailFuncionario_fkey" FOREIGN KEY ("emailFuncionario") REFERENCES "Pessoa"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_emailCliente_fkey" FOREIGN KEY ("emailCliente") REFERENCES "Cliente"("emailCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_emailCliente_fkey" FOREIGN KEY ("emailCliente") REFERENCES "Cliente"("emailCliente") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_emailFuncionario_fkey" FOREIGN KEY ("emailFuncionario") REFERENCES "Funcionario"("emailFuncionario") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idCarrinho_fkey" FOREIGN KEY ("idCarrinho") REFERENCES "CarrinhoDeCompras"("idCarrinho") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idEntrega_fkey" FOREIGN KEY ("idEntrega") REFERENCES "Entrega"("idEntrega") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idPagamento_fkey" FOREIGN KEY ("idPagamento") REFERENCES "Pagamento"("idPagamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("idAvaliacao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pizza" ADD CONSTRAINT "Pizza_idCarrinho_fkey" FOREIGN KEY ("idCarrinho") REFERENCES "CarrinhoDeCompras"("idCarrinho") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pizza" ADD CONSTRAINT "Pizza_idMenu_fkey" FOREIGN KEY ("idMenu") REFERENCES "Menu"("idMenu") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredienteToPizza" ADD CONSTRAINT "_IngredienteToPizza_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingrediente"("idIngrediente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredienteToPizza" ADD CONSTRAINT "_IngredienteToPizza_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("idPizza") ON DELETE CASCADE ON UPDATE CASCADE;
