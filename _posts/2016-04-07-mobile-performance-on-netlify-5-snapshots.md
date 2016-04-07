---
title: "Mobile Performance on netlify: 5 Snapshots"
author: Aaron Autrand
image: null
short_title: 5 Mobile Snapshots
description: Five top mobile sites get the netlify treatment. Will there be performance gains?
thumbnail: /uploads/stopwatch.png
cmsUserSlug: ""
date: now
tags: null
---

You've seen it splashed across the headlines - mobile internet use is growing by leaps and bounds, and overtook desktop usage last year. 

In a study by KISS Metrics on [mobile phone loading issues](https://blog.kissmetrics.com/loading-time), there were some interesting--though not surprising--takeaways.

Page abandonment increases as load times grow. If your site takes four seconds to load, you've already lost 25% of your audience. A one second delay in page response can result in a 7% reduction in conversions. To put that in dollar terms, if an e-commerce site is making $100,000 per day, a 1 second page delay could potentially cost $2.5 million in lost sales each year.

A study done by Tealeaf found that "Among those who have experienced problems conducting mobile transactions, 23% have cursed at their phones; 11% have screamed at them; and 4% have thrown them."

And despite our tenuous relationship with the internet on our mobile devices, mobile adoption is only growing.

A KPCB study in April of 2015 showed that in the US, the average user now spends 51% of their daily browsing time on a mobile device, and only 42% on desktop.

Perhaps most telling, it's estimated that 31 million Americans will go online only with a mobile devices this year.

With that in mind, let's focus on the benefits of hosting your site on netlify, and how those benefits impact users browsing your site on mobile devices.

Last year, in an article for Smashing Magazine titled [Why Static Website Generators Are The Next Big Thing](https://www.smashingmagazine.com/2015/11/modern-static-website-generators-next-big-thing/), our CEO Mathias got a little cheeky and took a snapshot of Smashing Magazine's site and hosted the static version on netlify, to measure performance gains.

We decided to repeat that stunt, but focus on top mobile sites to see what gains could be made. We used QuantCast's [list](https://www.quantcast.com/top-mobile-sites/) of top mobile sites and selected 5 sites from the top twenty. We used [HTTrack](https://www.httrack.com/) to go one level deep on each of the following sites, then ran some tests to see how this affected the time to first byte and the complete download time of the main `index.html` page. Here’s what Sucuri’s super-useful performance tool showed:
