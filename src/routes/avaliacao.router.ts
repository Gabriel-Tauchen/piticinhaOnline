import { Router } from 'express';
import {
 getAllAvaliacoesController, getAvaliacaoByIdController,
 createAvaliacaoController
} from '../controllers/avaliacao.controller';
const router = Router();
router.get('/', getAllAvaliacoesController);
router.get('/:id', getAvaliacaoByIdController);
router.post('/', createAvaliacaoController);
export default router;
