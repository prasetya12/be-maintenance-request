// import { requestRepository } from "../../infrastructure/prisma/requestRepo";

// const requestResolver = {
//   Query: {
//     getRequests: () => requestRepository.getAll(),
//   },

//   Mutation: {
//     createRequest: async (_: any, { title, description, urgencyId }: any) => {
//       return await requestRepository.create({ title, description, urgencyId });
//     },

//     updateRequestStatus: async (_: any, { requestId, statusId }: any) => {
//       return await requestRepository.updateStatus(requestId, statusId);
//     },
//   },
// };

// export default requestResolver;