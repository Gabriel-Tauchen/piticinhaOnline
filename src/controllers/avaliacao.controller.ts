import { Request, Response } from 'express';
import * as avaliacaoRepository from '../repositories/avaliacao.repository';

export const getAllAvaliacoesController = async (req: Request, res: Response) => {
 const avaliacoes = await avaliacaoRepository.getAllAvaliacoes();
 res.json(avaliacoes);
};

export const getAvaliacaoByIdController = async (req: Request, res: Response) => {
 const id = parseInt(req.params.id);
 const avaliacao = await avaliacaoRepository.getAvaliacaoById(id);
 if (avaliacao) {
 res.json(avaliacao);
 } else {
 res.status(404).json({ message: 'Avaliacao not found' });
 }
};

export const createAvaliacaoController = async (req: Request, res: Response) => {
 const { nota, comentario, data, emailCliente } = req.body;
 const newAvaliacao = await avaliacaoRepository.createAvaliacao({ 
    nota,
    comentario,
    data,
    emailCliente,
 });
 res.status(201).json(newAvaliacao);
};