
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'hello world'
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

const app = express()

server.applyMiddleware({
  app
})

app.listen({
  port: 4000
}, () => {
  console.log('graphSQL listen on: http://localhost:4000' + server.graphqlPath)
})