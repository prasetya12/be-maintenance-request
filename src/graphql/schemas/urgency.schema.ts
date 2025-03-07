import { buildSchema } from "graphql";

const urgencySchema = buildSchema(`
  type Urgency {
    id: Int!
    name: String!
  }

  type Query {
    getUrgencies: [Urgency!]!
  }

  
`);

export default urgencySchema