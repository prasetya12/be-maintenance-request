import { buildSchema } from "graphql";

export const statusSchema = buildSchema(`
  type Status {
    id: Int!
    name: String!
  }

  type Query {
    getstatus: [Status!]!
  }
`);