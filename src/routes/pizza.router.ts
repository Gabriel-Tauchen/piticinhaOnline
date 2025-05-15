import { Router } from 'express';
import {
 getAllPizzasController, getPizzaByIdController,
 createPizzaController
} from '../controllers/pizza.controller';
const router = Router();
router.get('/', getAllPizzasController);
router.get('/:id', getPizzaByIdController);
router.post('/', createPizzaController);
export default router;
