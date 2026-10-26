import { prisma } from "./db.js";

async function main() {
  const result = await prisma.$queryRaw`SELECT 1 AS ok`;
  console.log("Database connected:", result);
}

main()
  .catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());