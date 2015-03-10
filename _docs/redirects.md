---
title: Redirects and Rewrite Rules
position: 40
---

# Redirects and Rewrite Rules

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

You currently can't shadow a URL that actually exists within the site. This means that even if you've setup the following rewrite rule:

    /*   /index.html   200

The path `/partials/chat.html` would still render the contents of that file, if that file actually exists.
