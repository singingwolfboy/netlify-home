---
title: "CDNs: netlify's magic wand"
author: Aaron Autrand
image: null
short_title: "CDNs: netlify's magic wand"
description: "Why netlify uses a dual-CDN setup, and why you should, too."
thumbnail: /uploads/world.png
cmsUserSlug: ""
date: 2016-03-31 
tags: null
---

The secret to netlify's sauce (or at least one of them) is our CDN--or to be more precise, our CDNs, plural.

When assets are hosted on a CDN, they can be served much faster than assets on a single server. Geographically aware nodes make sure that if you are working from a coffee shop in Tokyo, the images, video and web pages your laptop is requesting are coming from the server just up the street, not being pushed from a server farm in San Francisco. The whole purpose of a CDN is to put data as close to users as possible to avoid latency issues.

To put it bluntly, CDN = faster internet.

A CDN also allows for much higher uptime. If one CDN server goes down, traffic just gets rerouted to the next closest server. Things like DDoS attacks are much less effective against a CDN than they are against a single server.

Netlify has taken that to the next level. We use a dual-CDN setup to further optimize the serving of sites and assets. Large assets like video and images are on large-scale CDNs like Akamai. Their reach and size, with a huge number of nodes and massive amounts of storage, allow us to ensure that your assets are served at top speed for bottom dollar, thanks to Akamai's (and others') sheer scale.

What sets netlify apart from other hosts is our dedicated, intelligent CDN. Your HTML, JS, etc. lives on our CDN edge nodes. By arranging our setup this way, we can do instant cache invalidation, rewrite/redirect and proxy rules, create and catalog build snapshots, allow rollbacks, and make sure all your site deploys are atomic. Without our dedicated CDN, the features that make netlify **netlify** just wouldn't be possible.