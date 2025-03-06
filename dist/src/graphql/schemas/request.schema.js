"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestSchema = void 0;
const graphql_1 = require("graphql");
exports.requestSchema = (0, graphql_1.buildSchema)(`
  type Request {
    id: Int!
    title: String!
    status: Status!
    urgency: Urgency!
    createdAt: String!
  }

  type Query {
    requests: [Request!]!
    request(id: Int!): Request
  }

  type Mutation {
    createRequest(title: String!, statusId: Int!, urgencyId: Int!): Request
  }
`);
