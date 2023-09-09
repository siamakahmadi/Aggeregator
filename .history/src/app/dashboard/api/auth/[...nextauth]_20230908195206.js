import NextAuth from "next-auth/next";

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?.email) token.id = user.id

            return token
        },
        async session({session,token}){
            if(token?.id)session.user.id = token
        }

    }
})