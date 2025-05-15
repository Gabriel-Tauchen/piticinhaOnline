import express from 'express';
import pizzaRoutes from './routes/pizza.route';
import avaliacaoRoutes from './routes/avaliacao.route';

const app = express();
app.use(express.json());
app.use('/pizzas', pizzaRoutes);
app.use('/avaliacoes', avaliacaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {console.log(`Server running on port ${PORT}`);});
