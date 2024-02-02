import express, { Application } from "express";
import { typeDefs } from "./typedefs/user";
import { port, stage } from "./utils/contants";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { createServer } from "http";
import cors from "cors";
import bodyParser from "body-parser";

async function main() {
  const app: Application = express();
  const httpServer = createServer(app);

  try {
    console.log("Stage: ", stage);

    const apollo = new ApolloServer({
      introspection: true,
      typeDefs: typeDefs,
      resolvers: {},
      plugins: [
        ApolloServerPluginLandingPageDisabled(),
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });

    await apollo.start();

    app.use(cors());
    app.use(bodyParser.json());
    apollo.applyMiddleware({ app, path: "/graphql" });

    httpServer.listen(port, () => {
      console.log("server started on http://localhost:3000");
    });
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
}

main().catch((err) => console.error(err));
