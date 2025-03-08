import RequestEntity from "../../../domain/entities/request.entity";
import RequestRepository from "../../../infrastructure/repository/request.repository";

class GetDetailUsecase {
    async execute(id: string): Promise<RequestEntity> {
        if (!id) {
            throw new Error(`Id not found`);
        }
        return await RequestRepository.getDetailRequest(id);
    }
}

export default new GetDetailUsecase();