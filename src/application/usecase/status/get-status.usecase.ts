import StatusEntity from "../../../domain/entities/status.entity";
import StatusRepository from "../../../infrastructure/repository/status.repository";
class GetStatusUseCase {
    async execute(): Promise<StatusEntity[]> {
        return await StatusRepository.getAllStatuses();
    }

}

export default new GetStatusUseCase();