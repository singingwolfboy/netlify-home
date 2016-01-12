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

REQUIREMENTS: Node.js (version?)
Node.js with npm link.

<LINKS - various chapters in guide>

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

Open your browser and visit: http://localhost:9009
Follow the steps in hands-on tutorial.

### Install & Setup Punch
In the terminal, enter the following command:
sudo npm install -g punch

This should install Punch as a global npm package.

Then, enter punch.
This should show you a list of available commands in Punch.

Follow the Quick Hands-on Tutorial
After the installation, you can create your first site by running: punch setup mysite

Go to the mysite directory and start the server: cd mysite; punch s
Open your browser and visit: http://localhost:9009
Follow the steps in hands-on tutorial.

<PUNCH TUTORIAL STUFF?>
<FOLDERS TREE>
Punch takes the whole separation of content from presentation concept very seriously, which is of course a good thing, as it helps divide the work in a sensible manner.
For this purpose the two are divided into two folders named contents and templates and as the names imply, one is for the content, such as your articles, posts and images and the other is for all the presentational elements, such as the layouts

Edit the file named _layout.mustache - this is the main layout and we use it for everything in our guide.
Insert tag {{{content}}} inside <div role="main"></div>.





Sweet! This site is coming up nicely. If you want to change the markup used for the site title and navbar, you can do it by editing templates/_header.mustache. Layout files, other than the _layout.mustache, that has a name starting with an underscore are known as partial layouts. You can include them in other layouts, using the following syntax - {{> header }}.

Also note, any property you define in contents/shared.json is made available to all pages of the site.

Now let's go back to homepage and try to make it little prominent.

<PUNCH ON GITHUB>


<CONNECT PUNCH TO NETLIFY>


