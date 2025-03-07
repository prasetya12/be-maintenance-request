import getUrgencies from "../../application/usecase/urgency/get-urgency.usecase";

const urgencyResolver = {
    Query: {
        getUrgencies: () => getUrgencies.execute(),
    },
};

export default urgencyResolver;