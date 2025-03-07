import getStatus from "../../application/usecase/status/get-status.usecase";

const statusResolvers = {
    Query: {
        getStatus: async () => await getStatus.execute(),
    },

    // createStatus: async ({ name }: { name: string }) => 
    //   await CreateStatusUseCase.execute(name),
};

export default statusResolvers;