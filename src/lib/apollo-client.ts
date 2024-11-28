import { config } from "@/config";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: config.graphqlApi,
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;
