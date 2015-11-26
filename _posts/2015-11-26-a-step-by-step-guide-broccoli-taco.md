---
title: "A step-by-step guide: Broccoli-Taco"
author: Jimmi Lee
image: /uploads/broccoli-taco.jpg
short_title: Broccoli-Taco on Netlify
description: A detailed guide to help you get broccoli-taco on Netlify.
thumbnail: /uploads/broccoli-taco-logo.png
cmsUserSlug: ""
date: 2015-11-26T00:00:00.000Z
tags: null
---

### **Welcome to Netlify**
What happens when you take one of the most hated green vegetables and one of the most popular Mexican dishes and you mix them? Well one of two things might happen - either you get a healthy Mexican lunch (according to Google at least) or you end up with a new tool for generating static sites and not only that, but static sites powered by broccoli-taco can be *dynamically* generated, based on data!

This is indeed very interesting since it used to be one of the big draw backs of static site generators - the lack of dynamically generated sites from various data sources.

Let's take a closer look at this odd mix, the broccoli-taco site generator.

Broccoli-taco is build on broccoli and the broccoli part is, in the words of its author, a *"browser compilation library – an asset pipeline for applications that run in the browser"*. 
This makes the site generator fast and not just fast, but super fast. 

It's also simple and very flexible, where each page is a folder and the only required file in a folder is an *index.hbs* file, but can also include *data.js*, *page.js* and *page.css* files. The flexibility comes from its ability to define data for pages as *functions*, *promises* or *JSON* files. 

If you want to find out more about broccoli-taco, head over to [broccoli-taco's web page](http://broccoli-taco.com/) before trying it out in this step-by-step guide or check out the detailed documentation [here](http://broccoli-taco.com/).

*Please note that this guide assumes you have Ruby, git, npm and bundle installed!*

### **How to cook a proper Broccoli Taco**
We'll lead you through the simple steps of installing broccoli-taco, as well as creating and building a site with a basic setup.
However, if you've already made a broccoli-taco site, but need help pushing it to GitHub, start [here](#githubstart). If you've already got your broccoli-taco site on GitHub and only wish to connect, start [here](#netlifystart) instead.
If you're completely new to broccoli-taco, simply continue this guide below.

#### 1. Install broccoli-taco.
Simply open up a terminal window or if you're using a microsoft OS, a command prompt and then use the following command:
```
$ sudo npm install -g broccoli-taco
```
*For convenience sake, keep the terminal window/command prompt open throughout this guide*

#### 2. Create a Site .
Once broccoli-taco has installed with its dependencies, we use the following commands to create a new site in our site directory named broccoli-tacos (change to your preferred directory location and name - we just could not come up with something better):
```
$ cd /my-sites-directory
$ broccoli-taco new broccoli-tacos
```
Notice the user friendly messages and how well organized broccoli-taco is in terminal:

![broccoli-taco-terminal.png](/uploads/broccoli-taco-terminal.png)

#### 3. Install Dependencies.
As stated under *"Next steps"* in our terminal window, we need to install certain dependencies with the following command:
```
$ cd broccoli-tacos && npm install
```
First we cd into our new site directory for broccoli-taco and next we install the dependencies.

#### 4. Serve Site for Development.
In the root of your broccoli-taco, run the following command:
```
$ broccoli-taco serve
```

#### 5. Build Site into Folder.
Again in the root of your broccoli-taco, run the following command:
```
broccoli-taco build dist
```
