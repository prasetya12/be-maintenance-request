
import UrgencySeed from './seeds/urgency.seed';
import StatusSeed from './seeds/status.seed';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    await StatusSeed();
    await UrgencySeed();
}

main()
    .catch((e) => console.error("❌ Error seeding database:", e))
    .finally(async () => {
        await prisma.$disconnect();
        process.exit(0);
    });