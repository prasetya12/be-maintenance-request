import RequestEntity from "../../../domain/entities/request.entity";
import RequestRepository from "../../../infrastructure/repository/request.repository";
import Joi from "joi";


class CreateRequestUseCase {
    async execute(data: { title: string; description?: string; statusId: number; urgencyId: number }): Promise<RequestEntity> {
        const schema = Joi.object({
            title: Joi.string().min(3).max(255).required(),
            description: Joi.string().allow("").optional(),
            statusId: Joi.number().integer().required(),
            urgencyId: Joi.number().integer().required(),
        });

        const { error } = schema.validate(data);
        if (error) {
            throw new Error(`Validation failed: ${error.details.map((d) => d.message).join(", ")}`);
        }

        return await RequestRepository.create(data);
    }
}

export default new CreateRequestUseCase();