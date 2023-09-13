import NextAuth from "next-auth/next";
import GithubProvider from "next-auth/providers/github"
import Credentials from "next-auth/providers/credentials";





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