---
title: "A step-by-step guide: Broccoli Taco"
author: Jimmi Lee
image: /uploads/broccoli-taco.jpg
short_title: Broccoli Taco on netlify
description: A step-by-step guide on how to get a site made with Broccoli Taco hosted on netlify.
thumbnail: /uploads/broccoli-taco-logo.png
cmsUserSlug: ""
date: 2015-11-26T00:00:00.000Z
tags: null
---

### Welcome to netlify
What happens when you take one of the most hated green vegetables and one of the most popular Mexican dishes and you mix them? Well one of two things might happen - either you get a healthy Mexican lunch (according to Google at least) or you end up with a new tool for generating static sites and not only that, but static sites powered by Broccoli Taco can be *dynamically* generated, based on data!

This is indeed very interesting since it used to be one of the big draw backs of static site generators - the lack of dynamically generated sites from various data sources.

Let's take a closer look at this odd mix, the Broccoli Taco site generator.

Broccoli Taco is build on Broccoli and the Broccoli part is, in the words of its author, a *"browser compilation library – an asset pipeline for applications that run in the browser"*. 
This makes the site generator fast and not just fast, but super fast. 

It's also simple and very flexible, where each page is a folder and the only required file in a folder is an *index.hbs* file, but can also include *data.js*, *page.js* and *page.css* files. The flexibility comes from its ability to define data for pages as *functions*, *promises* or *JSON* files. 

If you want to find out more about Broccoli Taco, head over to [Broccoli Taco's web page](http://broccoli-taco.com/) before trying it out in this step-by-step guide or check out the detailed documentation [here](http://broccoli-taco.com/).

*Please note that this guide assumes you have Ruby, git, npm and bundle installed!*

### How to cook a proper Broccoli Taco
We'll lead you through the simple steps of installing broccoli-taco, as well as creating and building a site with a basic setup.

If you've already made a Broccoli Taco site, but need help pushing it to GitHub, start [here](#githubstart). 

If you've already got your Broccoli Taco site on GitHub and only wish to connect, start [here](#netlifystart).

If you're completely new to Broccoli Taco, simply continue this guide below.

#### 1. Install broccoli-taco
Open up a terminal window or if you're using a Microsoft OS, a command prompt and then use the following command:
```
$ sudo npm install -g broccoli-taco
```
This will likely take a few minutes, just enough time to cook a couple of delicious Broccoli Tacos.

*For convenience sake, keep the terminal window/command prompt open throughout this guide*

#### 2. Create a Site
Once broccoli-taco has installed with its dependencies, we use the following commands to create a new site in our site directory named broccoli-tacos (change to your preferred directory location and name - we just could not come up with something better):
```
$ cd /my-sites-directory
$ broccoli-taco new broccoli-tacos
```
Notice the user friendly guide, and how well organized broccoli-taco is in terminal.

#### 3. Install Dependencies
As stated under *"Next steps"* in our terminal window, we need to install certain dependencies with the following command:
```
$ cd broccoli-tacos && npm install
```
First we cd into our new site directory for broccoli-taco and next we install the dependencies.

Again please note that this may take a few minutes, so perhaps this is a good time to eat those Tacos.

#### 4. Serve Site for Development
In the root of your broccoli-taco, run the following command:
```
$ broccoli-taco serve
```

#### 5. Build Site into Folder
Again in the root of your broccoli-taco, run the following command:
```
broccoli-taco build dist
```
