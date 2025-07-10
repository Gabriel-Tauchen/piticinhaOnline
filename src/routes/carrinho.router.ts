import { Router } from 'express';
import {
  getAllCarrinhosController,
  getCarrinhoByIdController,
  createCarrinhoController,
  updateCarrinhoController,
  deleteCarrinhoController,
} from '../controllers/carrinho.controller';

const router = Router();

router.get('/', getAllCarrinhosController);
router.get('/:id', getCarrinhoByIdController);
router.post('/', createCarrinhoController);
router.patch('/:id', updateCarrinhoController);
router.delete('/:id', deleteCarrinhoController);

export default router;