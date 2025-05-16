import { Router } from 'express';
import {
  getAllAvaliacoesController, getAvaliacaoByIdController,
  createAvaliacaoController, updateAvaliacaoController, deleteAvaliacaoController
} from '../controllers/avaliacao.controller';
const router = Router();
router.get('/', getAllAvaliacoesController);
router.get('/:id', getAvaliacaoByIdController);
router.post('/', createAvaliacaoController);
router.patch('/:id', updateAvaliacaoController);
router.delete('/:id', deleteAvaliacaoController);
export default router;