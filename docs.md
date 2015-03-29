---
layout: docs
title: Documentation
---

## Welcome to Netlify

[Netlify](http://www.netlify.com) builds, deploys and hosts your front end.

## Quickstart

Deploying a new site with Netlify is so simple it fits in a tweet:

```
npm install netlify-cli -g
cd my-site-folder
netlify deploy
```

This is all you need to deploy a static site folder, but Netlify can do much more for you.

## Continuous Deployment

For anything larger than a one page landing, you really should be using a static site generator or a front-end build tool like grunt or gulp.

If you're using any of those, Netlify can make the process of collaborating and deploying much smoother.

Netlify lets you link a Github repository to a site. Each time you push to Github, Netlify runs a build with your tool of choice and deploys the result to our powerful CDN.

## Getting Started

Netlify can be used both from our web UI at [app.netlify.com](http://app.netlify.com) or by using our [command line tools](/docs/cli).

To start with the web UI, simply head to [app.netlify.com](http://app.netlify.com) and sign in.

To start by manually deploying a folder with a static site to Netlify, make sure you have `node js` installed and then follow these steps:

```
npm install netlify-cli -g
cd ~/my-static-website
netlify deploy
```

## Netlify's Docs

This site is a great example of a project built on Netlify.

All of our documentation (this whole site in fact) is in a [Github repository](https://github.com/netlify/netlify-home).

Whenever we push to Github or accept a pull request, Netlify will do a clean build of the site with [Jekyll](http://jekyllrb.com/) and deploy the result.
