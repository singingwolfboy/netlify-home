---
title: DDoS Attack
description: "At this time, all sites are operational again. If your site is using an A record on an apex domain rather than the recommended CNAME setup, you may find it useful to refer to our post [This Weekend's DDoS attack and What's in a (C)Name?](https://www.netlify.com/blog/2016/01/12/ddos-attacks-and-dns-records).\n\n "
details: "Early Saturday morning we got alerted by Rackspace that a major DDoS attack was hitting our main load balancer in their Chicago data center.\n\nThe DDoS attack was a large, mostly UDP based, volumetric attack sending more than 40GB/s of sustained traffic and overwhelming the network switch in front of the balancer.\n\nFortunately, the large majority of netlify sites kept working without any interruption of service as our system automatically detected the attack and started routing traffic away from Rackspace’s Chicago data center.\n\nHowever, a small number of sites were affected and down from this. They differed from the rest by how their DNS was setup and they were primarily sites that were using the root domain as their canonical domain, rather than prefixing their site with www.\n\nAs soon as we detected the problem, we tried to identify all sites affected by the DDoS attack and sent out instructions on how to mitigate this by changing a DNS record and directed them to the netlify docs that recommends a C-name setup as this prevents downtime from exactly this type of attack.\n\n"
resolved: true
cmsUserSlug: ""
date: 2016-01-09 
---

