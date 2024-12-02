import { SIGNIN_MUTATION } from "@/graphql/mutations/signin";
import client from "@/lib/apollo-client";
import NextAuth, { User, NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const BASE_PATH = "/api/auth";

const authOptions: NextAuthConfig = {
  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "password", type: "password" },
      },
      authorize: async (credentials): Promise<User | null | any> => {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const { email, password } = credentials;

        try {
          const { data } = await client.mutate({
            mutation: SIGNIN_MUTATION,
            variables: { email, password },
          });

          if (data?.signin) {
            return {
              email: email,
              token: data.signin,
            };
          }

          return null;
        } catch (error) {
          console.error("Login failed:", error);
          return null;
        }
      },
    }),
  ],
  pages: { signIn: "/signin", newUser: "/signup" },
  basePath: BASE_PATH,
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
