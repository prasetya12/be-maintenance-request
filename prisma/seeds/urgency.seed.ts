import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function UrgencySeed() {
    const existingUrgencies = await prisma.urgency.findMany();
    if (existingUrgencies.length === 0) {
        await prisma.urgency.createMany({
            data: [
                { id: 1, name: "None Urgent" },
                { id: 2, name: "Less Urgent" },
                { id: 3, name: "Urgent" },
                { id: 4, name: "Emergency" },
            ],
        });
    }
    console.log("✅ Urgency table seeded successfully!");
}

export default UrgencySeed