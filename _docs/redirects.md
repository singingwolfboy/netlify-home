---
title: Redirects and Rewrite Rules
position: 40
---

## Redirects and Rewrite Rules

You can configure redirects and rewrite rules for your Netlify site by adding a `_redirects` file to the root of your site folder.


## Basic redirects

Setting up basic redirects is dead simple:

    /home              /
    /blog/my-post.php  /blog/my-post
    /news              /blog
    /google            https://www.google.com

Just list the original path followed by the new path or URL.


## HTTP Status Codes

You can specify the HTTP status code for the rewrite. The default is 301 which will do a permanent redirect.

    /home         /              301
    /my-redirect  /              302
    /pass-through /index.html    200
    /ecommerce    /store-closed  404

When the status code is 301, 302 or 303 Netlify will redirect to the target url. With any other status code Netlify will render the target url with the specified status code.

This means that you can define **rewrite** rules as well as **redirects** by specifying 200 as the status code.

## Custom 404

You can easily setup a custom 404 page. This doesn't require any redirect rules. Just add a `404.html` page to your site and it'll be picked up automatically.

## Trailing Slash

Our CDN edge nodes does URL normalization before the redirect rules kicks in. This happens to make sure we can guarantee the highest possible cache hit rate and the absolute best performance for your site.

When "Pretty URLs" is enabled under processing settings for your site, netlify will enforce consistent URL patters.

A link to /about.html will be rewritten to /about in your HTML filesand netlify will enforce a redirect from /about/ to /about

A link to /about/index.html will be rewritten to /about/ and netlify will redirect from /about to /about/

## Placeholders

You can use placeholders in the origin and target paths:

    /news/:year/:month:/:date/:slug  /blog/:year/:month/:date/:story_id

This would redirect a URL like `/news/2004/02/12/my-story` to `/blog/2004/02/12/my-story`


## Splats

An asterisk indicates a **splat** that will match anything that follows:

You can use the splat in your rewrites or redirects like this:

    /news/*  /blog/:splat

This would redirects paths like `/news/2004/01/10/my-story` to `/blog/2004/01/10/my-story`

## Query Params

You can also use query parameters in your URL matches. The following match witll redirect a URL like: `/store?id=my-blog-post` to `/blog/my-blog-post` with a `301` redirect.

```
/story id=:id  /blog/:id  301
```

Just add separate key/value pairs separated by space to match more than one query parameter.

## History Pushstate and Single Page Apps

If you're developing a single page app and want history pushstate to work so you get clean urls, you'll want to enable the following rewrite rule:

    /*    /index.html   200

This will effectively serve the index.html instead of giving a 404 no matter what URL the browser requests.

## Proxying

Just like you can rewrite paths like `/*` to `/index.html`, you can also setup rules to let parts of your site proxy to external services. Lets say you need to communicate from a Single Page App with an API on https://api.example.com that doesn't support CORS request. The following rule will let you use /api/ from your JavaScript client:

    /api/*  https://api.example.com/:splat  200

Now all requests to /api/... will be proxied through to https://api.example.com straight from our CDN servers. If the API supports standard HTTP caching mechanisms like Etags or Last-Modified headers, the responses will even get cached by CDN nodes.

## Note on shadowing

By default you can't shadow a URL that actually exists within the site when using a splat or dynamic path segment. This means that even if you've setup the following rewrite rule:

    /*   /index.html   200

The path `/partials/chat.html` would still render the contents of that file, if that file actually exists. This tends to be the preferred behavior when setting up rewrite rules for single page apps, etc.

However, if you're 100% sure that you'll always want to redirect, even when the URL match a static file, you can append an exclamation mark to the rule:

    /app/*  /app/index.html  200!

This will rewrite everything within /app/* to /app/index.html even if a file matches the URL.

## GeoIP and Language based redirects

Netlify support GeoIP and Language based redirects directly from our CDN nodes.

This is ideal for large multi-regional sites where you want to send people to the right location based on their location or browser language.

Both the language and the country can be specified in a cookie as well, so you can easily override the default behavior with JavaScript.

GeoIP and Language based redirects are available on our enterprise plan. [Please get in touch](/contact) for more details.
