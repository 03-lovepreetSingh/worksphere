import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import { users } from "./src/db/schema";
import { eq } from "drizzle-orm";
import { db } from "./src/db/index";
console.log({
  id: process.env.AUTH_GITHUB_ID,
  secret: process.env.AUTH_GITHUB_SECRET,
  authSecret: process.env.AUTH_SECRET,
});

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
  ],
  secret: process.env.AUTH_SECRET,

  callbacks: {
    async jwt({ token, account, profile }) {
      if (account?.provider === "github") {
        token.accessToken = account.access_token;
        token.username = profile?.login;
        token.email = profile?.email;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string;
      session.user.username = token.username as string;
      session.user.email = token.email as string;

      return session;
    },
    async signIn({ user }) {
      // Check if user already exists
      const existingUser = await db
        .select()
        .from(users)
        .where(eq(users.email, user.email ?? ""))
        .limit(1);

      if (existingUser.length === 0) {
        await db.insert(users).values({
          id: user.id,
          fullName: user.name ?? "",
          email: user.email ?? "",
          profileImage: user.image ?? "",
          walletAddress: null,
          bio: null,
          location: null,
          skills: [] as string[], // fix never[]
          termsAccepted: false,
          passwordHash: "", // empty string or some dummy
        });
      }

      return true; // allow sign-in
    },
  },
});
export { handlers as GET, handlers as POST };
