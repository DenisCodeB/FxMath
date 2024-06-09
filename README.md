This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or like in this project
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Docker

### `docker compose up --build -d`

Builds, (re)creates, starts, and attaches to containers for a service. You can use flag `-d`, which means detached mode: run containers in the background.

### `docker compose exec web bash`

`web` - main service name in your docker-compose.yml . If you want to dive deeper into running container, use it after. So you can see container files and run additional commands inside.
