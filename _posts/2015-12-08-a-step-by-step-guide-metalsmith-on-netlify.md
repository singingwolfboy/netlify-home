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

### Welcome to Netlify
Welcome to Netlify and todays article about Metalsmith.

If you already have a Metalsmith repository forked on GitHub and only wish to connect to Netlify, you can skip the bulk of this guide and start [here](#netlifystart) instead.

On the other hand, if you have Metalsmith running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you're completely new to Metalsmith, simply continue this guide onwards and downwards.  

***Please note that this guide assumes you have Node.js (any version above 0.12.x) and npm installed!!!***

For information about installing and handling node.js using nvm please see [this guide](http://www.nearform.com/nodecrunch/nodejs-sudo-free/).

### Setup Metalsmith
Metalsmith is not only a static site generator, but can do a lot of other things and more general terms one might define it as a file manipulator with plugins.
This means it's extremely versatile, while remaining simple, but it also means that it treats all files equally, unlike most other static site generators.



#### 1. Create Folder Structure
We'll start out by creating a simple folder structure for our project, with two folders, one for templates and one for the various content we have (actual content, images, styles and scripts). As we progress through the tutorial we'll add a few more folders along the way, but this will suffice for now.

The folder structure for this project:
.
|– src/
    |– content/
    |– images/
    |– styles/
    |– scripts/
|– templates/
|   |– partials/
|– config.json
|– build.js
|– package.json

#### 2. Setup the Node Package manager with npm init
To handle the various packages we're using npm. 
Open a terminal window and cd to the root of your Metalsmith site (cd my-metalsmith-site) and use the `npm init` command to intialize the directory and create a package.json file with user feedback. Note that apart from the file, npm also creates a node_modules folder, to hold the various packages.
Alternatively `npm init -f` will intialize the current directory and create a package.json file with default settings.

The basic output will look something like this after you're done:

```
name: (your-site-name) 
version: (1.0.0) 
description: Small demonstration of Metalsmith site generator
entry point: (build.js) 
test command: 
git repository: 
keywords: 
author: Your name
license: (ISC) 
About to write to /home/user/path-to-site/site-name/package.json:

{
  "name": "your-site-name",
  "version": "1.0.0",
  "description": "Small demonstration of Metalsmith site generator",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Your name",
  "license": "ISC"
}


Is this ok? (yes) y
```

Basically the package.json has been created and is telling npm that it wants the packages listed to be installed with metal-smith.

*For convenience sake, keep the terminal window open throughout this guide.*

#### 3. npm install
To actually install the various packages, we'll use the following command:

```
npm install --save-dev package-name
```

The `--save-dev` flag tells npm to save the devDependencies.

Let's get started.
The first package we need is Metalsmith itself, so go ahead and enter the following command:

```
npm install --save-dev metalsmith
```

So far so good, let's add some plugins.

#### 4. Adding Packages
Metalsmith itself needs a fair few packages to run, but apart from that what packages or in Metalsmith terms, what plugins do we want or need?
Well, I'm getting used to Markdown and statistically speaking so is the average reader of this article, so I'll add that to the list with the following command in terminal:

```
npm install --save-dev metalsmith-markdown
```

As you can see, it's easy to install plugins and even Metalsmith itself is a plugin.

Using the `npm ls` command it's possible to see the dependency tree with metalsmith and metalsmith-markdown.

#### 5. Create build file
To build our site, with plugins, we need to define an output folder and run a script. We're using a simple javascript for this and we've aptly named this script build.js.

Create build.js and fill it in as seen below:

```
var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown');

Metalsmith(__dirname)
    .use(markdown())
    .use(templates())
    .destination('./build')
    .build(function (err) { if(err) console.log(err) })
```

Did you notice a pattern here?
For each plugin you want to install, you need to run `npm install --save-dev plugin-name` in terminal and then you have to add each plugin to your build file with a variable declared and set to `require ('plugin-name')` and below that invoked with `.use(variable-name())` as seen in the build.js file above.
Furthermore the destination folder is defined with `.destination('./build')` and in the final line, the build method is called, with a callback (apparently the callback isn't needed for all versions of Metalsmith, but we added it just in case).

Once you have the build file saved, you can try to build the page with the following command:

```
node build
```

Or, if you're using ubuntu, you might need to use this command instead `nodejs build`.

If everything went according to plan, there should be a new file in the build directory, molded according to our plugins. It's very simple and not much is happening there yet of course, but we'll get to that. This is merely to see if your installation so far is working.

At this point we had a problem with our node.js version not being supported properly and throwing some errors. This was relatively easy to solve however, as we're using nvm and so can change the version of node.js we're running on the fly. 
If you're having trouble with regards to which node.js version you're running, you probably need to update to a version that's 0.12.x or higher. If you're using 0.12.x it will work, but only if you use the following command instead, which will use the harmonize flag to resolve issues with compatibility: `node --harmony build`.

#### 6. Add more Plugins
Well, what else do we need?  
There's a whole list of plugins [here](http://www.metalsmith.io/#the-plugins) and it's even possible to write them yourself, should you feel inclined to do so, but for our basic tutorial we're going to stick with the basics only.  
We're going to need a templating engine, as well as some templates to wrap around our content.  We'll use the handlebars templating engine, though there are other equally useful options.
We'll start by installing the two plugins with the following lines in terminal:

```
npm install --save-dev metalsmith-templates
npm install --save-dev handlebars
```

We need to update our bulid.js file with these changes as well.

Edited build.js:

```
var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates');

Metalsmith(__dirname)
    .use(markdown())
    .use(templates('handlebars'))
    .destination('./build')
    .build(function (err) { if(err) console.log(err) })
```

The above script follows the norm set before, except that we need to tell the templates which templating engine to use, rather than just add them with a .use method like before. This is done with the line: `.use(templates('handlebars'))`

You might want to check the changes made to the dependency tree by running the `npm ls` command again.

#### 7. Create a Simple Template
The next thing we want to do is create one simple template in the templates directory.
We create `home.hbt` with the following content in the templates folder:

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>{{ title }} | Metalsmith Page</title>
</head>
<body>
    <div class="main-wrapper">
        {{{ contents }}}
    </div>

</body>
</html>
```

The new YAML frontmatter then, simply needs to point to a template like this:

```
---
title: Home
template: home.hbt
---
```

To run the build script and check out the changes, first save and next run the build command from terminal once more: `node build`

Check the output in the build directory and see if the template HTML created above was added properly.

#### 8. Folder Structure
To discern between the various content we're going to have, we will set up a folder for each type of content in the content folder. E.g. we want one type for displaying pages and one of these pages will be our about page, so we'll create a 'src/content/pages` folder with a new file in it named `about.md` with the following content:

```
---
title: About
template: page.hbt
---
This is a small Metalsmith demonstration site that aims at showing you a very basic site based on Metalsmith.
```

As you can see in the YAML frontmatter above, we're using the page template and not the home template we made earlier and so naturally we also need to create this template file.
We'll keep it simple though and merely present the content with a title and the aforementioned header and footer partials.

I present to you the page.hbt file:

```
{{> header}}
<h2>{{title}}</h2>

<article>
    {{{contents}}}
</article>
{{> footer}}
```

To add the partials we simply insert the line `{{> PartialName }}` as seen above.

Let's move on to creating these partials.

#### 9. Template Partials
Template partials are useful for the elements that are part of every page, such as a footer and a header for example or perhaps your logo. In Metalsmith how these are handled comes down to your templating engine and in our case for this tutorial that means it comes down to the handlebars templating engine. 

First we create the partials files. We're just going to create the simple `header.hbt` and `footer.hbt` files in the `templates/partials` directory.
For the partials to work in Metalsmith, we need to add them to our build file: 

Updated build.js file:

```
var Metalsmith = require('metalsmith'),
    markdown   = require('metalsmith-markdown'),
    templates  = require('metalsmith-templates'),
    Handlebars = require('handlebars'),
    fs         = require('fs');

Handlebars.registerPartial('header', fs.readFileSync(__dirname + '/templates/partials/header.hbt').toString());
Handlebars.registerPartial('footer', fs.readFileSync(__dirname + '/templates/partials/footer.hbt').toString());

Metalsmith(__dirname)
    .use(markdown())
  .use(templates('handlebars'))
    .destination('./build')
    .build(function (err) { if(err) console.log(err) })
```

The header partials file `header.hbt` in the `templates/partials` folder:

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Metalsmith Test Site</title>

        <meta name="viewport" content="width=device-width">
    </head>
    <body>

        <header>
            <h1 class="logo"><a href="/">Metalsmith Demo Site</a></h1> 
        </header>


        <div class="main-wrapper">
```

The footer partials file `footer.hbt` in the `templates/partials` folder:

```
            </div> {{!-- END .main-wrapper --}}
        <footer>
            Metalsmith demo site
        </footer>
    </body>
</html>
```

