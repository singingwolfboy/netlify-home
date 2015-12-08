---
title: "A step-by-step guide: Metalsmith on Netlify"
author: Jimmi Lee
image: null
short_title: A short guide - Metalsmith on Netlify
description: A short guide on how to set Metalsmith up in continuous deployment with Netlify and GitHub
thumbnail: /uploads/metalsmith_thumb1.png
cmsUserSlug: ""
date: 2015-12-08 
tags: null
---

### Welcome to Netlify
Welcome to Netlify and todays article about metalsmith.

**Please note that this guide assumes you have Node.js and npm installed!!!**

### Quick Start
If you want to get a head start, you can download, install and setup from the terminal (or command prompt) in this quick start guide. However, if you need a more detailed introduction and guide, simply scroll down to [here](#metlsmithsetup).

The guide below does the same thing for each operating system, except that for OSX and Windows, it also downloads and renames the linux versin of ink, so that it can be used to deploy to netlify. Simply substitute with your inkpaper site location and name and you'll be good to go.

#### Linux (64bit) Quick Start (in Terminal):

```
wget http://www.inkpaper.io/release/ink_linux_amd64.tar.gz
tar xzvf ink_linux_amd64.tar.gz
mv ink_linux_amd64 my-inkpaper-site
cd my-inkpaper-site
mkdir bin
mv ink bin/ink.linux
```

#### OSX Quick Start (in Terminal): 

```
curl "http://www.inkpaper.io/release/ink_darwin_amd64.zip"
unzip ink_darwin_amd64.zip 
mv ink_darwin_amd64 my-inkpaper-site
cd my-inkpaper-site
mkdir bin
mv ink bin/ink.osx

curl "http://www.inkpaper.io/release/ink_linux_amd64.tar.gz"
tar xzvf ink_linux_amd64.tar.gz
mv ink_linux_amd64 my-inkpaper-site
cd my-inkpaper-site
mkdir bin
mv ink bin/ink.linux
```

#### Microsoft Windows (64bit) Quick Start (in Command Prompt): 

```
bitsadmin /transfer my-download-job /download /priority normal http://www.inkpaper.io/release/ink_windows_amd64.zip C:\my-download-folder\ink_windows_amd64.zip 
cd my-download-folder
7z x ink_windows_amd64.zip -oc:\my-download-folder\my-inkpaper-site\ 
cd my-inkpaper-site
mkdir bin
move ink.exe bin/ink.windows.exe

cd my-download-folder
bitsadmin /transfer my-download-job /download /priority normal http://www.inkpaper.io/release/ink_linux_amd64.tar.gz C:\my-download-folder\ink_linux_amd64.tar.gz 
7z x ink_linux_amd64.tar.gz -oc:\my-download-folder\ink_linux_amd64
cd ink_linux_amd64
move ink.exe c:\my-ink-paper-site\bin\ink.linux.exe
```

Please note that Microsoft Windows will require [7zip](http://www.7-zip.org/download.html) to be installed and added to your path if you use the above method.

### Setup metalsmith

<a id="metalsmithsetup"></a>

If you already have a metalsmith repository forked on GitHub and only wish to connect, start [here](#netlifystart) instead.

On the other hand, if you have metalsmith running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you're completely new to metalsmith, simply continue this guide onwards and downwards.  

#### 1. Create Folder Structure


#### 2. npm init
`npm init` will intialize the current directory and create a package.json file from your feedback.
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
To actually install these packages we run the following command, also in the root of our metalsmith site.
```
npm install --save-dev metalsmith
```

#### 4. Create build file
Create build.js:
```
var Metalsmith = require('metalsmith');


Metalsmith(__dirname)
    .destination('./build')
    .build()
```