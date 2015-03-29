---
title: Custom Domains
position: 30
---

## Using a custom domain

You can easily use your own domain for a Netlify site.

## Assigning the domain

First you need to assign the domain to the site you want us to show.

You can do this through the web UI by clicking "Edit domain" when viewing your site.

You can also assign domains through the [CLI tool](/docs/cli) with the `netlify update` command.

## DNS configuration

You'll need to point the DNS records for the domain at our servers.

* Create a CNAME that will "alias" your site to `www.netlify.com`. If your domain is `example.com`, you might alias `www.example.com` to `www.netlify.com`.
* Create an A record for the raw domain (example.com) pointing to `198.61.251.14`

If your DNS provider supports CNAME or ALIAS records for apex domains you can instead alias the raw domain to `www.netlify.com`

Depending on your DNS provider changes to DNS records can take several hours to propagate, so be patient.

## Naked domains?

You can use Naked domains with Netlify, but we recommend you always use the www version of the domain (eg. www.example.com) for your site. This makes it easier to take advantage of Netlify's powerful CDN.

If you prefer the naked domain, we recommend you use a DNS provider that supports CNAME or ALIAS records for apex domains such as Cloudflare or DNSimple.

## Domain redirects

We'll automatically set up redirects for the alternative domain to the primary domain. So if you use `www.example.com`, we'll configure `example.com` to do a 301 redirect to the `www` domain. If you assign the naked domain to your site, we'll redirect in the opposite direction.
