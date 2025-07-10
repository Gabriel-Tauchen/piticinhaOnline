import { Request, Response } from 'express';
import * as carrinhoRepository from '../repositories/carrinho.repository';

export const getAllCarrinhosController = async (req: Request, res: Response) => {
  const carrinhos = await carrinhoRepository.getAllCarrinhos();
  res.json(carrinhos);
};

export const getCarrinhoByIdController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const carrinho = await carrinhoRepository.getCarrinhoById(id);
  if (carrinho) {
    res.json(carrinho);
  } else {
    res.status(404).json({ message: 'Carrinho not found' });
  }
};

export const createCarrinhoController = async (req: Request, res: Response) => {
  const { subtotal } = req.body;
  const newCarrinho = await carrinhoRepository.createCarrinho({ subtotal });
  res.status(201).json(newCarrinho);
};

export const updateCarrinhoController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const data = req.body;
  try {
    const updated = await carrinhoRepository.updateCarrinho(id, data);
    if (updated) {
      res.json(updated);
    } else {
      res.status(404).json({ message: 'Carrinho not found' });
    }
  } catch (e) {
    res.status(400).json({ message: 'Erro ao atualizar carrinho', error: e });
  }
};

export const deleteCarrinhoController = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    await carrinhoRepository.deleteCarrinho(id);
    res.status(204).send();
  } catch (e) {
    res.status(404).json({ message: 'Carrinho not found' });
  }
};