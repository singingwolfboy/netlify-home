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

For information about installing and handling Ruby with Bundler please see [this documentation](http://bundler.io/).

### Setup Bundler with Ruby and Gemfile
<Instructions on setting up Bundler with Ruby and a gemfile - or later inside step by step?>

### Setup Nanoc
<Bla. bla bla - we will do this and that>

#### 1. Install Nanoc.
The following commands will install first Nanoc and second adsf, the latter is needed to view the page locally and the former is everything else:

```
gem install nanoc
gem install adsf
```

Optional: check if Nanoc is installed properly and if so, what version by using the `--version` flag like this:

```
nanoc --version
```

#### 2. Create, Compile & View Nanoc Site
To create your Nanoc site, use the following code in terminal (substitute my-site-name with the name of your choice):

```
nanoc create-site my-site-name
cd my-site-name
nanoc compile
nanoc view 
```

The commands above will create your Nanoc site, enter your site folder, build your site and offer it up for view at [http://localhost:3000/](http://localhost:3000/), in that order from the top and down.

As is obvious, Nanoc is lightning fast and incredibly easy to get up and running with some basic content, as it comes with a file structure with some rudimentary content pre-installed.

#### 3. Under the Hood
Let's take a look at what's under the hood of this Nanoc site. First take a look at the folder structure, as depicted in the illustration below, the files and directories created are as follows:

![nanoc_tree.png](/uploads/nanoc_tree.png)

In the file and folder tree above, there are some distinct folders and to create content and customize the layout, it's important to know what goes where and why!

In Nanoc we use the term layouts instead of templates and these all go in the **layouts folder**.

The content we're creating goes in the **content folder** and here you'll find the landing page and a stylesheet, ready for editing.

Then there's the **lib folder**, which contains custom Ruby code.

Of the files its worth noting that **nanoc.yaml** contains site-wide configuration details and that the **Rules** file is used by Ruby to describe how pages and assests will be processed.

#### 4. Edit Landing Page
To distinguish our new basic Nanoc site, we'll start by editing the two files it comes with as default. We take the *index.html* file and changing its title, while adding a few lines of content. Take note that this file only contains the content of the page and none of the layout.

#### 5. Edit Layout
We'll follow the advice left for us in the original landing page and change the layout from the bland default color scheme and fonts to something new and refreshing.

Open up the *default.html* file in the layouts folder. This is where the HTML has been hiding and it's easy to dig in and edit the sidebar navigation links and the general layout.

#### 6. Add Content


