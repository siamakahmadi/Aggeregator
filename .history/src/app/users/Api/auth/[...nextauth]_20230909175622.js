import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";



export const authOptions = {  // Configure one or more authentication providers  providers: [    GithubProvider({      clientId: process.env.GITHUB_ID,      clientSecret: process.env.GITHUB_SECRET,    }),    // ...add more providers here  ],}export default NextAuth(authOptions)

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?.email) token.email = user.email

            return token
        },
        async session({session,token}){
            if(token?.email)session.user.email = token.email

            return token
        }

    }
})