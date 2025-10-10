import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { type NextRequest } from "next/server";
import { buildSchema } from "type-graphql";
import { MeResolver } from "../../apollo/resolvers";
import type { GraphQLFormattedError } from "graphql";

// For static export compatibility
export const dynamic = "force-static";

interface GraphQLHandler {
  (req: NextRequest): Promise<Response | void>;
}

let apolloServer: ApolloServer;
let handler: GraphQLHandler;

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
  } catch (error: any) {
    console.error("Failed to initialize Apollo Server:", error);

    // Fallback handler for initialization errors
    return async () => {
      return new Response(
        JSON.stringify({ error: "GraphQL server initialization failed" }),
        { 
          status: 500,
          headers: { 'Content-Type': 'application/json' }
        }
      );
    };
  }
}

// Initialize the handler
handler = initializeApolloServer() as unknown as GraphQLHandler;

export { handler as GET, handler as POST };
