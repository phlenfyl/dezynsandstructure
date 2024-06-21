// types/next-auth.d.ts
import NextAuth from "next-auth";

// prevents IDEs from removing the unused `NextAuth` import
NextAuth.name;

declare module "next-auth" {
  interface Session {
    access_token: string;
    refresh_token: string;
    user: {
      id: number;
      email: string | null;
      name?: string; // Adding name to user for Google login
    };
  }

  interface User {
    id: string;
    email: string;
    name?: string; // Adding name for Google login
    access_token?: string; // Optional access_token for Google login
    refreshToken?: string; // Optional refreshToken for Google login
  }

  interface JWT {
    user: User;
    access_token?: string; // Optional access_token for JWT
    refreshToken?: string; // Optional refreshToken for JWT
    email?: string;
    name?: string; // Adding name for JWT
  }
}
