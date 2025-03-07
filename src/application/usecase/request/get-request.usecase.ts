
import requestRepository from "../../../infrastructure/repository/request.repository";

class GetStatusUseCase {
    async execute() {
        return await requestRepository.getAllRequest();
    }

}

export default new GetStatusUseCase();