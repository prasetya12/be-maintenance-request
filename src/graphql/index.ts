import { mergeSchemas } from "@graphql-tools/schema";
// import { requestSchema } from "./schemas/request.schema";
import { statusSchema } from "./schemas/status.schema";
// import { urgencySchema } from "./schemas/urgency.schema";

// import { requestResolvers } from "./resolvers/request.resolver";
import { statusResolvers } from "./resolvers/status.resolver";
// import { urgencyResolvers } from "./resolvers/urgency.resolver";

export const schema = mergeSchemas({
    schemas: [statusSchema],
    resolvers: [statusResolvers],
});