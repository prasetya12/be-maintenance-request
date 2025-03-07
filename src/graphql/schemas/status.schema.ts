import { buildSchema } from "graphql";

const statusSchema = buildSchema(`
  type Status {
    id: Int!
    name: String!
  }

  type Query {
    getStatus: [Status!]!
  }
`);

export default statusSchema