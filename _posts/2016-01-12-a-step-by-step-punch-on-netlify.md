---
title: "A step-by-step: Punch on netlify"
author: Jimmi Lee
image: null
short_title: "A short guide: Punch on netlify"
description: "A short tutorial on how to set up Punch in continuous deployment on netlify, with assets on GitHub"
thumbnail: /uploads/punch_logo_400p.png
cmsUserSlug: ""
date: 2016-01-12T00:00:00.000Z
tags: null
---

### Welcome to netlify
<INTRO - A BIT ABOUT PUNCH, pro's and cons>
Pro's -> easy to fiddle with Navigation, fast as f... to set up with some default content etc.>

REQUIREMENTS: Node.js (version?)
Node.js with npm using nvm to install link.

<LINKS - to various chapters in guide>

### QUICK GUIDE LINUX, OSX, WINDOWs
<REWRITE SIMILAR: If you want to get a head start, you can download, install and setup from the terminal (or command prompt) in this quick start guide. However, if you need a more detailed introduction and guide, simply scroll down to [here](#inkpapersetup).>

#### Quick Install Punch - Linux:

```
npm install -g punch
punch setup my-punch-site
cd my-punch-site
punch s
```

#### Quick Install Punch - OSX:

```
OSX terminal install commands
```

#### Quick Install Punch - Windows:

```
Windows command prompt install commands
```

Provided you got the requirements sorted, the installation and setup of punch and a punch site can be done with a few short commands in terminal, as seen in the above examples. Simply choose the guide that corresponds with your operating system and substitute my-punch-site with the name of your site.

Once you've entered the last command `punch s`, leave the window open, as it will run a web server you can test your site against. Just open your browser and visit [http://localhost:9009](http://localhost:9009) and see for yourself.

It's recommended to take the quick hands-on tutorial, as it will quickly cover the basics and get the ball running, but it's not a prerequisite for this guide.

Please note that while we've included a quick install guide for the Windows OS and tested this, the main guide was only tested on Linux and OSX and it will not work without alterations if you are using a Windows OS!

### Install & Setup Punch
<Short intro with recap of what we'll do here>

<Link to repo for site with folder structure etc.>

#### 1. Install Punch
In the terminal, enter the following command:

```
npm install -g punch 
```

This should install Punch as a global npm package, at least if you're using nvm to control and handle your node.js versions. 

If you're not using nvm not and if the command hasn't got the right privileges, you will need to add sudo to the front like this: `sudo npm install -g punch`

#### 2. Create Site
Let's create a site using the punch setup command in a terminal window like this:

```
punch setup my-punch-site
```

Easy enough.

#### 3. Folder Tree
Punch takes the whole separation of content from presentation concept very seriously, which is of course a good thing, as it helps divide the work in a sensible manner.
For this purpose the two are divided into two folders named contents and templates and as the names imply, one is for the content, such as your articles, posts and images and the other is for all the presentational elements, such as the layouts we'll introduce in the next step.

In the side by side pictures shown below, we have the folder structure created by punch on the left, with the somewhat changed folder structure we ended up with on the right:

<FOLDERS TREE picture - Default folders = side by side with THIS sites Finished folder tree>
<LINK to GitHub repo with this finished folder tree?>

#### 4. Edit Layout
The layouts define how we present the content and in punch the default template engine format is [Mustache](http://mustache.github.io/) and though you can optionally change to another template engine, such as [Handlebars](https://github.com/laktek/punch-engine-handlebars), we simply opted to stay with Mustache and give it a try.

Edit the file named *_layout.mustache* inside the template folder - this is the main layout and we use it for everything in our guide.

Fill it in like this:

```
{{> header }}

        <div role="main">
            {{{content}}} 
        </div>

{{> footer }}
```

It's pretty simple really. We introduce partials, which follow the handlebars formula with `{{> partial-name }}` to insert a partial in the layout. In our example the header will be printed instead of the `{{> header }}` code and the footer will be printed instead of the `{{> footer }}` code.

Well, these partials don't make themselves, so let's move on to creating partials with the punch site generator.

#### 5. Partials
<ADD PARTIALS - Layout files, other than the _layout.mustache, that has a name starting with an underscore are known as partial layouts. You can include them in other layouts, using the following syntax - {{> header }}.>

The header file:

```
        # Insert header layout here
```


The footer file:

```
        # Insert footer layout here
```



#### 6. Create Layout
When using Punch, it's important to know a few things about how Punch works internally.

The *_layout.mustache* file is the deault layout for all the pages of the site!
However, if there's a file with the name of a given page of a site, then that layout would be used before the default layout. E.g. if I made an *about.mustache* file and if there was an about file in the content, then that file would use the *about.mustache* layout, since they have the same name.

We'll illustrate this quickly. Copy and rename *_layout.mustache* to *index.mustache*, so we can create a layout for our landing page which is different from the rest of our pages.

Open the newly created *index.mustache* file and fill it in like this:

```
{{> header }}

        <div role="main">
            <img src="punch_banner.jpg">
            {{{content}}} 
        </div>

{{> footer }}
```



Furthermore we've added an image file just above the content.



#### 7. Title & Navigation
As mentioned in the intro, Punch is one of the site generators that offer an incredibly easy way to set up a simple navigation bar., by editing the 
<Edit share.jason - EXAMPLE>

```
{
   "site-title": "Punch on netlify demo site",
   "footer-text": "Built with <a href=\"http://laktek.github.com/punch\">Punch</a> with assets on <a href=\"http://laktek.github.com/punch\">Punch</a> deployed to <a href=\"https://www.netlify.com\">netlify</a>",
   "navbar": [
      { "label": "Home", "href": "/" },
      { "label": "Articles", "href": "/" },
      { "label": "About", "href": "/about" }
   ]
}
```

#### 8.
<OBS: If you want to change the markup used for the site title and navbar, you can do it by editing templates/_header.mustache.> 

<OBS: Also note, any property you define in contents/shared.json is made available to all pages of the site.>




### Pushing Punch to GitHub
<PUNCH ON GITHUB step-by-step>

### Connect with netlify
<CONNECT PUNCH TO NETLIFY step-by-step>


