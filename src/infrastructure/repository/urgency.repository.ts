import { PrismaClient } from "@prisma/client";

import UrgencyEntity from "../../domain/entities/urgency.entity";

const prisma = new PrismaClient();

class UrgencyRepository {
    async getAllUrgencies(): Promise<UrgencyEntity[]> {
        const urgencies = await prisma.urgency.findMany();
        return urgencies.map((urgency) => new UrgencyEntity(urgency.id, urgency.name));
    }


}

export default new UrgencyRepository();