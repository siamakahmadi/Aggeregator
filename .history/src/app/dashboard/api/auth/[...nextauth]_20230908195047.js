import NextAuth from "next-auth/next";

export default NextAuth({
    session: {
        strategy: 'jwt',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user?.id) token._id = user.id

            return token
        },

    }
})