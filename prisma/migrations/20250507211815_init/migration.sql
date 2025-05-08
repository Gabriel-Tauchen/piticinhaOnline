/*
  Warnings:

  - A unique constraint covering the columns `[idCarrinho]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idEntrega]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idPagamento]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[idAvaliacao]` on the table `Pedido` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idAvaliacao` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idCarrinho` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idEntrega` to the `Pedido` table without a default value. This is not possible if the table is not empty.
  - Added the required column `idPagamento` to the `Pedido` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingrediente" DROP CONSTRAINT "Ingrediente_idPizza_fkey";

-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN     "idAvaliacao" INTEGER NOT NULL,
ADD COLUMN     "idCarrinho" INTEGER NOT NULL,
ADD COLUMN     "idEntrega" INTEGER NOT NULL,
ADD COLUMN     "idPagamento" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "_IngredienteToPizza" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_IngredienteToPizza_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_IngredienteToPizza_B_index" ON "_IngredienteToPizza"("B");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idCarrinho_key" ON "Pedido"("idCarrinho");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idEntrega_key" ON "Pedido"("idEntrega");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idPagamento_key" ON "Pedido"("idPagamento");

-- CreateIndex
CREATE UNIQUE INDEX "Pedido_idAvaliacao_key" ON "Pedido"("idAvaliacao");

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idCarrinho_fkey" FOREIGN KEY ("idCarrinho") REFERENCES "CarrinhoDeCompras"("idCarrinho") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idEntrega_fkey" FOREIGN KEY ("idEntrega") REFERENCES "Entrega"("idEntrega") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idPagamento_fkey" FOREIGN KEY ("idPagamento") REFERENCES "Pagamento"("idPagamento") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_idAvaliacao_fkey" FOREIGN KEY ("idAvaliacao") REFERENCES "Avaliacao"("idAvaliacao") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredienteToPizza" ADD CONSTRAINT "_IngredienteToPizza_A_fkey" FOREIGN KEY ("A") REFERENCES "Ingrediente"("idIngrediente") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IngredienteToPizza" ADD CONSTRAINT "_IngredienteToPizza_B_fkey" FOREIGN KEY ("B") REFERENCES "Pizza"("idPizza") ON DELETE CASCADE ON UPDATE CASCADE;
