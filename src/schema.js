import {makeExecutableSchema, addMockFunctionsToSchema} from 'graphql-tools'
import resolvers from './resolvers'

// Defines the Querys that can be used
export const typeDefs = `
type Channel {
  id: ID!
  name: String
}

type Creator {
  name: String
}

type Query {
  channels: [Channel],
  creator: Creator
}
`

// Makes the Querys executable and apply resolvers to them
export default makeExecutableSchema({typeDefs, resolvers})
