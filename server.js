import express from 'express'
import {graphqlExpress, graphiqlExpress} from 'graphql-server-express'
import bodyParser from 'body-parser'
import cors from 'cors'

import schema from './src/schema'

const PORT = 4000
const server = express()

// CORS and Body parser
server.use(cors())
server.use(bodyParser.json())

// Endpoint for client user
server.use('/graphql',
  graphqlExpress({
    schema
  })
)

// Endpoint for query testing and building
server.use('/graphiql',
  graphiqlExpress({
    endpointURL: '/graphql'
  })
)

// Start server
server.listen(
  PORT,
  () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`)
)
