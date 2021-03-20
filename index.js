import express from "express";
import { schema } from "./data/schema.js";

import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Graphql learning is fun!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(8080, () => {
  console.log("Running on server port localhost:8080/graphql");
});
