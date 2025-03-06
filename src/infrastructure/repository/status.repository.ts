import { PrismaClient } from "@prisma/client";
import StatusEntity from "../../domain/entities/status.entity";

const prisma = new PrismaClient();

class StatusRepository {
    async getAllStatuses(): Promise<StatusEntity[]> {
        const statuses = await prisma.status.findMany();
        return statuses.map((status) => new StatusEntity(status.id, status.name));
    }


}

export default new StatusRepository();