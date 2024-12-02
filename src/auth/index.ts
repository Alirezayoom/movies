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
              id: "id",
              email: email,
              token: data?.signin,
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
  callbacks:{
    async authorized({ auth }: any) {
      const isAuthenticated = !!auth?.user;
      return isAuthenticated;
    },
    async signIn({ user, account, profile, email, credentials }: any) {
      if (account) {
        if (
          account.provider !== 'credentials' &&
          account.type !== 'credentials'
        ) {
          return false;
        }
      }
  
      // TODO: we need to make sure this user exist or email is verified here.
      return true;
    },
    async redirect({ url, baseUrl }: any) {
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;
      return baseUrl;
    },
    async jwt({ token, user }: any) {
      if (user) {
        token.user = user;
      }
      return token;
    },
    async session({ session, token }: any) {
      try {
        if (token && token?.user) {
          session.user = token?.user;
          session.accessToken = token?.user?.token;
          // delete session.user.accessToken;
        }
        return session;
      } catch (error:any) {
        return null;
      }
    },
  },
  pages: { signIn: "/signin", newUser: "/signup" },
  basePath: BASE_PATH,
  secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
};

export const { handlers, signIn, signOut, auth } = NextAuth(authOptions);
