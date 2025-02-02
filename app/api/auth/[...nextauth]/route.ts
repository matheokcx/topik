import NextAuth from "next-auth";
import authConfig from "@/lib/auth";

// @ts-ignore
const handler = NextAuth(authConfig);

export { handler as GET, handler as POST };
