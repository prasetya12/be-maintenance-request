"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusSchema = void 0;
const graphql_1 = require("graphql");
exports.statusSchema = (0, graphql_1.buildSchema)(`
  type Status {
    id: Int!
    name: String!
  }

  type Query {
    getstatus: [Status!]!
  }
`);
