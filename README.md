# malloc

A simple secret sharing app based on Cogito Identity framework.

## Quick Start

```bash
$ yarn
$ yarn test # optionally with --no-cache
$ cd workspaces/web-app && yarn dev
```

## Deploying to zeit

From the root:

```bash
$ now
```

So, nextjs builder and nextjs itself are undergoing changes in the way the deployment is handled.

We like to use the serverless deployment, which is in every way better than the legacy one.

That's why we are using `next@canary` because this version enables *serverless* mode.

Please check and observe the following discussions:

1. https://github.com/zeit/next.js/issues/5750
1. https://github.com/zeit/now-builders/pull/150
1. https://github.com/zeit/now-examples/pull/214
1. https://github.com/zeit/next.js/issues/6144
1. https://github.com/zeit/next.js/pull/5927
1. https://github.com/zeit/next.js/issues/5846
1. https://github.com/zeit/next.js/issues/1914 (for the discussion on `__test__` folder)
