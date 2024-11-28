export const config = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL || "https://jsonfakery.com",
  graphqlApi:
    process.env.NEXT_PUBLIC_GRAPHQL_API ||
    "https://your-graphql-endpoint.com/graphql",
};
