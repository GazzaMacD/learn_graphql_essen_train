import express from "express";
import schema from "./schema.js";

import { graphqlHTTP } from "express-graphql";
import resolvers from "./resolvers.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql learning is fun!");
});

const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Running on server port localhost:8080/graphql");
});
