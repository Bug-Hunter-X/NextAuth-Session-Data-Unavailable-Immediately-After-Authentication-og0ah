```javascript
// pages/index.js

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app</h1>
      {/* This component will cause the error, as it tries to access the session before it's available  */}
      <p>User: {JSON.stringify(session?.user)}</p>
    </div>
  );
}

// pages/api/auth/[...nextauth].js

import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      session.user = user;
      return session;
    },
  },
};
export default NextAuth(authOptions);
```