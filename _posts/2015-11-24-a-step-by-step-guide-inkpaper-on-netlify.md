---
title: "A step-by-step Guide: InkPaper on Netlify"
author: Jimmi Lee
image: /uploads/inkpaperheader.png
short_title: InkPaper on Netlify
description: A small guide setting up InkPaper with GitHub and Netlify
thumbnail: /uploads/inkpaperlogo.png
cmsUserSlug: ""
date: 2015-11-24 
tags: null
---

## **Welcome to Netlify**
Welcome to Netlify and todays article about a new and exciting Japanese technology - the InkPaper static site generator.
Among the multitude of site generators that have come into existence in the past few years, this one stands out for its simplicity and extremely fast build time.
It has a very elegant theme and is one of the fastest site generators to get up and running, as it has NO dependencies - all you have to do, is download and set it up.

### **Setup InkPaper**
If you already have inkpaper up and running on GitHub and only wish to connect, start [here](#netlifystart) instead.
On the other hand, if you have InkPaper running locally, but need some guidance getting it on GitHub as well, before you connect it with Netlify, start [here](#githubstart) instead and finally if you're completely new to InkPaper, simply continue this guide chronologically.  

#### 1. Download InkPaper.
The first thing you need to do is head over to [InkPapers webpage](http://www.inkpaper.io/) and download the installation package that fits with your operating system - there's a link for each flavor and the page itself also runs on InkPaper, giving you a preview:
![inkpaperwebpage.png](/uploads/inkpaperwebpage.png) 

#### 2. Extract and prepare InkPaper.
We need to extract the downloaded package and change its folder name.
These actions all differ depending on your operating system, yet are usually fairly simple. 

In this example on Linux we open terminal and write these commands:
```
$ cd 'downloads'
$ tar xvzf ink_linux_amd64.tar.gz --directory 'Sites'
$ mv /Sites/ink_linux_amd64 /Sites/InkPaper
```
The first line simply takes us to the location of the downloaded package (change to your download location).
The second line unpacks the downloaded file (in our case the linux 64 bit flavor) to our chosen destination and the third line renames this directory to InkPaper.

#### 3. Add ink to the Path.
For ink (the site generator file of InkPaper) to run properly, we need to add it to the path.
This action is also different, depending on the system, but continuing the example in Linux, we would use these commands: 
```
$ cd InkPaper
$ sudo mv ink '/usr/local/bin'
```
In the first line we enter the newly renamed directory and in the second line we move the ink executable to a location that is in the PATH, so that it can be invoked from terminal. 

#### 4. Preview InkPaper.
Provided you've still got your terminal window open (or in Windows, your command prompt), all you need to do is enter the following command, lean back and check out the beautiful result in a web browser.
```
$ ink preview
```
Open your web browser of choice and enter 'http://localhost:8000/' in the adress bar and voila, there you go.