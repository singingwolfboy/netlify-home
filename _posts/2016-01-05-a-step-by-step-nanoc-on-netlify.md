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
<NANOC INTRO>


<LINKS>
If you already have a Nanoc repository forked on GitHub and only wish to connect to Netlify, you can skip the bulk of this guide and start [here](#netlifystart) instead.

On the other hand, if you have Nanoc running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you want to try out our small Nanoc tutorial, before linking up with GitHub and Netlify, simply continue this guide.  

***Please note that this guide assumes you have Ruby, RubyGems and Bundler installed !!!***

For information about installing and handling Ruby with Bundler please see [this guide](http://bundler.io/).

### Setup Bundler with Ruby and Gemfile

### Setup Nanoc
<Bla. bla bla - we will do this and that>

#### 1. Install Nanoc.
The following commands will instal first Nanoc and second adsf, which is needed to view the page locally:

```
gem install nanoc
gem install adsf
```

And/or check if nanoc is installed and if so, what version with the `--version` flag:

```
nanoc --version
```

#### 2. Create Nanoc Site

To create your nanoc site use the following code in terminal (substitute my-site-name with the name of your choice):

```
nanoc create-site my-site-name
cd my-site-name
nanoc compile
nanoc view 
```

The commands above will create your nanoc site, enter your site folder, build your site and offer it for view at []() and in that order.

