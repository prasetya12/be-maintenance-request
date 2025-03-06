"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const schema_1 = require("@graphql-tools/schema");
// import { requestSchema } from "./schemas/request.schema";
const status_schema_1 = require("./schemas/status.schema");
// import { urgencySchema } from "./schemas/urgency.schema";
// import { requestResolvers } from "./resolvers/request.resolver";
const status_resolver_1 = require("./resolvers/status.resolver");
// import { urgencyResolvers } from "./resolvers/urgency.resolver";
exports.schema = (0, schema_1.mergeSchemas)({
    schemas: [status_schema_1.statusSchema],
    resolvers: [status_resolver_1.statusResolvers],
});
