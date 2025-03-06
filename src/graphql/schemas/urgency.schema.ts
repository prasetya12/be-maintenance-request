import { buildSchema } from "graphql";

export const urgencySchema = buildSchema(`
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