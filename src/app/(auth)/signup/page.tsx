"use client";

import SignUp from "@/components/auth/signup";
import client from "@/lib/apollo-client";
import { ApolloProvider } from "@apollo/client";

export default function SignUpPage() {
  return (
    <ApolloProvider client={client}>
      <SignUp />
    </ApolloProvider>
  );
}
