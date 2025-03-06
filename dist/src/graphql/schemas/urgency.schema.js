"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.urgencySchema = void 0;
const graphql_1 = require("graphql");
exports.urgencySchema = (0, graphql_1.buildSchema)(`
  type Urgency {
    id: Int!
    name: String!
  }

  type Query {
    urgencies: [Urgency!]!
    urgency(id: Int!): Urgency
  }

  type Mutation {
    createUrgency(name: String!): Urgency
  }
`);
