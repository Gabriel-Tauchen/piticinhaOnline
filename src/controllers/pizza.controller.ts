import { Request, Response } from 'express';
import * as pizzaRepository from '../repositories/pizza.repository';

export const getAllPizzasController = async (req: Request, res: Response) => {
 const pizzas = await pizzaRepository.getAllPizzas();
 res.json(pizzas);
};

export const getPizzaByIdController = async (req: Request, res: Response) => {
 const id = parseInt(req.params.id);
 const pizza = await pizzaRepository.getPizzaById(id);
 if (pizza) {
 res.json(pizza);
 } else {
 res.status(404).json({ message: 'Pizza not found' });
 }
};

export const createPizzaController = async (req: Request, res: Response) => {
 const { nome, preco, tamanho, idCarrinho, idMenu } = req.body;
 const newPizza = await pizzaRepository.createPizza({ 
   nome, 
   preco, 
   tamanho, 
   idCarrinho, 
   idMenu,
 });
 res.status(201).json(newPizza);
};