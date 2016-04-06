---
title: Setting Up Your Custom Domain
author: Aaron Autrand
image: null
short_title: Setting Up Your Domain
description: A step-by-step walkthrough on how to point your custom domain to netlify.
thumbnail: /uploads/lv55uzmx.png
cmsUserSlug: ""
date: 2016-03-14T00:00:00.000Z
tags: null
---

So you've splashed out on a personal domain, and want to connect it to your site hosted on netlify. Great! Here, we'll walk you through how to connect your site to your custom domain from most of the popular domain name registrars.

First, you want to  tell netlify to use your custom domain. You can do this through the web UI by clicking "Edit domain" when viewing your site.

<!-- excerpt -->

![set-custom-domain.jpg](/uploads/set-custom-domain.jpg)

**We highly recommend using a www domain instead of an apex domain (ie. www.example.com instead of example.com**. Unless your DNS provider supports ANAME or ALIAS records for the apex domain you won’t be able to take full advantage of our CDN unless you use the **www** prefix or a similar subdomain. If you want an apex domain to point to your site, follow our documentation [here](https://www.netlify.com/docs/custom-domains#naked-domains).

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
[1and1](#1and1)  

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

If you've purchased your domain on Google Domains, follow these simple instructions to point it at your netlify site:

Step 1: Click the server icon under  `DNS`
![goog1.png](/uploads/goog1.png)

Step 2: Scroll down to `Custom Resource Records`
![goog2.png](/uploads/goog2.png)

Step 3: Choose  `A` from the dropdown menu, and set the IPv4 address to  `198.61.251.14`, then click  `Add`
![goog3.png](/uploads/goog3.png)

Step 4: Choose  `CNAME` from the dropdown, then set the first box to  `www` and enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites) in the  `Domain` box, then click  `Add`
![goog4.png](/uploads/goog4.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

## DNSimple <a id="dnsimple"></a>

If you've purchased your domain on DNSimple, follow these simple instructions to point it at your netlify site:

Step 1: From your dashboard, click the name of your domain
![dnsimple1.png](/uploads/dnsimple1.png)

Step 2: Click  `Services`
![dnsimple2.png](/uploads/dnsimple2.png)

Step 3: Click  `Add or edit services`
![dnsimple3.png](/uploads/dnsimple3.png)

Step 4: Scroll down to netlify, then click  `Add service`
![dnsimple4.png](/uploads/dnsimple4.png)

Step 5: Enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites) and then click  `Complete Netlify Setup`
![dnsimple5.png](/uploads/dnsimple5.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

## DNS Made Easy <a id="madeeasy"></a>

If you've purchased your domain on DNSimple, follow these simple instructions to point it at your netlify site:

Step 1: Click  `Domains`
![madeeasy1.png](/uploads/madeeasy1.png)

Step 2: Click the name of your domain
![madeeasy2.png](/uploads/madeeasy2.png)

Step 3: Under  `A Records` click the  `+` sign
![madeeasy3.png](/uploads/madeeasy3.png)

Step 4: Leave the  `Name` field blank, enter  `198.61.251.14` in the  `IP` field, and click  `Submit`
![madeeasy4.png](/uploads/madeeasy4.png)

Step 5: Under  `CNAME Records` click the  `+` sign
![madeeasy5.png](/uploads/madeeasy5.png)

Step 6: In the  `Name` field enter  `www`, and in the  `Alias to` field enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites). Then click  `Submit`
![madeeasy6.png](/uploads/madeeasy6.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

## 1and1 <a id="1and1"></a>

If you've purchased your domain on 1and1, follow these simple instructions to point it at your netlify site:

Step 1: After logging in to 1and1, click  `Domains` in the left sidebar  
![1and11.png](/uploads/1and11.png)

Step 2: Click  `Manage domains`  
![1and12.png](/uploads/1and12.png)

Step 3: Click  `Edit DNS Settings`  
![1and13.png](/uploads/1and13.png)

Step 4: Scroll down to  `A/AAAA and CNAME Records`. Select  `Other IP address` and enter  `198.61.251.14` in the  `IPv4 Address` box. Then scroll to the bottom and click  `Save`  
![1and14.png](/uploads/1and14.png)

Step 5: After clicking  `Save`, you will be returned to the Domains page. Click  `Manage Subdomains`  
![1and15.png](/uploads/1and15.png)

Step 6: Click  `Create Subdomain`  
![1and16.png](/uploads/1and16.png)

Step 7: In the  `Create Subdomain` box, enter  `www`, then click  `Create Subdomain`
![1and17.png](/uploads/1and17.png)

Step 8: Click the down arrow to expand your options, then click  `Edit DNS Settings`  
![1and18.png](/uploads/1and18.png)

Step 9: Scroll down to  `A/AAAA and CNAME Records`. Select  `CNAME`. In the  `Alias` field enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites). Then click  `Save`  
![1and19.png](/uploads/1and19.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.