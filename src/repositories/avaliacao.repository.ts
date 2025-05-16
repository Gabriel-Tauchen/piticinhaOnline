import { PrismaClient, Avaliacao, Prisma } from '../../generated/prisma';
const prisma = new PrismaClient();
export const getAllAvaliacoes = async (): Promise<Avaliacao[]> => {
 return prisma.avaliacao.findMany();
};
export const getAvaliacaoById=async(id: number):Promise<Avaliacao | null> => {
 return prisma.avaliacao.findUnique({ where: { idAvaliacao: id } });
};
export const createAvaliacao = async (data: Omit<Avaliacao, 'idAvaliacao'>): Promise<Avaliacao> => {
  return prisma.avaliacao.create({
    data: {
      nota: data.nota,
      comentario: data.comentario,
      data: data.data,
      emailCliente: data.emailCliente,
    },
  });
};

export const updateAvaliacao = async (id: number, data: Partial<Avaliacao>): Promise<Avaliacao | null> => {
  return prisma.avaliacao.update({
    where: { idAvaliacao: id },
    data,
  });
};

export const deleteAvaliacao = async (id: number): Promise<void> => {
  await prisma.avaliacao.delete({
    where: { idAvaliacao: id },
  });
};