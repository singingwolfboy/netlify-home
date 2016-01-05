---
title: "A step-by-step: Nanoc on Netlify"
author: Jimmi Lee
image: null
short_title: Nanoc on Netlify
description: A short tutorial about getting Nanoc up on Netlify in continuous deployment.
thumbnail: /uploads/nanoc_logo.png
cmsUserSlug: ""
date: 2016-01-05T00:00:00.000Z
tags: null
---

### Welcome to Netlify
Up until recently I had never even heard of Nanoc, but I stumbled upon this gem of gems (pun intended) when searching for a well documented static site generator with on-going support and a live community.
Nanoc has both in abundance and after checking out their up to date and aesthetically pleasing documentation, I quickly grew to like this extremely easy to use static site generator. 

In this little guide, we will set up and check out Nanoc and once we're up and running locally, we will push the project to GitHub and deploy on Netlify with continuous deployment.

If you already have a Nanoc repository forked on GitHub and only wish to connect to Netlify, you can skip the bulk of this guide and start [here](#netlifystart) instead.

On the other hand, if you have Nanoc running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you want to try out our small Nanoc tutorial, before linking up with GitHub and Netlify, simply continue this guide.  

***Please note that this guide assumes you have Ruby, RubyGems and Bundler installed !!!***

For information about installing and handling Ruby with Bundler please see [this guide](http://bundler.io/).

### Setup Bundler with Ruby and Gemfile

### Setup Nanoc
<Bla. bla bla - we will do this and that>

#### 1. Install Nanoc.
The following commands will install first Nanoc and second adsf, the latter is needed to view the page locally:

```
gem install nanoc
gem install adsf
```

Optional: check if nanoc is installed properly and if so, what version by using the `--version` flag:

```
nanoc --version
```

#### 2. Create, Compile & View Nanoc Site
To create your nanoc site use the following code in terminal (substitute my-site-name with the name of your choice):

```
nanoc create-site my-site-name
cd my-site-name
nanoc compile
nanoc view 
```

The commands above will create your nanoc site, enter your site folder, build your site and offer it up for view at [http://localhost:3000/](http://localhost:3000/), in that order from the top and down.

As is obvious, Nanoc is lightning fast and incredibly easy to get up and running with some basic content, as it comes with a file structure with some rudimentary content pre-installed.

The files and directories created are:

nanoc.yaml
Site-wide configuration details for Nanoc.

Rules
Ruby file which describes how pages and assets will be processed.

content/
The content of the site, like pages, images etc.

layouts/
Layout directory for your templates/layouts.

lib/
Custom Ruby code directory.
