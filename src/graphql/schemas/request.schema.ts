import { buildSchema } from "graphql";
import statusSchema from "./status.schema";
import urgencySchema from "./urgency.schema";

const requestSchema = buildSchema(`
  type Urgency {
    id: Int!
    name: String!
  }
   type Status {
    id: Int!
    name: String!
  }
  type Request {
    id: String!
    title: String!
    status: Status!
    urgency: Urgency!
    createdAt: String!
  }

  input CreateRequestInput {
    title: String!
    description: String
    statusId: Int!
    urgencyId: Int!
  }

   input UpdateRequestStatusInput {
    id: String!
    title: String!
    description: String
    statusId: Int!
    urgencyId: Int!
  }
  
  input MarkAsResolvedInput {
    id: String!
    statusId: Int!
  }

  type RequestStats {
    openRequests: Int!
    averageResolutionTime: Float
    urgentRequests: Int!
  }

  type Query {
    getRequests: [Request!]!
    request(id: Int!): Request
    getStats: RequestStats!
  }

  type Mutation {
    createRequest(input: CreateRequestInput!): Request!
    updateRequestStatus(input: UpdateRequestStatusInput!): Request!
    markAsResolved(id: String!): Request! 
  }
`);

export default requestSchema