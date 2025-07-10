import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export const getAllCarrinhos = async () => {
  return prisma.carrinhoDeCompras.findMany({
include: { listaPizzas: true }  });
};

export const getCarrinhoById = async (id: number) => {
  return prisma.carrinhoDeCompras.findUnique({
    where: { idCarrinho: id },
include: { listaPizzas: true }  });
};

export const createCarrinho = async (data: { subtotal: number }) => {
  return prisma.carrinhoDeCompras.create({ data });
};

export const updateCarrinho = async (id: number, data: { subtotal?: number }) => {
  return prisma.carrinhoDeCompras.update({
    where: { idCarrinho: id },
    data,
  });
};

export const deleteCarrinho = async (id: number) => {
  return prisma.carrinhoDeCompras.delete({ where: { idCarrinho: id } });
};