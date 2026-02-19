import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: string, dto: CreateTransactionDto) {
    return this.prisma.transaction.create({
      data: {
        ...dto,
        amount: dto.amount,
        userId,
      },
    });
  }

  async findAll(userId: string) {
    return this.prisma.transaction.findMany({
      where: { userId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getDashboard(userId: string) {
    const transactions = await this.prisma.transaction.findMany({
      where: { userId },
    });

    const totals = {
      gastos: 0,
      economias: 0,
      investimentos: 0,
    };

    transactions.forEach((t) => {
      const value = Number(t.amount);

      if (t.type === 'GASTO') totals.gastos += value;
      if (t.type === 'ECONOMIA') totals.economias += value;
      if (t.type === 'INVESTIMENTO') totals.investimentos += value;
    });

    return {
      ...totals,
      patrimonio:
        totals.economias + totals.investimentos - totals.gastos,
    };
  }
}
