import { PrismaClient, Pizza, Prisma } from '../../generated/prisma';
const prisma = new PrismaClient();
export const getAllPizzas = async (): Promise<Pizza[]> => {
 return prisma.pizza.findMany();
};
export const getPizzaById=async(id: number):Promise<Pizza | null> => {
 return prisma.pizza.findUnique({ where: { idPizza: id } });
};
export const createPizza = async (data: Omit<Pizza, 'idPizza'>): Promise<Pizza> => {
  return prisma.pizza.create({
    data: {
      nome: data.nome,
      preco: data.preco,
      tamanho: data.tamanho,
      idCarrinho: data.idCarrinho,
      idMenu: data.idMenu,
    },
  });
};