const express = require("express");
const app = express();
const port = 7425 || process.env.PORT;
const routes = require("./api/router");
// const server = require("http").Server(app);
// const io = require("socket.io")(server);
const { ApolloServer } = require("apollo-server-express");
const query = require("qs-middleware");

// io.on("connection", client => {
//   console.log("here");
//   client.on("connect", data => {
//     console.log("connected", data);
//   });
//   socket.emit("news", { hello: "world" });
//   client.on("event", data => {
//     console.log("event", data);
//   });
//   client.on("disconnect", () => {
//     console.log("hss");
//   });
// });

const LaunchAPI = require("./datasources/launch");

const typeDefs = require("./schemas/index.js");

const server = new ApolloServer({
  typeDefs,
  dataSources: {
    LaunchAPI: new LaunchAPI()
  },
  introspection: false
});

server.applyMiddleware({ app, path: "/graphql" });
app.use(express.json());
app.use(query());

app.disable("x-powered-by");

app.listen(port, () =>
  console.log(`Server is on ${port} ${server.graphqlPath}`)
);
app.use(routes);
