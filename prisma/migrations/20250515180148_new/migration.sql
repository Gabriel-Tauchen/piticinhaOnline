/*
  Warnings:

  - A unique constraint covering the columns `[idAvaliacao]` on the table `Avaliacao` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idCarrinho]` on the table `CarrinhoDeCompras` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailCliente]` on the table `Cliente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idEntrega]` on the table `Entrega` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailFuncionario]` on the table `Funcionario` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idIngrediente]` on the table `Ingrediente` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idMenu]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idPagamento]` on the table `Pagamento` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idPedido]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Pessoa` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idPizza]` on the table `Pizza` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
CREATE SEQUENCE avaliacao_idavaliacao_seq;
ALTER TABLE "Avaliacao" ALTER COLUMN "idAvaliacao" SET DEFAULT nextval('avaliacao_idavaliacao_seq');
ALTER SEQUENCE avaliacao_idavaliacao_seq OWNED BY "Avaliacao"."idAvaliacao";

-- AlterTable
CREATE SEQUENCE carrinhodecompras_idcarrinho_seq;
ALTER TABLE "CarrinhoDeCompras" ALTER COLUMN "idCarrinho" SET DEFAULT nextval('carrinhodecompras_idcarrinho_seq');
ALTER SEQUENCE carrinhodecompras_idcarrinho_seq OWNED BY "CarrinhoDeCompras"."idCarrinho";

-- AlterTable
CREATE SEQUENCE entrega_identrega_seq;
ALTER TABLE "Entrega" ALTER COLUMN "idEntrega" SET DEFAULT nextval('entrega_identrega_seq');
ALTER SEQUENCE entrega_identrega_seq OWNED BY "Entrega"."idEntrega";

-- AlterTable
CREATE SEQUENCE ingrediente_idingrediente_seq;
ALTER TABLE "Ingrediente" ALTER COLUMN "idIngrediente" SET DEFAULT nextval('ingrediente_idingrediente_seq');
ALTER SEQUENCE ingrediente_idingrediente_seq OWNED BY "Ingrediente"."idIngrediente";

-- AlterTable
CREATE SEQUENCE menu_idmenu_seq;
ALTER TABLE "Menu" ALTER COLUMN "idMenu" SET DEFAULT nextval('menu_idmenu_seq');
ALTER SEQUENCE menu_idmenu_seq OWNED BY "Menu"."idMenu";

-- AlterTable
CREATE SEQUENCE pagamento_idpagamento_seq;
ALTER TABLE "Pagamento" ALTER COLUMN "idPagamento" SET DEFAULT nextval('pagamento_idpagamento_seq');
ALTER SEQUENCE pagamento_idpagamento_seq OWNED BY "Pagamento"."idPagamento";

-- AlterTable
CREATE SEQUENCE pedido_idpedido_seq;
ALTER TABLE "Pedido" ALTER COLUMN "idPedido" SET DEFAULT nextval('pedido_idpedido_seq');
ALTER SEQUENCE pedido_idpedido_seq OWNED BY "Pedido"."idPedido";

-- AlterTable
CREATE SEQUENCE pizza_idpizza_seq;
ALTER TABLE "Pizza" ALTER COLUMN "idPizza" SET DEFAULT nextval('pizza_idpizza_seq');
ALTER SEQUENCE pizza_idpizza_seq OWNED BY "Pizza"."idPizza";

-- CreateIndex
CREATE UNIQUE INDEX "Avaliacao_idAvaliacao_key" ON "Avaliacao"("idAvaliacao");

-- CreateIndex
CREATE UNIQUE INDEX "CarrinhoDeCompras_idCarrinho_key" ON "CarrinhoDeCompras"("idCarrinho");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_emailCliente_key" ON "Cliente"("emailCliente");

-- CreateIndex
CREATE UNIQUE INDEX "Entrega_idEntrega_key" ON "Entrega"("idEntrega");

-- CreateIndex
CREATE UNIQUE INDEX "Funcionario_emailFuncionario_key" ON "Funcionario"("emailFuncionario");

-- CreateIndex
CREATE UNIQUE INDEX "Ingrediente_idIngrediente_key" ON "Ingrediente"("idIngrediente");

-- CreateIndex
CREATE UNIQUE INDEX "Menu_idMenu_key" ON "Menu"("idMenu");

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_idPagamento_key" ON "Pagamento"("idPagamento");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idPedido_key" ON "Pedido"("idPedido");

-- CreateIndex
CREATE UNIQUE INDEX "Pessoa_email_key" ON "Pessoa"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pizza_idPizza_key" ON "Pizza"("idPizza");
