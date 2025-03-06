import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function StatusSeed() {
    const existingStatuses = await prisma.status.findMany();
    if (existingStatuses.length === 0) {
        await prisma.status.createMany({
            data: [
                { id: 1, name: "Open" },
                { id: 2, name: "Resolved" },
            ],
        });
    }
    console.log("Status table seeded successfully!");
}

export default StatusSeed