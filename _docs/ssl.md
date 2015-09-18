---
title: SSL / HTTPS
position: 35
---

## Enabling SSL for your Custom Domain

Netlify lets you enable SSL for your domain on all our paid plans.

SSL is becoming more and more important on todays internet, and there's plenty of good reasons for [enabling SSL on your static website](/blog/2014/10/03/five-reasons-you-want-https-for-your-static-site).

## Basic vs Full SSL

Netlify offers two different SSL solutions: **Basic SSL** and **Full SSL**

**Basic SSL** is based on a browser standard called **SNI**. Without SNI the browser will never send the domain name of the site in clear text, but requires an encrypted connection first. This means that when you're serving sites for lots of different domains (like our CDN edge nodes are), you need a dedicated IP address for each domain or a very large shared certificate that lists all possible domains on the service.

With SNI the browser sends the domain in cleartext before opening an encrypted connection, and this gives our CDN edge nodes a chance to pick the right certificate for the domain and use that for the encryption handshake.

Today SNI works in all modern browsers, but users on IE on Windows XP or older Android phones will be unable to access your site over HTTPS without going through very scary looking error messages. Youmight also experience issues with certain automated tools, like PhantomJS before 2.0.

**Full SSL** is a solution that combines a specific SNI certificate unique for your domain, with a fallback shared certificate combining lots of domains.

This gives support for all browsers, even older browsers with no SNI support, with the same ease of setup as our SNI based solution and a much lower cost than SSL solutions based on dedicated IPs.

**Dedicated IP SSL** is available on our enterprise plans. If you wan't your own unique certificate available to all browsers without requiring SNI and without a shared certificate as fallback, [get in touch](/contact)

## Netlify Certificates

All our paid plans include a certificate for one custom domain.

Simply go to the SSL screen and click "Provision New Certificate", then netlify will provision a new domain validated certificate and automatically install it on all our CDN edge nodes. The process normally takes about 1 minute from you click the button and until your site supports HTTPS.

You'll need to configure the DNS for the custom domain before you can provision a netlify certificate. To provision the certificate netlify needs to go through a domain validation process, and this step cannot be completed unless your domain is already pointing at our servers.

If you're migrating an existing site and need to complete this process before changing the DNS settings, please [get in touch](/contact)

## Custom Certificates

If you already have a certificate for your domain and prefer that to netlify's domain validated certificate, you can easily install your own.

Be aware that while netlify automatically handles renewals for certificates we provision, you'll have to manually renew your custom certificate yourself before it expires.

To install a certificate, you'll need the certificate itself in X.509 PEM format (normally this will be a .crt file), the private key you've used to request the certificate and a chain of intermediary certificates from your Certificate Authority (CA).

Click "Provide Your Own" certificate, and then past in the certificate, each of the intermediary certificates and the private key.

Netlify validates that the certificate matches the custom domain for your site and that the DNS records for the domain is pointed at netlify, and then installs your certificate. If your certificate covers several of your sites (ie., if it's a wildcard certificate or uses subject alternative names), you only need to install it for one site.
