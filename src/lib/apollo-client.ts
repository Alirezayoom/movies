import { config } from "@/config";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getClientAccessToken } from "./get-token";

const httpLink = new HttpLink({
  uri: config.graphqlApi,
});

const authLink = setContext(async (_, { headers }) => {
  try {
    const accessToken = await getClientAccessToken();
    return {
      headers: {
        ...headers,
        Authorization: `${accessToken}`,
      },
    };
  } catch {
    return {
      headers: {
        ...headers,
      },
    };
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  ssrMode: true,
});

export default client;
