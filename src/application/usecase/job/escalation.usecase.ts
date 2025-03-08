import requestRepository from "../../../infrastructure/repository/request.repository";
import { differenceInHours } from "date-fns";
class EscalationUseCase {
    async execute() {
        const now = new Date();
        const requestOpen = await requestRepository.getRequestOpen()
        const ID_LESS_URGENT = 2
        const ID_URGENT = 3
        const ID_EMERGENCY = 4



        for (const request of requestOpen) {
            const hoursElapsed = differenceInHours(now, new Date(request.createdAt));
            let newUrgency = request.urgencyId;

            if (request.urgencyId == ID_LESS_URGENT && hoursElapsed >= 72) { //3 days
                newUrgency = ID_URGENT
            } else if (request.urgencyId == ID_URGENT && hoursElapsed >= 6) { //6 hours
                newUrgency = ID_EMERGENCY
            }

            await requestRepository.updateUrgencyById(request.id, newUrgency)

        }
    }

}

export default new EscalationUseCase();