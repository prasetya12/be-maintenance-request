import { mergeSchemas } from "@graphql-tools/schema";
import requestSchema from "./schemas/request.schema";
import statusSchema from "./schemas/status.schema";
import urgencySchema from "./schemas/urgency.schema";
import urgencyResolver from "./resolvers/urgency.resolver";
import requestResolver from "./resolvers/request.resolver";
import statusResolvers from "./resolvers/status.resolver";

export const schema = mergeSchemas({
    schemas: [statusSchema, urgencySchema, requestSchema],
    resolvers: [statusResolvers, urgencyResolver, requestResolver],
});