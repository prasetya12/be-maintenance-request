import { PrismaClient } from "@prisma/client";
import RequestEntity from "../../domain/entities/request.entity";

const prisma = new PrismaClient();

class RequestRepository {
    async create(request: Partial<RequestEntity>): Promise<RequestEntity> {
        return prisma.request.create({
            data: {
                title: request.title,
                description: request.description,
                statusId: request.statusId,
                urgencyId: request.urgencyId
            },
            include: {
                status: true,
                urgency: true,
            },
        });
    }

    async getAllRequest(): Promise<RequestEntity[]> {
        const requests = await prisma.request.findMany({
            include: {
                status: true,
                urgency: true,
            },
            orderBy: [
                { statusId: 'asc' },
                { createdAt: 'desc' },

            ]
        });

        return requests
    }

    async update(request: Partial<RequestEntity>): Promise<RequestEntity> {
        return prisma.request.update({
            where: { id: request.id },
            data: {
                title: request.title,
                description: request.description,
                statusId: request.statusId,
                urgencyId: request.urgencyId,
                updatedAt: new Date()
            },
            include: {
                status: true,
                urgency: true,
            },
        })
    }

    async updateUrgencyById(id: string, urgencyId: number) {
        return await prisma.request.update({ where: { id }, data: { urgencyId: urgencyId } });
    }

    async markAsResolve(id: string): Promise<RequestEntity> {
        const ID_RESOLVE_STATUS = 2
        return prisma.request.update({
            where: { id },
            data: {
                statusId: ID_RESOLVE_STATUS,
                updatedAt: new Date(),
                resolvedAt: new Date()
            },
            include: {
                status: true,
                urgency: true,
            },
        })
    }

    async openRequests() {
        return await prisma.request.count({
            where: { resolvedAt: null },
        });
    }

    async totalResolutionTime() {
        const resolvedRequests = await prisma.request.findMany({
            where: { resolvedAt: { not: null } },
            select: { createdAt: true, resolvedAt: true },
        });

        const totalResolutionTime = resolvedRequests.reduce((acc, req) => {
            const createdAt = new Date(req.createdAt).getTime();
            const resolvedAt = req.resolvedAt ? new Date(req.resolvedAt).getTime() : createdAt;
            return acc + (resolvedAt - createdAt);
        }, 0);

        const averageResolutionTime = resolvedRequests.length > 0
            ? totalResolutionTime / resolvedRequests.length / (1000 * 60 * 60)// Convert to hours
            : null;

        return averageResolutionTime
    }

    async urgentRequest() {
        const URGENT = 3
        const EMERGENCY = 4
        const urgentRequests = await prisma.request.count({
            where: { urgencyId: { in: [URGENT, EMERGENCY] } },
        });

        return urgentRequests;
    }

    async getDetailRequest(id: string) {
        const response = await prisma.request.findFirst({
            where: {
                id: id
            },
            include: {
                status: true,
                urgency: true,
            },
        })


        return response
    }

    async getRequestOpen() {
        const requests = await prisma.request.findMany({
            where: { resolvedAt: null }
        });

        return requests
    }


}

export default new RequestRepository();