---
title: "A step-by-step guide: Harp on netlify"
author: Jimmi Lee
image: null
short_title: Harp on netlify in continuous deployment
description: A short guide that will help you set up harp on netlify in continuous deployment
thumbnail: /uploads/harp-banner.png
cmsUserSlug: ""
date: 2015-12-02 
tags: null
---

### **Welcome to Netlify**

Today I'll take a look at harp, which projects itself as the static web server with built-in preprocessing, but what exactly does that entail, you might ask.

Harp is capable of serving up Jade, Markdown, EJS, CoffeeScript, Sass, Less and Stylus as HTML, CSS & JavaScript with NO configuration necessary or so they claim - I will test their claim and put it up on netlify.

If you already posses your own Harp site and merely want some guidance with regards to putting it on GitHub start [here](#githubstart), whereas if you already have a harp site on GitHub and all you need is to connect it to Netlify, scroll all the way down to [here](#netlifystart).

*Please note that this guide assumes you have node.js, npm, Ruby and git installed.*

### **Install harp.**
Open up a terminal window/command prompt and use the following command to install harp:
```
$ sudo npm install -g harp
```
Once harp has installed with a rather impressive library tree and for us without error, we used the following command to create a harp site named harp-demo:
```
$ harp init harp-demo -b hb-blog
```
Simply substitute with your preferred site name and boilerplate [template](https://github.com/harp-boilerplates). We chose the hb-blog boiler template, to have some sample content as well and give us a better idea about the look and feel of the site.

We then build harp and run a server by using the following command:
```
$ harp server harp-demo
```
Simply open your browser to [this location](http://localhost:9000/) to see the newly built Harp Demo site.

### **Prepare for netlify.**

Like this? But how to add harp
```
$ npm install -g bower
$ bower init
```

### **Create and push to GitHub**
If it's not open already, open a terminal window/command prompt and use the following commands to initialize the directory: 
```
$ cd harp-demo
$ git init
```
Add the files of the folder and prepare them for the first commit.
```
$ git add .
$ git commit -m "first commit"
```
Create a repository online and get the remote URL of this repository. You can copy it to the clipboard using copy/paste or this button: INSERT PICTURE

We then use the following command in our terminal window, so that git will know where to push our local harp-demo site and with the push command we tell it to push the project online for the first time. 
```
$ git remote add origin https://github.com/AlcoholiO/hexo-demo.git
$ git push -u origin master
```