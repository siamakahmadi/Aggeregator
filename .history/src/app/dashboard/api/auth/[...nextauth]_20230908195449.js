import NextAuth from "next-auth/next";
import { ClientReferenceManifestPlugin } from "next/dist/build/webpack/plugins/flight-manifest-plugin";
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