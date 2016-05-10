---
title: 10 Reasons Your Site Should Be Static
author: Aaron Autrand
image: null
image_caption: ""
short_title: 10 Reasons For Static Sites
description: Is a static site right for you?
thumbnail: /uploads/swirling-globe_66243268.jpg
cmsUserSlug: ""
date: 2016-05-09 
tags: null
---

Very often, websites are overkill. 

There's no reason to have a massive, unwieldy thing with a thing when you could have a fast, secure and beautiful static site. But how do you know that you can use a static site?

### 1. You Value Security

A survey by so-and-so found that up to 70% of all WordPress installs are vulnerable to known security exploits. When was the last time you updated your CMS? In 2014, millions of Drupal sites were vulnerable due to a bug in the code, and Drupal told users that if they hadn't updated within 7 hours, they should assume that they were hacked.

With a static site, you don't have to worry about malicious code being injected into your site when users visit it. Static sites are built on a production machine (probably the machine you are reading this on) by static site generators, which take your code and spit out flat HTML files with CSS and JavaScript. When a user requests a page from your site, the server just sends them the file for that page, instead of building that page from various assets each time. No build process means standard hacking attacks like scripting or database security exploits just don't work.

### 2. You Value Speed

What does a browser do? It renders HTML, CSS and JavaScript into a human-viewable format. No matter what type of site you use, a legacy dynamic site or a modern static one, what gets sent from the server to your browser is HTML, CSS and JavaScript. So why take the time and resources to render your site every single time someone visits when you can have a pre-built version ready to go? There's a reason that a normal static site hosted on a CDN is often 10 times faster time-to-first-byte than a site built with a legacy CMS.

Additionally, by hosting your static site on a CDN, you can serve it from whichever node is closest to your users. Someone viewing your site in a coffee shop in Vienna pulls from a European server, not a server farm in the Silicon Valley. The same goes for your Japanese visitors, or a user just down the street.

### 3. Flexibility

Your basic site built with WordPress or Drupal starts out as a one-size-fits-all solution that is then customised by bolting on plugins. A lot of plugins. Seriously, so many plugins. A quick Google search for "must have WordPress plugins" yields a front page where nine of the ten posts list 20 plugins or more as "must have".

With a static site, you can get lean and mean, with a tool that does exactly what you need it to. Like to blog? Try out [Jekyll](http://jekyllrb.com) or [Hugo](http://gohugo.io). Want a high performance marketing site? Make like the pros and use [Middleman](http://www.middlemanapp.com) or [Roots](http://www.roots.cx). Trying to showcase your visual portfolio? Maybe [Cactus](https://github.com/koenbok/cactus) is right for you. And if you want something so finely tuned and streamlined to your complete specifications, [Metalsmith](http://metalsmith.io) is definitely the way to go.

No matter what tools you prefer to develop in, whether it be Node, Ruby, Python or something else, there's a static tool for you. We've covered all these and more [before](https://www.netlify.com/blog/2016/05/02/top-ten-static-website-generators), or you can learn more yourself by visiting [staticgen.com](https://www.staticgen.com), the best source for information on static website generators on the internet.  

### 4. Smaller Footprint

Your WordPress install (especially if you are hosting it yourself) is a Frankenstein's monster of cobbled together software and hardware, and probably looks something like this:

a machine running your preferred distro of Linux
a web server running Nginx or Apache
PHP with its associated extensions and web server configurations
MySQL
WordPress (obviously)
All the plugins you need (see #3)
Your theme and template code

If you don't want to host your own, then you just have to hope that your host keeps its PHP and MySQL up to date, so that you aren't exposed to those pesky security vulnerabilities that crop up every now and again. Then there is the upkeep. Make sure you've allotted time to manage all these dependencies. And some more time in case an updated plugin or theme breaks something.

A static site, when generated, is capable of being hosted on any web server that can return HTML files (which gives you a whole bunch of options). Of course, you'll want to take advantage of the possibilities afforded to you with a static site by finding a host that allows for things like continuous deployment, instant cache invalidation, automated deploys and more. But you can leave that to somebody else, and instead of installing, managing and updating your CMS, you can focus on developing your site.


### 5. Reliability

![databaseerrorimage](databaseerrorimage)

Does that look familiar (and painful)? If you've managed to avoid it with your own site thus far...congratulations, you are in rare company. Obviously, working without a database you won't see that, but static site reliability goes beyond database errors. The beauty of serving up flat HTML files is that they can be hosted anywhere and everywhere, like on a CDN. Let's say there's a DDoS attack on the server where your legacy site is hosted. Sorry, but you might just be screwed for a few hours (or days). That same attack hits a node where your static site is hosted? Your site just gets served up from the next closest node. Your visitors never even notice that there's a problem.

### 6. Versioning

It's completely possible to design a site on your production machine and then upload it to a host (whether via a command line tool or a drag-and-drop interface), but the majority of developers will end up using some sort of version control system like Git. As a developer, you probably already know how much of a lifesaver this can be on projects, but it's just as big a deal when it comes to developing websites as well. Screwups can be rolled back to earlier commits, meaning that, short of deleting your online repository, you can always go back to a previous version of your site with a few keystrokes. And if you are a Netlify customer, you can roll back to a previous deploy with just two clicks.

### 7. Scalability

You've hit it big! Your site has gone viral, and you are seeing absolutely massive response and increased visits thanks to getting namechecked across the social media spectrum. Did you anticipate that this might happen? Did you overprovision massively, just in case this happened? Are you paying for huge chunks of bandwidth monthly, hoping for (and fearing) an explosion of traffic.

Or are you making frantic calls to your service provider to get back up online after you made it to Reddit's front page? Your plan couldn't handle that kind of attention, and now you are down (and got dragged out of bed or away from the dinner table to try and resurrect things).

And when your traffic means that you have to scale, it means that you are paying for all that complex code to run on your server at every page request. And that's going to hit you right where it hurts: the wallet.

With static, scalability is barely an issue. Of course it scales! Increased requests mean increased pages served, but no extra work in building those pages. With some providers, scale is built in, while with others like Amazon's S3, all you have to pay for is the increased bandwidth.

### 7. Hosting & price

If all the heavy lifting of building a static site is done on your production machine, then what exactly is it that you are paying for with hosting? Asset storage, basically. Your static HTML files take up next to no space, and so your service is usually priced accordingly. Instead, you can spend your money where it really matters, on the features that make your site faster and your life easier, features like atomic deploys and asset fingerprinting to make sure your site is always globally consistent, or git integration and automated builds, so your site is always up to date with your latest changes, and snapshot versioning and instant rollbacks (in case your latest changes break something). 