---
title: "A step-by-step: Punch on netlify"
author: Jimmi Lee
image: null
short_title: "A short guide: Punch on netlify"
description: "A short tutorial on how to set up Punch in continuous deployment on netlify, with assets on GitHub"
thumbnail: /uploads/punch_logo_400p.png
cmsUserSlug: ""
date: 2016-01-12 
tags: null
---

### Welcome to netlify
<INTRO - A BIT ABOUT PUNCH, pro's and cons>
Pro's -> easy to fiddle with Navigation, fast as f... to set up with some default content etc.>

REQUIREMENTS: Node.js (version?)
Node.js with npm using nvm to install link.

<LINKS - to various chapters in guide>

### QUICK GUIDE LINUX, OSX, WINDOWs
<Quick guide intro>

Linux Install Punch:

```
(sudo) npm install -g punch   # no sudo necessary if using nvm correctly!
punch setup my-punch-site
cd my-punch-site/default 
punch cd 
```

OSX Install Punch:

```
OSX terminal install commands
```

Windows Install Punch:

```
Windows command prompt install commands
```

### Install & Setup Punch
<Short intro with recap of what we'll do here>

#### 1. Install Punch
In the terminal, enter the following command:

```
npm install -g punch
```

This should install Punch as a global npm package, at least if you're using nvm to control and handle your node.js versions. If not and if the command hasn't got the right privileges, you will need to add sudo to the front, like this: `sudo npm install -g punch`

#### 2. Create Site

```
punch setup my-punch-site
```

### 3. Quick Hands-on Tutorial
<Follow the Quick Hands-on Tutorial
After the installation, you can create your first site by running: punch setup mysite

Go to the mysite directory and start the server: cd mysite; punch s
Open your browser and visit: http://localhost:9009
Follow the steps in hands-on tutorial.>

### Punch Tutorial
<Punch tutorial intro - what we will do in a phrase or two>

#### 1. Install 
npm install punch #check this, just guessing

#### 2. Folder Tree
Punch takes the whole separation of content from presentation concept very seriously, which is of course a good thing, as it helps divide the work in a sensible manner.
For this purpose the two are divided into two folders named contents and templates and as the names imply, one is for the content, such as your articles, posts and images and the other is for all the presentational elements, such as the layouts

<FOLDERS TREE picture>

#### 3. Edit Layout
Edit the file named _layout.mustache - this is the main layout and we use it for everything in our guide.
Insert tag {{{content}}} inside <div role="main"></div>.

#### 4. Partials
<ADD PARTIALS - Layout files, other than the _layout.mustache, that has a name starting with an underscore are known as partial layouts. You can include them in other layouts, using the following syntax - {{> header }}.>

#### 5. Title & Navigation
As mentioned in the intro, Punch is one of the site generators that offer an incredibly easy way to set up a simple navigation bar., by editing the 
<Edit share.jason - EXAMPLE>

```
{
   "site-title": "Punch on netlify demo site",
   "footer-text": "Built with <a href=\"http://laktek.github.com/punch\">Punch</a> with assets on <a href=\"http://laktek.github.com/punch\">Punch</a> deployed to <a href=\"https://www.netlify.com\">netlify</a>",
   "navbar": [
      { "label": "Home", "href": "/" },
      { "label": "About", "href": "/about" }
   ]
}
```

#### 6.
<OBS: If you want to change the markup used for the site title and navbar, you can do it by editing templates/_header.mustache.> 

<OBS: Also note, any property you define in contents/shared.json is made available to all pages of the site.>


### Pushing Punch to GitHub
<PUNCH ON GITHUB step-by-step>

### Connect with netlify
<CONNECT PUNCH TO NETLIFY step-by-step>




