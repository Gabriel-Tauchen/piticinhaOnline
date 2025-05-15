/** 
* @openapi
* /pizzas:
*   get:
*       tags: [Pizzas]
*       summary: Lista todas as pizzas
*       responses:
*           200:
*               description: Lista de pizzas
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Pizza'
*   post:
*       tags: [Pizzas]
*       summary: Cria uma nova pizza
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/PizzaInput'
*       responses:
*           201:
*               description: Pizza criado
* /pizzas/{id}:
*       get:
*           tags: [Pizzas]
*           summary: Busca uma pizza por ID
*           parameters:
*               - name: id
*                 in: path
*                 required: true
*                 schema:
*                     type: integer
*           responses:
*               200:
*                   description: Pizza encontrada
*                   content:
*                       application/json:
*                           schema:
*                               $ref:'#/components/schemas/Pizza'
*                                   404:
*                                       description: Pizza não encontrada
* components:
*   schemas:
*       Pizza:
*           type: object
*           properties:
*               idPizza:
*                   type: integer
*               nome:
*                   type: string
*               preco:
*                   type: integer
*               tamanho:
*                   type: integer
*               idCarrinho:
*                   type: integer
*               idMenu:
*                   type: integer
*       PizzaInput:
*           type: object
*               properties:
*                   nome:
*                       type: string
*                   preco:
*                       type: integer
*                   tamanho:
*                       type: integer
*                   idCarrinho:
*                       type: integer
*                   idMenu:
*                       type: integer
*/
