---
title: "Announcing Free SSL on Custom Domains"
author: Matt Biilmann
image: null
short_title: Announcing Free SSL
description: From today HTTPS is a free one-click setup on all our plans
thumbnail: /uploads/padlock.png
cmsUserSlug: ""
date: 2016-01-15
tags: null
---

Here’s some news we’re really excited about (and we’re betting you will be too):

**Starting today**, we’re integrating [Let’s Encrypt](https://letsencrypt.org) to offer Free SSL to all our users. With one click install, HTTPS will instantly be available for your sites on all our CDN nodes, and netlify automatically handles renewals.

Promoting security as a default is really important to us, and SSL has become a must for a [number of reasons](/blog/2014/10/03/five-reasons-you-want-https-for-your-static-site), like improvement of SEO, better analytics, and of course protection of both users and content. But until now costs, implementation difficulties, and legacy API’s have stood in the way for many users.

## Let’s Encrypt

Until now most certificate authorities have been making a huge business of charging for each certificate they issue, even when issuing is a completely automated action with almost no associated cost.

Back in 2012 two Mozilla employees got fed up with this, and started the Let’s Encrypt project to turn the certificate business on it's head and make free SSL certificates available to everybody.

After years of hard work, Let’s Encrypt is now ready and have already issues more than 300,000 free SSL certificates during their period of public beta.

## A certificate isn't enough

Let's Encrypt has finally made the process of obtaining a free, trusted certificate completely automatic and have paved the way for a big push to encrypt the majority of the webs traffic.

However, one thing is obtaining a certificate, another thing is to make good use of it.

Since HTTPS requires an initial handshake between the browser and a web server, request latency is even more important for HTTPS enabled sites than for plain HTTP traffic (since both the initial handshake and the normal HTTP connection is affected).

Having your site on a CDN is the most important step to lower the time to first byte and can drastically speed up the initial SSL handshake. However, on most CDN's getting your own unique certificate or uploading a custom certificate is very expensive.

## Technical Challenges

CDN based SSL has traditionally been expensive, because managing large volumes of certificates on a global distributed network, is far more tricky than managing a simple server.

At netlify we've been working for a long time on building an efficient and secure infrastructure to distribute and rotate SSL certificate across our global network.

This has required working on patches to the open-source cache servers that powers our CDN and implementing a new system for securely transferring certificates and keys over encrypted connections, without ever storing sensitive keys on the disks of our CDN edge nodes.

All in order to be able to give all of our users easy access to free, automated SSL and to push the new category of static web tech forward.

Big kudos to the team behind Let’s Encrypt for lowering the barriers to secure communication over the internet and we hope you'll all enjoy this new netlify integration.
