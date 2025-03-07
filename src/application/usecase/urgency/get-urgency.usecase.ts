import UrgencyEntity from "../../../domain/entities/urgency.entity";
import urgencyRepository from "../../../infrastructure/repository/urgency.repository";
class GetUrgenciesUseCase {
    async execute(): Promise<UrgencyEntity[]> {
        return await urgencyRepository.getAllUrgencies();
    }

}

export default new GetUrgenciesUseCase();