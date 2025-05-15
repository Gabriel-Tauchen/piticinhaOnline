import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export const findClienteByEmail = async (emailCliente: string) => {
  return prisma.cliente.findUnique({
    where: { emailCliente },
    include: { pessoa: true }, // Inclui os dados da Pessoa
  });
};