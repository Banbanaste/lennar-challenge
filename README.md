## Intro

Man time flew by on that one. I started implementing 1.1 - 1.3 and quickly realized I wouldn't have time to flesh out the marketing site.

So what I ended up doing was 1.1, 1.2, 1.3, and 4.1.

I would have like to better organize the styles with styled components, but for the sake of time I used tailwind.

If I had to finish this project I would:

- prioritize organizing the styles into manageable style files at the component level
- refactor the "Navs" component.
  - while it started out okay when it was just the mobile nav. Having multiple navs in there smells like an avenue for abstraction into multiple components.
- tackle the svg error/warnings. Because I decided to copy pasta svgs from the figma there are some jsx errors (camel casing)
- Maybe replace the svgs with an icon library. Other than the logo the svgs looks pretty standard.
- Finally dive into the free trial API. There some questions that need answering before then, like what happens when "Start your free trial is clicked on the dropdown mobile menu". All other instances of the button have an email input.

## In Summary

I had fun tackling this. In hindsight maybe organizing the workload a bit more and sacrificing features may have been a better route.

Thanks and please reach out if you have any questions!

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
