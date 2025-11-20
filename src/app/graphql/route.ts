import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import type { GraphQLFormattedError } from "graphql";
import type { NextRequest } from "next/server";
import { buildSchema } from "type-graphql";
import { MeResolver } from "../../apollo/resolvers";

// For static export compatibility
export const dynamic = "force-static";

type GraphQLHandler = (req: NextRequest) => Promise<Response | undefined>;

let apolloServer: ApolloServer;
const handler: GraphQLHandler =
  initializeApolloServer() as unknown as GraphQLHandler;

async function initializeApolloServer() {
  try {
    const schema = await buildSchema({
      resolvers: [MeResolver],
    });

    apolloServer = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      introspection: process.env.NODE_ENV !== "production",
      formatError: (formattedError: GraphQLFormattedError) => {
        // Log error for debugging in development
        if (process.env.NODE_ENV !== "production") {
          console.error("GraphQL Error:", formattedError);
        }

        // Return sanitized error for production
        return {
          message:
            process.env.NODE_ENV === "production"
              ? "Internal server error"
              : formattedError.message,
          code: formattedError.extensions?.code,
          path: formattedError.path,
        };
      },
    });

    return startServerAndCreateNextHandler<NextRequest>(apolloServer, {
      context: async (req: NextRequest) => ({ req }),
    });
  } catch (error: unknown) {
    console.error("Failed to initialize Apollo Server:", error);

    // Fallback handler for initialization errors
    return async () => {
      return new Response(
        JSON.stringify({ error: "GraphQL server initialization failed" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    };
  }
}

export { handler as GET, handler as POST };
