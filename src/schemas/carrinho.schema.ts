/**
 * @openapi
 * /carrinhos:
 *   get:
 *     tags: [Carrinhos]
 *     summary: Lista todos os carrinhos de compras
 *     responses:
 *       200:
 *         description: Lista de carrinhos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Carrinho'
 *   post:
 *     tags: [Carrinhos]
 *     summary: Cria um novo carrinho de compras
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CarrinhoInput'
 *     responses:
 *       201:
 *         description: Carrinho criado
 * /carrinhos/{id}:
 *   get:
 *     tags: [Carrinhos]
 *     summary: Busca um carrinho pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Carrinho encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Carrinho'
 *       404:
 *         description: Carrinho não encontrado
 *   patch:
 *     tags: [Carrinhos]
 *     summary: Atualiza um carrinho pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CarrinhoInput'
 *     responses:
 *       200:
 *         description: Carrinho atualizado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Carrinho'
 *       404:
 *         description: Carrinho não encontrado
 *   delete:
 *     tags: [Carrinhos]
 *     summary: Remove um carrinho pelo ID
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Carrinho removido com sucesso
 *       404:
 *         description: Carrinho não encontrado
 * components:
 *   schemas:
 *     Carrinho:
 *       type: object
 *       properties:
 *         idCarrinho:
 *           type: integer
 *         subtotal:
 *           type: number
 *         listaPizzas:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Pizza'
 *     Pizza:
 *       type: object
 *       properties:
 *         idPizza:
 *           type: integer
 *         nome:
 *           type: string
 *         preco:
 *           type: number
 *         tamanho:
 *           type: integer
 *         idCarrinho:
 *           type: integer
 *         idMenu:
 *           type: integer
 *     CarrinhoInput:
 *       type: object
 *       properties:
 *         subtotal:
 *           type: number
 */