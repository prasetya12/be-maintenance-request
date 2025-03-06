// import { statusRepository } from "../../infrastructure/prisma/statusRepo";
import statusUsecase from "../../application/usecase/status.usecase";

export const statusResolvers = {
    Query: {
        getstatus: async () => await statusUsecase.execute(),
    },

    // createStatus: async ({ name }: { name: string }) => 
    //   await CreateStatusUseCase.execute(name),
};

export default statusResolvers;