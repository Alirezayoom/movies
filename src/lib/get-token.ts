import { getSession } from "next-auth/react";

export const getClientAccessToken = async () => {
  const session: any = await getSession();
  const accessToken = session?.accessToken || "";

  return accessToken;
};
