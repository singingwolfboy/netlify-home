---
title: "CDNs: netlify's magic wand"
author: Aaron Autrand
image: null
short_title: "CDNs: netlify's magic wand"
description: "Why netlify uses a dual-CDN setup, and why you should, too."
thumbnail: /uploads/world.png
cmsUserSlug: ""
date: 2020-03-31T00:00:00.000Z
tags: null
---

The secret to netlify's sauce (or at least one of them) is our CDN--or to be more precise, our CDNs, plural.

Content Delivery Networks (CDNs) are pretty simple - they function as local asset dumps. You pay for some bandwidth, and your images, videos and downloadable content sit there, in multiple places around the globe, taking the load off the server that serves up your page. The CDN nodes are geographically aware, and make sure that if you are working from a coffee shop in Tokyo, that He-Man video (you know, the one set to Four-Non Blondes) your laptop is requesting is coming from the server just up the street, not being pushed from a server farm in San Francisco. The whole purpose of a CDN is to put that video as close to users as possible to avoid latency issues.

To put it bluntly, CDN = faster internet.

A CDN also allows for much higher uptime. If one CDN server goes down, traffic just gets rerouted to the next closest server. Things like DDoS attacks are much less effective against a CDN than they are against a single server.

Netlify has taken that to the next level. We use a dual-CDN setup to further optimize the serving of sites and assets. Large assets like video and images are on large-scale CDNs like Akamai. Their reach and size, with a huge number of nodes and massive amounts of storage, allow us to ensure that your assets are served at top speed for bottom dollar, thanks to Akamai's (and others') sheer scale.

What sets netlify apart from other hosts is our dedicated, intelligent CDN. Here's how it works:

When you connect your git repository and trigger a deploy, we build your site just as you might on your local machine, and then push it to our CDN. Your HTML, JS, etc. lives on our CDN edge nodes, not just on one server, but all around the world.

Here's where the intelligent part comes in. We add logic layers to a standard CDN setup. Those logic layers give us a significant amount of control, control that allows us to do things like instant cache invalidation, give you the ability to make rewrite/redirect and proxy rules, create and catalog build snapshots, allow rollbacks, and make sure all your site deploys are atomic. Without our dedicated CDN, the features that make netlify **netlify** just wouldn't be possible.
