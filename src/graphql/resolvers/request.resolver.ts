import createRequestUsecase from "../../application/usecase/request/create-request.usecase";
import updateRequestUsecase from "../../application/usecase/request/update-request.usecase";
import MarkAsResolveUseCase from "../../application/usecase/request/markasresolve.request";
import getStatsUsecase from "../../application/usecase/request/get-stats.usecase";
import getRequestUsecase from "../../application/usecase/request/get-request.usecase";
import getDetailRequestUsecase from "../../application/usecase/request/get-detail-request.usecase";
const requestResolver = {
    Query: {
        getRequests: () => getRequestUsecase.execute(),
        getStats: () => getStatsUsecase.execute(),
        getDetailRequest: (_: any, { id }: { id: string }) => getDetailRequestUsecase.execute(id)
    },

    Mutation: {
        createRequest: async (_: any, { input }: { input: { title: string; description?: string; statusId: number; urgencyId: number } }) => {
            try {
                return await createRequestUsecase.execute(input);
            } catch (error: any) {
                throw new Error(error.message);
            }

        },

        updateRequestStatus: async (_: any, { input }: { input: { id: string, title: string; description?: string; statusId: number; urgencyId: number } }) => {
            try {
                return await updateRequestUsecase.execute(input);
            } catch (error: any) {
                throw new Error(error.message)
            }
        },
        markAsResolved: async (_: any, { id }: { id: string }) => {
            try {
                return await MarkAsResolveUseCase.execute(id);
            } catch (error: any) {
                throw new Error(error.message)
            }
        },

    },
};

export default requestResolver;