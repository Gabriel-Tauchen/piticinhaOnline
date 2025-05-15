import express from 'express';
import pizzaRoutes from './routes/pizza.route';
import avaliacaoRoutes from './routes/avaliacao.route';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
const app = express();
app.use(express.json());

const swaggerOptions = {
 definition: {
 openapi: '3.0.0',
 info: {
 title: 'Pizza API',
 version: '1.0.0',
 description: 'API para gerenciar dados no Piticinha Online',},},
 apis: ['./src/schemas/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.use('/pizzas', pizzaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});
