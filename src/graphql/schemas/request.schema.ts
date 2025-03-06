import { buildSchema } from "graphql";

export const requestSchema = buildSchema(`
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