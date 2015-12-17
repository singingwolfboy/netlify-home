---
title: "A step-by-step guide: Metalsmith on Netlify"
author: Jimmi Lee
image: null
short_title: A short guide - Metalsmith on netlify
description: A short guide on how to set Metalsmith up in continuous deployment with netlify and GitHub
thumbnail: /uploads/metalsmith_thumb2.png
cmsUserSlug: ""
date: 2015-12-08T00:00:00.000Z
tags: null
---

### Welcome to netlify
Welcome to netlify and todays article about metalsmith.

***Please note that this guide assumes you have Node.js and npm installed!!!***

### Setup metalsmith

If you already have a metalsmith repository forked on GitHub and only wish to connect, start [here](#netlifystart) instead.

On the other hand, if you have metalsmith running locally, but need some guidance getting it on GitHub, before you deploy to netlify, start [here](#githubstart) instead.

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
To actually install these packages we run the following command, also in the root of our metalsmith site.  The `--save-dev` flag tells npm to save the devDependencies.

```
npm install --save-dev metalsmith
```

#### 4. Adding Packages
metalsmith itself needs a fair few packages to run, but apart from that what packages or in metalsmith terms, what plugins do we want or need?
Well, I'm used to Markdown, so I'll add that to the list with the following line:

```
npm install --save-dev metalsmith-markdown
npm install --save-dev metalsmith-templates
```

Using the npm ls command I can then see my tree with metalsmith and metalsmith-markdown almost at the bottom.

#### 5. Create build file
Create build.js:

```
var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates');


Metalsmith(__dirname)
    .use(markdown())
    .use(templates())
    .destination('./build')
    .build()
```
