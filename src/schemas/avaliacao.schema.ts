/** 
* @openapi
* /avaliacoes:
*   get:
*       tags: [Avaliacoes]
*       summary: Lista todas as avaliacoes
*       responses:
*           200:
*               description: Lista de avaliacoes
*               content:
*                   application/json:
*                       schema:
*                           type: array
*                           items:
*                               $ref: '#/components/schemas/Avaliacao'
*   post:
*       tags: [Avaliacoes]
*       summary: Cria uma nova avaliacao
*       requestBody:
*           required: true
*           content:
*               application/json:
*                   schema:
*                       $ref: '#/components/schemas/AvaliacaoInput'
*       responses:
*           201:
*               description: Avaliacao criada
* /avaliacoes/{id}:
*   get:
*       tags: [Avaliacoes]
*       summary: Busca uma avaliacao por ID
*       parameters:
*           - name: id
*             in: path
*             required: true
*             schema:
*                 type: integer
*       responses:
*           200:
*               description: Avaliacao encontrada
*               content:
*                   application/json:
*                       schema:
*                           $ref: '#/components/schemas/Avaliacao'
*           404:
*               description: Avaliacao não encontrada
* components:
*   schemas:
*       Avaliacao:
*           type: object
*           properties:
*               idAvaliacao:
*                   type: integer
*               nota:
*                   type: number
*               comentario:
*                   type: string
*               data:
*                   type: string
*                   format: date-time
*               emailCliente:
*                   type: string
*       AvaliacaoInput:
*           type: object
*           properties:
*               nota:
*                   type: number
*               comentario:
*                   type: string
*               data:
*                   type: string
*                   format: date-time
*               emailCliente:
*                   type: string
*/