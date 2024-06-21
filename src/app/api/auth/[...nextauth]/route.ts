import NextAuth, { NextAuthOptions } from 'next-auth';
// import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
// import axios from 'axios';


export const authOptions: NextAuthOptions = {
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID!,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    //   authorization: {
    //     params: {
    //       scope: 'openid email profile'
    //     }
    //   }
    // }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}auths/login/`,{
              email: credentials?.email,
              password: credentials?.password,
            });
            const data = response.data;
            console.log(data)
            if (data && data.user && data.access && data.refresh) {
              console.log(data.access)
              return {
                id: data.user.id,
                name: data.user.name,
                email: data.user.email,
                access_token: data.access,
                refreshToken: data.refresh,
              };
            }
            
        } catch (error) {
            console.log("Authentication Error", error);
            return null
        }
        return null;
    },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // async signIn({ user, account, profile }) {
    //   if (account?.provider === 'google') {
    //     try {
    //       const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auths/google/`, {
    //         email: profile?.email, // Use profile.email to get the email from Google profile
    //       });
    //       if (response.data && response.data.access && response.data.refresh) {
    //         user.access_token = response.data.access;
    //         user.refreshToken = response.data.refresh;
    //       }
    //     } catch (error) {
    //       console.error('Google sign-in error:', error);
    //       return false;
    //     }
    //   }
    //   return true;
    // },
    async jwt({ token, user }: {token: any, user:any}) {
      if (user) {
        token.access_token = user.access_token;
        token.refreshToken = user.refreshToken
        token.email = user.email
        token.name = user.name;
      }
      return token;
    },
    async session({ session, token }: {session: any, token:any}) {
        if (token) {
          session.access_token = token.access_token;
          session.refreshToken = token.refreshToken;
          session.email = token.email;
          session.name = token.name;
        }
      return session;
    },
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? url : baseUrl;
    }
  },
  pages: {
    signIn: '/login',
    newUser: '/shop',
  },
  events: {
    async signOut({ token }) {
      if (token?.refreshToken) {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}auths/logout/`, {
            refresh_token: token.refreshToken,
          });
        } catch (error) {
          console.error('Error during signout:', error);
        }
      }
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
