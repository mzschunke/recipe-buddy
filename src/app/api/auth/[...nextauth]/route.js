import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "../../../../../db/connect";
import User from "../../../../../db/models/user";
import bcrypt from "bcrypt";
import mongoose from "mongoose";
import { generateRandomPassword } from "../../../../../utilities/helper/randompassword";

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await dbConnect();
          const user = await User.findOne({ email });
          if (!user) {
            return null;
          }
          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return null;
          }
          return { id: user._id, name: user.name, email: user.email };
        } catch (error) {
          console.error(error);
        }
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub;
        if (session.user.id.length < 24) {
          try {
            const email = token.email;
            const existingUser = await User.findOne({ email }).select("_id");
            if (existingUser) {
              session.user.id = existingUser._id;
            }
            if (!existingUser) {
              const hashedPassword = generateRandomPassword();
              const newUser = await User.create({
                _id: new mongoose.Types.ObjectId(),
                name: token.name,
                email: token.email,
                password: hashedPassword,
              });
              session.user.id = newUser._id;
            }
          } catch (error) {
            console.log("*** Error: ***", error);
            return res.status(500).json({
              error: "An unexpected error occurred. Please try again later.",
            });
          }
        }
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
