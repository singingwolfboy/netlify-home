---
title: "A step-by-step guide: Metalsmith on Netlify"
author: Jimmi Lee
image: null
short_title: A short guide - Metalsmith on Netlify
description: A short guide on how to set Metalsmith up in continuous deployment with Netlify and GitHub
thumbnail: /uploads/metalsmith_thumb2.png
cmsUserSlug: ""
date: 2015-12-08 
tags: null
---

### Welcome to Netlify
Welcome to Netlify and todays article about metalsmith.

**Please note that this guide assumes you have Node.js and npm installed!!!**

### Setup metalsmith

If you already have a metalsmith repository forked on GitHub and only wish to connect, start [here](#netlifystart) instead.

On the other hand, if you have metalsmith running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you're completely new to metalsmith, simply continue this guide onwards and downwards.  

#### 1. Create Folder Structure
Create a folder structure for your project.

#### 2. npm init
`npm init` will intialize the current directory and create a package.json file with user feedback.
`npm init -f` will intialize the current directory and create a package.json file with default settings.
```
name: (metalsmith-demo) 
version: (1.0.0) 
description: Small demonstration of metalsmith site generator
entry point: (build.js) 
test command: 
git repository: 
keywords: 
author: Jimmi Lee
license: (ISC) 
About to write to /home/jimmi/Sites/metalsmith-demo/package.json:

{
  "name": "metalsmith-demo",
  "version": "1.0.0",
  "description": "Small demonstration of metalsmith site generator",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Jimmi Lee",
  "license": "ISC"
}


Is this ok? (yes) y
```
Basically the package.json has been created and is telling npm that it wants the packages listed to be installed with metal-smith.

#### 3. npm install

#### 4. npm install
To actually install these packages we run the following command, also in the root of our metalsmith site.
```
npm install --save-dev metalsmith
```

#### 5. Create build file
Create build.js:
```
var Metalsmith = require('metalsmith');


Metalsmith(__dirname)
    .destination('./build')
    .build()
```