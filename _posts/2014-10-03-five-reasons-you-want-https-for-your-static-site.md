---
title: Five Reasons You Want HTTPS for Your Static Site
author: Mathias Biilmann
image: /img/posts/lock.jpg
short_title: Five Reasons for HTTPS
description: "HTTPS is not just for E-commerce sites. Here's five reasons you should invest in HTTPS for your static site today."
thumbnail: /img/posts/thumbnails/lock.jpg
cmsUserSlug: five-reasons-you-want-https-for-your-static-site
date: 2014-10-03T00:00:00.000Z
tags:
  - https
  - ssl
  - security
  - features
  - seo
  - analytics  
---

*For information on how to setup SSL / HTTPS on netlify, please click [here](https://www.netlify.com/docs/ssl)*

> "Does HTTPS really make any sense for a static web site?"

We've heard this a couple of times when talking about netlify's HTTPS support.

It might seem like a static site is already plenty secure: there's no moving parts, no risk of SQL injection, no openings for XSS attacks, no cookies to hijack, no personalized data sent over the wire, etc, etc, etc...

So why spend extra and take even the smallest performance hit just to add HTTPS to a static site?

Here are 5 good reasons you should switch to HTTPS for your static site today:

<!-- excerpt -->

## 1. Improve your SEO

If you care about how well your site positions in Google searches, then adding HTTPS can give you a small boost. Google recently announced that they would [start ranking sites with HTTPS support](http://googlewebmastercentral.blogspot.com/2014/08/https-as-ranking-signal.html) higher than sites that only work under HTTP.

## 2. Better Analytics

If you're not using HTTPS for your site, you're missing out on really important Analytics data.

We all want to know where our visitors come from. Being able to dive into our traffic sources is one of the major selling points of Google Analytics or any of their alternatives.

Browsers, however, won't send the important "Referer" header when a user follows a link from an HTTPS site to a plain HTTP site. As more and more sites start forcing HTTPS this becomes a larger and larger problem for site owners without HTTPS enabled.

If you got an inbound link from [HackerNews](https://news.ycombinator.com) and your site is not HTTPS, you won't see see Hacker News as a traffic source at all in your Analytics, since Hacker News forced HTTPS. Want to know the bounce rate from the Hacker News audience? Tough luck unless you run HTTPS.

Same goes for any other traffic source enforcing HTTPS and there are more of those every day.


## 3. Protect your content

Last month Comcast received a lot of flak when people found out they were [injecting adware into people's browsers](http://arstechnica.com/tech-policy/2014/09/why-comcasts-javascript-ad-injections-threaten-security-net-neutrality/) when using their Xfinity public Wi-Fi hotspots.

They're not the first, and they won't be the last, to tamper with traffic over public networks. As a website owner, having other companies inject ads into your site is a disaster. Ads on a company site make you seem cheap and can seriously hurt the first impression you make on your users.

HTTPS means all the traffic between your site and your users is sent over an encrypted connection, and no-one can tamper with the source code of your site. So by enabling HTTPS you're getting a guarantee that what your users see is really what you intended.

## 4. Protect your users

HTTPS doesn't just protect users from lousy ISPs injecting ads, it also protects from more malicious man-in-the middle attacks. That inconspicuous little Facebook Like button could suddenly be opening up a phishing form to steal your users Facebook credentials. When your site is served unencrypted there's nothing stopping a malicious attacker from using it as a convenient way to hijack your users.

## 5. Take advantage of bleeding edge technologies

During the last years browsers have gone from being simple document viewers, and grown into a full operating system of their own that can run complex web apps, access users location, file system, web cams, microphones and store data locally.

With great power comes great responsibility, and one of the key security systems that all the web infrastructure relies on is the same-origin policy.

When a user gives a site access to his location or his webcam, she does it based on the domain of the site asking for permission. As browsers get more powerful, this means the trust bestowed on individual domains becomes much more valuable.

Because of this, browser vendors are starting to consider only granting these permissions to domains served with HTTPS. It's really part of the same reason as #4. How can you trust a domain, if there's no way to guarantee that what you're getting from that domain is really what the owner of the domain intended?

The new, incredibly interesting, Service Workers spec explicitly limits support to HTTPS origins and there's talks about moving in that direction for some existing browser features like geolocation.

So if you want to take full advantage of the power of modern browsers, you might have to enable HTTPS for your sites.
