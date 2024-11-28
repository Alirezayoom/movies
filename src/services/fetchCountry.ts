import client from "@/lib/apollo-client";
import { GET_COUNTRY } from "@/graphql/queries/getCountry";

export async function fetchCountry(code: string) {
  const { data } = await client.query({
    query: GET_COUNTRY,
    variables: { code },
  });
  return data;
}
