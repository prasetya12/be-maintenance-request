import RequestEntity from "../../../domain/entities/request.entity";
import RequestRepository from "../../../infrastructure/repository/request.repository";
import Joi from "joi";

class MarkAsResolveUseCase {
    async execute(id: string): Promise<RequestEntity> {

        if (!id) {
            throw new Error(`Id not found`);
        }
        return await RequestRepository.markAsResolve(id);
    }
}

export default new MarkAsResolveUseCase();