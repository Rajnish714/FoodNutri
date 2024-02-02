import cors from "cors";
import bodyParser from "body-parser";
import express, { Application } from "express";
import { userSchema } from "./schema/user";
import { port, stage } from "./utils/contants";
import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import { Mutation } from "./mutations/index";
import { Query } from "./queries";

async function main() {
  const app: Application = express();

  try {
    const apollo = new ApolloServer({
      introspection: true,
      typeDefs: [userSchema],
      resolvers: {
        Query,
        Mutation,
      },
      plugins: [
        ApolloServerPluginLandingPageDisabled(),
        ApolloServerPluginLandingPageGraphQLPlayground(),
      ],
    });

    await apollo.start();
    app.use(cors());
    app.use(bodyParser.json());
    apollo.applyMiddleware({ app, path: "/graphql" });

    app.listen(port, () => {
      console.info(`server started on http://localhost:${port}/graphql`);
    });
  } catch (err) {
    const error = err as Error;
    console.error(error.message);
  }
}

main().catch((err) => console.error(err));
