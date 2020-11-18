const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const persons = require('./person.json')
 
const typeDefs = gql`
  type Person {
    name: ID,
    age: Int
  }
  type Query {
    person(name: String): Person
  }
`;
 
const resolvers = {
  Query: {
    person(root, { name }) {
      return persons.find(it => it.name === name)
    },
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);