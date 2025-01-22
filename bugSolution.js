```javascript
// pages/index.js

import { useSession } from 'next-auth/react';

export default function Home() {
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (session) {
    return (
      <div>
        <h1>Welcome to my Next.js app</h1>
        <p>User: {JSON.stringify(session.user)}</p>
      </div>
    );
  } else {
    return <p>Please sign in.</p>;
  }
}
```