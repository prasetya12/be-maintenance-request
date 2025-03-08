import requestRepository from "../../../infrastructure/repository/request.repository";
class GetStatsUseCase {
    async execute() {
        const totalOpenRequest = await requestRepository.openRequests()
        console.log(totalOpenRequest, 'a')
        const totalResolutionTime = await requestRepository.totalResolutionTime()
        const totalUrgentRequst = await requestRepository.urgentRequest()

        return {
            openRequests: totalOpenRequest,
            averageResolutionTime: totalResolutionTime,
            urgentRequests: totalUrgentRequst
        }

    }

}

export default new GetStatsUseCase();