//Dependencies
const express = require("express");
const logger = require("morgan");
const { ApolloServer } = require('apollo-server-express');
const path = require('path');
const compression = require("compression");

//Imported Files
const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');

//Database
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;

const app = express();

let server = null; 
async function startServer() {
  server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});
await server.start();
server.applyMiddleware({ app });
}
startServer();

app.use(logger("dev"));

app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});

