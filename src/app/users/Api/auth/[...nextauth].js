import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        // Add your authentication logic here and return user data if authenticated
        if (
          credentials.username === "user" &&
          credentials.password === "password"
        ) {
          return Promise.resolve({ id: 1, name: "User" }); // Replace with actual user data
        } else {
          return Promise.resolve(null);
        }
      },
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      // Add custom session data here
      session.user.id = user.id;
      return session;
    },
  },
});
