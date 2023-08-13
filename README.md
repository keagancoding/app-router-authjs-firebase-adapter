This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). Using next-auth (authjs) in app router example

## Getting Started

1. Gather Env Keys.

2. First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Details

Using the google provider and firestore adapter we can have access to the session and user on both client and server components

1. `/` route is a public route with the login/logout button
2. `/public` is a public route anyone can view
3. `/private` is a authenticated only route, and redirects to signin if user is not authed
