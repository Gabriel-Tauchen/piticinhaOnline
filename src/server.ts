import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerJsdoc from 'swagger-jsdoc';
import cors from 'cors';


import pizzaRoutes from './routes/pizza.router';
import avaliacaoRoutes from './routes/avaliacao.router';
import authRoutes from './routes/auth.route';
import { authMiddleware } from './middlewares/auth.middleware';
import carrinhoRoutes from './routes/carrinho.router';

const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // ou use '*' para liberar para qualquer origem (não recomendado em produção)
  credentials: true
}));
app.use(express.json());

const swaggerOptions = {
 definition: {
 openapi: '3.0.0',
 info: {
    title: 'Pizza API',
    version: '1.0.0',
    description: 'API para gerenciar dados no Piticinha Online',
 },
 components: {
    securitySchemes: {
        bearerAuth: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        },
    },
 },
 security: [
    {
        bearerAuth: [],
    },
 ],
},
 apis: ['./src/schemas/*.ts'],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/pizzas',authMiddleware, pizzaRoutes);
app.use('/avaliacoes',authMiddleware, avaliacaoRoutes);
app.use('/auth', authRoutes);
app.use('/carrinhos', carrinhoRoutes);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});
