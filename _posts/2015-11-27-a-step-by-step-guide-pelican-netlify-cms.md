---
title: "A step-by-step guide: Pelican Netlify CMS"
author: Jimmi Lee
image: null
short_title: The Pelican Netlify CMS Template
description: A short guide on how to set up your very own Pelican Netlify CMS Template.
thumbnail: /uploads/pelicanthumb.png
cmsUserSlug: ""
date: 2015-11-27 
tags: null
---

### **Welcome to Netlify CMS**
While static site generators with CMS capability may be a brand new thing, we *did* cover Netlify CMS previously, with the Jekyll version of our templates [here](https://www.netlify.com/blog/2015/11/6/a-step-by-step-guide-jekyll-netlify-cms) and today we'll take a look at how to set up our pelican-netlify-cms template in much the same manner.

If you merely want to set up Pelican with continous deployment on Netlify, check out [this splendid article](https://www.netlify.com/blog/2015/11/6/a-step-by-step-guide-pelican-on-netlify) by Mr. Aaron Autrand and otherwise keep reading.

### **Geting the Pelican-Netlify-CMS Template**
We'll start by preparing the netlify-git-api CLI tool and then we'll clone the pelican-netlify-cms template repository to our local environment and set it all up.

#### 1. The netlify-git-api CLI tool.
Browse to the [netlify-git-api page](https://github.com/netlify/netlify-git-api/releases) and download the relevant version of the tool.  E.g. as I'm demonstrating this on Ubuntu, I will download the linux.zip file.

Once the download is done, unpack the netlify-git-api executable and place it in your path. The methods for doing this are numerous and differ slightly depending on your operating system, but we did as follows on Ubuntu:


