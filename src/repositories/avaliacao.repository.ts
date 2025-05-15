import { PrismaClient, Avaliacao, Prisma } from '../../generated/prisma';
const prisma = new PrismaClient();
export const getAllAvaliacoes = async (): Promise<Avaliacao[]> => {
 return prisma.avaliacao.findMany();
};
export const getAvaliacaoById=async(id: number):Promise<Avaliacao | null> => {
 return prisma.avaliacao.findUnique({ where: { idAvaliacao: id } });
};
export const createAvaliacao = async (data: Omit<Avaliacao, 'idAvaliacao'>):
Promise<Avaliacao> => {
 return prisma.avaliacao.create({ data: data as Prisma.AvaliacaoUncheckedCreateInput });
};