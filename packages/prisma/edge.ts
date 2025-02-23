import { Client } from "@planetscale/database";
import { PrismaPlanetScale } from "@prisma/adapter-planetscale";
import { PrismaClient } from "@prisma/client";
import { Result_4, Transaction } from "@prisma/client/runtime/library";

const client = new Client({
  url: process.env.PLANETSCALE_DATABASE_URL || process.env.DATABASE_URL,
});
class CustomPrismaPlanetScale extends PrismaPlanetScale {
  async startTransaction(): Promise<Result_4<Transaction>> {
    // Implement the startTransaction method here
    throw new Error("Method not implemented.");
  }
}

const adapter = new CustomPrismaPlanetScale(client);

export const prismaEdge = new PrismaClient({
  adapter,
});
