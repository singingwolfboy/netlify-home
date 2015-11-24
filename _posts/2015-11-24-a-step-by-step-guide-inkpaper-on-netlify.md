---
title: "A step-by-step Guide: InkPaper on Netlify"
author: Jimmi Lee
image: /uploads/inkpaperheader.png
short_title: InkPaper on Netlify
description: A small guide setting up InkPaper with GitHub and Netlify
thumbnail: /uploads/inkpaperlogo.png
cmsUserSlug: ""
date: 2015-11-24T00:00:00.000Z
tags: null
---

## **Welcome to Netlify**
Welcome to Netlify and todays article about a new and exciting Chinese technology - the InkPaper static site generator.
Among the multitude of site generators that have come into existence in the past few years, this one stands out for its simplicity and extremely fast build time.
It has a very elegant theme and is one of the fastest site generators to get up and running, as it has NO dependencies - all you have to do, is download and set it up.

### **Setup InkPaper**
If you already have inkpaper up and running on GitHub and only wish to connect, start [here](#netlifystart) instead.
On the other hand, if you have InkPaper running locally, but need some guidance getting it on GitHub as well, before you connect it with Netlify, start [here](#githubstart) instead and finally if you're completely new to InkPaper, simply continue this guide chronologically.  

#### 1. Download InkPaper.
The first thing you need to do is head over to [InkPapers webpage](http://www.inkpaper.io/) and download the installation package that fits with your operating system. 
![InkPaper](/uploads/InkPaper_front.png)

#### 2. Extract and prepare InkPaper.
We need to extract the downloaded package and change its folder name.
These actions both differ depending on your operating system, yet are usually fairly simple. 

In this example on Linux we open terminal (in Windows, your command prompt) and write the following commands:
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
In the first line we enter the newly renamed directory and in the second line we move the ink executable to a location that is in the PATH, so that it can be invoked from the terminal. 

#### 4. Preview InkPaper.
Provided you've still got your terminal window open in the InkPaper directory, all you need to do is enter the following command, lean back and check out the beautiful result in a web browser.
```
$ ink preview
```
Open your web browser of choice and enter 'http://localhost:8000/' in the adress bar and voila, there you go.
Quite honestly - could it get any easier?

#### 5. Website Configuration and Content Creation.
Let's dig a little deeper and look at how to configure the website, as well as create some content.

As with many other static site generators, the config.yml file is where we do the website configuration and it's pretty much self explanatory as seen both in the config.yml generated in your site (take a look), but also in this shorter format example taken from InkPapers homepage:
```
site:
    title: Website Title
    subtitle: Website Subtitle
    limit: Max Article Count Per Page
    theme: Website Theme Directory
    disqus: Disqus Plugin Username
    root: Website Root Path #Optional
    lang: Website language #Support en, zh, Configurable in theme/lang.yml

authors:
    AuthorID:
        name: Author Name
        intro: Author Motto
        avatar: Author Avatar Path

build:
    port: Preview Port
    copy:
        - Copied Files When Build
    publish: |
        Excuted command when use 'ink publish'
```

To create content, simply create any .md file in the source directory or in a subdirectory of the source directory, using the following format (as described on the InkPaper homepage):
```
title: Article Title
date: Year-Month-Day Hour:Minute:Second #Created Time，Support TimeZone, such as " +0800"
update: Year-Month-Day Hour:Minute:Second #Updated Time，Optional，Support TimeZone, such as " +0800"
author: AuthorID
cover: Article Cover Path #Optional
draft: false #If Draft，Optional
top: false #Place article to top, Optional
preview: Article Preview，Also use <!--more--> to split in body #Optional
tags: #Optional
    - Tag1
    - Tag2

---

Markdown Format's Body
```
Notice that the content is written in markdown below the three dashes and that you only need one set of these, as opposed to the more commonplace practise of placing the article information between two sets of dashes.

As long as you're working on the page, the *ink preview* command we entered in terminal earlier, will automatically watch and rebuild the source directory, so you can see your changes locally and instantly, by simply refreshing the browser.

Once you're ready for it, you can use the following command to automatically build and publish:
```
$ cd '/InkPaper/blog'
$ ink publish
```
The first line takes you to the blog directory from where the publish command should be invoked and the second command does the building and publishing - simple enough.
Another method is to manually deploy the generated public directory by using this command:
```
$ cd '/InkPaper/blog'
$ ink build
```
Again, as with the publish command, it's important that you first cd into the InkPaper directory or it's blog sub directory, before running the ink command, as otherwise it will not be able to find the config.yml file.

For further information about customizing InkPaper and choosing or modifying a theme, see the [InkPaper getting started webpage](http://www.inkpaper.io/blog/post/2015/03/01/ink-blog-tool-en.html).

