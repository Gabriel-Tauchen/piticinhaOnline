import { Router } from 'express';
import {
  getAllPizzasController, getPizzaByIdController,
  createPizzaController, updatePizzaController, deletePizzaController
} from '../controllers/pizza.controller';
const router = Router();
router.get('/', getAllPizzasController);
router.get('/:id', getPizzaByIdController);
router.post('/', createPizzaController);
router.patch('/:id', updatePizzaController);
router.delete('/:id', deletePizzaController);
export default router;