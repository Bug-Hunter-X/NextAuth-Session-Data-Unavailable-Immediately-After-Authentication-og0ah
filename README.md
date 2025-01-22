# NextAuth Session Data Unavailable Immediately After Authentication

This repository demonstrates a common issue when using NextAuth.js in Next.js 15: accessing session data before it's fully available after authentication.

## Problem

When a user logs in via NextAuth, the session data isn't immediately accessible within all components.  Attempting to access `session.user` before the session is fully populated results in an error, typically a `TypeError: Cannot read properties of undefined (reading 'user')`.

## Solution

The solution involves using a loading state or conditional rendering to handle cases where the session data is still being fetched. This prevents the error by only rendering the component once the data is available.

## Reproduction

1. Clone this repository.
2. Install dependencies: `npm install`
3. Set up environment variables for `GOOGLE_CLIENT_ID` and `GOOGLE_CLIENT_SECRET`.
4. Run the development server: `npm run dev`
5. Try to log in with a Google account. You should see the error.  Then check out the solution branch to see the fixed code.