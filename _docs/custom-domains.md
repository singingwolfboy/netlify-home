---
cmsUserSlug: custom-domains
date: 2015-06-03T00:00:00.000Z
title: Custom Domains
position: 30
---

## Using a custom domain

You can easily use your own domain for a Netlify site.

## Assigning the domain

First you need to assign the domain to the site you want us to show.

You can do this through the web UI by clicking "Edit domain" when viewing your site.

![set-custom-domain.jpg](uploads/set-custom-domain.jpg)

You can also assign domains through the [CLI tool](#command-line-tools) with the `netlify update` command.

**We highly recommend using a www domain instead of an apex domain (ie. www.example.com instead of example.com**. Unless your DNS provider supports ANAME or ALIAS records for the apex domain you won't be able to take full advantage of our CDN unless you use the **www** prefix or a similar subdomain.

## DNS configuration

You'll need to point the DNS records for the domain at our servers.

* Create a CNAME that will "alias" your site to `<site-name>.netlify.com`. If your domain is `example.com` and your site is at `example.netlify.com`, you would create a CNAME record for **www** pointing at `www.example.com` to `example.netlify.com`.
* Create an A record for the raw domain (example.com) pointing to `198.61.251.14`

![Example DNS Records](uploads/dns-records.png)

If your DNS provider supports ANAME or ALIAS records for apex domains you can instead alias the raw domain to `www.netlify.com`

Depending on your DNS provider changes to DNS records can take several hours to propagate, so be patient.

## Domain Provider-specific Walkthroughs

Walkthroughs for a number of popular domain providers are below. Use the links to jump to your provider:

[GoDaddy](#godaddy)  
[NameCheap](#namecheap)  
[Google Domains](#googledomains)  
[DNSimple](#dnsimple)  
[DNS Made Easy](#madeeasy)  
[1and1](#1and1)  

### Godaddy <a id="godaddy"></a>

If you've purchased your domain on GoDaddy, follow these simple instructions to point it at your netlify site:

Step 1: Log in to your GoDaddy account  
![godaddy1.png](uploads/godaddy1.png)

Step 2: Click the plus sign next to  `Domains`  
![godaddy2.png](uploads/godaddy2.png)

Step 3: For your chosen domain, click  `Manage DNS`  
![godaddy3.png](uploads/godaddy3.png)

Step 4: Click  `DNS ZONE FILE`  
![godaddy4.png](uploads/godaddy4.png)

Step 5: Click  `Add Record`  
![godaddy5.png](uploads/godaddy5.png)

Step 6: Add a CNAME Record as shown below, then click  `Add Another`  
![godaddy6.png](uploads/godaddy6.png)

Step 7: Add an A Record as shown below, then click  `Finish`  
![godaddy7.png](uploads/godaddy7.png)

Step 8: Don't forget to save!  
![godaddy8.png](uploads/godaddy8.png)

It could take up to 48 hours (but most likely won't) for the changes to go into effect.

### NameCheap<a id="namecheap"></a>

If you've purchased your domain on NameCheap, follow these simple instructions to point it at your netlify site:

Step 1: In your dashboard, click  `Manage`  
![namecheap1.png](uploads/namecheap1.png)

Step 2: Click  `Advanced DNS`  
![namecheap2.png](uploads/namecheap2.png)

Step 3: Under  `Type` select  `CNAME Record`. Make sure the  `Host` is set to  `www` and  `Value` is the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites), then click the green check mark  
![namecheap3.png](uploads/namecheap3.png)

Step 4: Under  `Type` select  `A Record`. Set the value to  `198.61.251.14` and click the green check mark  
![namecheap4.png](uploads/namecheap4.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

### Google Domains <a id="googledomains"></a>

If you've purchased your domain on Google Domains, follow these simple instructions to point it at your netlify site:

Step 1: Click the server icon under  `DNS`  
![goog1.png](uploads/goog1.png)

Step 2: Scroll down to `Custom Resource Records`  
![goog2.png](uploads/goog2.png)

Step 3: Choose  `A` from the dropdown menu, and set the IPv4 address to  `198.61.251.14`, then click  `Add`  
![goog3.png](uploads/goog3.png)

Step 4: Choose  `CNAME` from the dropdown, then set the first box to  `www` and enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites) in the  `Domain` box, then click  `Add`  
![goog4.png](uploads/goog4.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

### DNSimple <a id="dnsimple"></a>

If you've purchased your domain on DNSimple, follow these simple instructions to point it at your netlify site:

Step 1: From your dashboard, click the name of your domain  
![dnsimple1.png](uploads/dnsimple1.png)

Step 2: Click  `Services`  
![dnsimple2.png](uploads/dnsimple2.png)

Step 3: Click  `Add or edit services`  
![dnsimple3.png](uploads/dnsimple3.png)

Step 4: Scroll down to netlify, then click  `Add service`  
![dnsimple4.png](uploads/dnsimple4.png)

Step 5: Enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites) and then click  `Complete Netlify Setup`  
![dnsimple5.png](uploads/dnsimple5.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

### DNS Made Easy <a id="madeeasy"></a>

If you've purchased your domain on DNSimple, follow these simple instructions to point it at your netlify site:

Step 1: Click  `Domains`  
![madeeasy1.png](uploads/madeeasy1.png)

Step 2: Click the name of your domain  
![madeeasy2.png](uploads/madeeasy2.png)

Step 3: Under  `A Records` click the  `+` sign  
![madeeasy3.png](uploads/madeeasy3.png)

Step 4: Leave the  `Name` field blank, enter  `198.61.251.14` in the  `IP` field, and click  `Submit`  
![madeeasy4.png](uploads/madeeasy4.png)

Step 5: Under  `CNAME Records` click the  `+` sign  
![madeeasy5.png](uploads/madeeasy5.png)

Step 6: In the  `Name` field enter  `www`, and in the  `Alias to` field enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites). Then click  `Submit`  
![madeeasy6.png](uploads/madeeasy6.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

### 1and1 <a id="1and1"></a>

If you've purchased your domain on 1and1, follow these simple instructions to point it at your netlify site:

Step 1: After logging in to 1and1, click  `Domains` in the left sidebar  
![1and11.png](uploads/1and11.png)

Step 2: Click  `Manage domains`  
![1and12.png](uploads/1and12.png)

Step 3: Click  `Edit DNS Settings`  
![1and13.png](uploads/1and13.png)

Step 4: Scroll down to  `A/AAAA and CNAME Records`. Select  `Other IP address` and enter  `198.61.251.14` in the  `IPv4 Address` box. Then scroll to the bottom and click  `Save`  
![1and14.png](uploads/1and14.png)

Step 5: After clicking  `Save`, you will be returned to the Domains page. Click  `Manage Subdomains`  
![1and15.png](uploads/1and15.png)

Step 6: Click  `Create Subdomain`  
![1and16.png](uploads/1and16.png)

Step 7: In the  `Create Subdomain` box, enter  `www`, then click  `Create Subdomain`
![1and17.png](uploads/1and17.png)

Step 8: Click the down arrow to expand your options, then click  `Edit DNS Settings`  
![1and18.png](uploads/1and18.png)

Step 9: Scroll down to  `A/AAAA and CNAME Records`. Select  `CNAME`. In the  `Alias` field enter the name of your site as shown on [app.netlify.com/sites](https://app.netlify.com/sites). Then click  `Save`  
![1and19.png](uploads/1and19.png)

Your custom domain is now pointing at your netlify site. Remember, it may take up to a few hours for everything to work correctly.

## Naked domains?

You can use Naked domains with Netlify, but we recommend you always use the **www** version of the domain (eg. www.example.com) for your site. This makes it easier to take advantage of Netlify's powerful CDN.

If you prefer the naked domain, we recommend you use a DNS provider that supports ANAME or ALIAS records for apex domains such as [DNSimple](https://dnsimple.com/) or [DNS Made Easy](http://www.dnsmadeeasy.com/aname-records/). If you set an A record for the apex domain, you won't be able to take advantage of the full Netlify CDN. If your provider lets you set an ALIAS, the full CDN will work. If not, your assets (Javascript, CSS, images) will be served out of a global CDN, but your HTML will be served out of our primary datacenter in the US.

## Domain redirects

We'll automatically set up redirects for the alternative domain to the primary domain. So if you use `www.example.com`, we'll configure `example.com` to do a 301 redirect to the `www` domain. If you assign the naked domain to your site, we'll redirect in the opposite direction.

We only redirect automatically between the root domain and www. Not any other subdomains.

## Domain aliases

Depending on your plan, you can setup domain aliases for your domain, so the same site will be rendered on several different domains.

You can use domain aliases together with [rewrite and redirect](#redirects) to redirect or rewrite based on the current domain of the site.
