---
title: Setting Up Your Custom Domain
author: Aaron Autrand
image: null
short_title: Setting Up Your Custom Domain
description: A step-by-step walkthrough on how to point your custom domain to netlify.
thumbnail: /uploads/lv55uzmx.png
cmsUserSlug: ""
date: 2016-03-08T00:00:00.000Z
tags: null
---

So you've splashed out on a personal domain, and want to connect it to your site hosted on netlify. Great! Here, we'll walk you through how to connect your site to your custom domain from most of the popular domain name registrars.

First, you want to  tell netlify to use your custom domain. You can do this through the web UI by clicking "Edit domain" when viewing your site.

![set-custom-domain.jpg](/uploads/set-custom-domain.jpg)

Next, the standard values: If your registrar isn't listed [below](#walkthroughstart), then you can use these standard values to set up your domain.

**CNAME**: `www` should point at `example.netlify.com` (replace `example` with the name of your site as listed at [https://app.netlify.com/sites](https://app.netlify.com/sites))

**A Record**: your raw domain (`example.com`) should be pointing to `198.61.251.14`

![Example DNS Records](/img/docs/dns-records.png)

Once you've added these new values, visiting `www.example.com` will take you to your new site. Remember, it could take a few hours to start pointing traffic in the right direction.

# How do I set up with [insert Registrar here]?<a id="walkthroughstart"></a>

Is it your first time setting up a custom domain? No worries, we can help with that (we've all been there). For a step-by-step walkthrough with screenshots, choose your provider:  
[GoDaddy](#godaddy)  
[NameCheap](#namecheap)
[Google Domains](#googledomains)
[DNSimple](#dnsimple)
[DNS Made Easy](#madeeasy)

## Godaddy <a id="godaddy"></a>

If you've purchased your domain on GoDaddy, follow these simple instructions to point it at your netlify site:

Step 1: Log in to your GoDaddy account 
![godaddy1.png](/uploads/godaddy1.png)

Step 2: Click the plus sign next to  `Domains`
![godaddy2.png](/uploads/godaddy2.png)

Step 3: For your chosen domain, click  `Manage DNS`
![godaddy3.png](/uploads/godaddy3.png)

Step 4: Click  `DNS ZONE FILE`
![godaddy4.png](/uploads/godaddy4.png)

Step 5: Click  `Add Record`
![godaddy5.png](/uploads/godaddy5.png)

Step 6: Add a CNAME Record as shown below, then click  `Add Another`
![godaddy6.png](/uploads/godaddy6.png)

Step 7: Add an A Record as shown below, then click  `Finish`
![godaddy7.png](/uploads/godaddy7.png)

Step 8: Don't forget to save!
![godaddy8.png](/uploads/godaddy8.png)

It could take up to 48 hours (but most likely won't) for the changes to go into effect.

## NameCheap<a id="namecheap"></a>

If you've purchased your domain on NameCheap, follow these simple instructions to point it at your netlify site:

Step 1: In your dashboard, click  `Manage`
![namecheap1.png](/uploads/namecheap1.png)

Step 2: Click  `Advanced DNS`
![namecheap2.png](/uploads/namecheap2.png)

Step 3: Under  `Type` select  `CNAME Record`. Make sure the  `Host` is set to  `www` and  `Value` is the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites), then click the green check mark
![namecheap3.png](/uploads/namecheap3.png)

Step 4: Under  `Type` select  `A Record`. Set the value to  `198.61.251.14` and click the green check mark
![namecheap4.png](/uploads/namecheap4.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

## Google Domains <a id="googledomains"></a>

Step 1: Click the server icon under  `DNS`
![goog1.png](/uploads/goog1.png)

Step 2: Scroll down to `Custom Resource Records`
![goog2.png](/uploads/goog2.png)

Step 3: Choose  `A` from the dropdown menu, and set the IPv4 address to  `198.61.251.14`, then click  `Add`
![goog3.png](/uploads/goog3.png)

Step 4: Choose  `CNAME` from the dropdown, then set the first box to  `www` and enter the name of your site as shown on [app.netlify.com/sites] (https://app.netlify.com/sites) in the  `Domain` box, then click  `Add`
![goog4.png](/uploads/goog4.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

##