---
title: An interview with Wade Warren
author: Aaron Autrand
image: null
short_title: Interviewing Wade Warren
description: "An interview about the value of static sites and CDN hosting with VP of Operations @ Wikia that serves 36,000 http requests per second."
thumbnail: /uploads/lv55uzmx.png
cmsUserSlug: ""
date: 2015-11-09T00:00:00.000Z
tags: null
---

Modern Static Web Tech is growing by leaps and bounds as developers begin to learn just how much of a difference static web technology can make for their sites, apps and projects. At a recent [Static Web Tech Meetup](http://www.meetup.com/sf-static-web-tech/) (where we got to be in the room for the launch of [Jekyll 3.0](https://jekyllrb.com/)!!) our gracious host, Wade Warren of Wikia, took some time to talk to us about how static web technology is being used at [Wikia](http://www.wikia.com/).

**Us:** _Could you talk about the ways you guys here at Wikia use static sites to better your process?_

**Wade Warren:** Absolutely! The way Netlify has instrumented static site generation, makes it really easy to federate the creation of the sites amongst a large group of people, especially distributed around the world like we are. It ties into whatever code management system you want to use.

For us, the advantage is purely performance based. We measure dollars in milliseconds. Every millisecond costs us money. When you are running a large site at scale...

_You said you guys do 2.5 million views per day?_

We actually do 2.6 billion page views a month, but with API calls it's another 1.2 billion, so we're right at 3.8 billion total.

_Do you have any idea of what kind of improvement you guys have seen using static web tech like Netlify?_

A big part of it is that we've actually been able to divorce ourselves from the complexities of our dynamic site and generate custom implementations of pages very quickly. So the cycle time in order to generate a site or a special page went from literally days trying to work within the MediaWiki framework--and then our very heavily-forked version of it, which is very customized, mostly for performance reasons--we were able to pull ourselves out of the MediaWiki framework, which can be very confining at times, and allow the marketing team to be much more involved.

It used to be that the marketing team would come up with an idea or the design team would come up with an idea that would require engineering iterations to make MediaWiki do a thing that's completely unnatural for that application. Now, we've been able to federate that to the extent that they can come up with their idea and then they can build it themselves, whether it's in Dreamweaver and then pump out the html, and upload it to their GitHub repo with the webhooks tied in to Netlify to generate the site.

Now it's public and it's literally within hours. We can go from concept to release in hours, where it used to take days to weeks depending on the complexity of the site, and depending on how many constraints we had to overcome within the MediaWiki platform itself.

It's really interesting how back in the old days, when I started--you know, vi is my editor of choice because I've been using it for way more years than I'm willing to admit in public--everything was a static site. Back in the 90s there was no dynamic site generation. The pendulum has swung all the way to the other side where we're actually making static sites with dynamic site tools, which is completely the wrong way to think about it.

Especially when you look at security vulnerabilities, site performance issues, especially at load and at scale, nothing beats the speed, the performance and the load capacity of a static site.
