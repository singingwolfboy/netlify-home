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

***Please note that this guide assumes you have Node.js installed - any version above 0.12.x !!!***

For information about installing and handling node.js using nvm please see [this guide](http://www.nearform.com/nodecrunch/nodejs-sudo-free/).

### Setup Metalsmith
Metalsmith is not only a static site generator, but can do a lot of other things equally well and in more general terms one might define it as a file manipulator with plugins.
This means it's extremely versatile, while remaining simple, but it also means that there's a bit more to be done on the setup side, than what we're used to from other static site generators.  

#### 1. Create Folder Structure
We'll start out by creating a simple folder structure for our project as outlined in the picture below, with a number of files. We'll fill in the content of the files in the following steps and more files will be added along the way.

The folder structure for this project:

![metalsmithfolder_1small.png](/uploads/metalsmithfolder_1small.png)

#### 2. Setup the Node Package manager
To handle the various packages you will need to have node.js with npm installed (they come together). 

Open a terminal window and cd to the root of your Metalsmith site (cd my-metalsmith-site) and use the `npm init` command to intialize the directory and create a `package.json` file with user feedback. 
Note that apart from the file, npm also creates a node_modules folder, to hold the various packages.
Alternatively `npm init -f` will intialize the current directory and create a package.json file with default settings.

*For convenience sake, keep the terminal window open throughout this guide.*

#### 3. npm install
To actually install the various packages, we'll use the `npm install --save-dev package-name` command, substituting package-name with the various packages.
The `--save-dev` flag tells npm to save the devDependencies in the package.json file. It is then possible to uninstall and remove the package again using `npm uninstall --save-dev package-name`

Let's get started.
The first package we need is Metalsmith itself, so go ahead and enter the following command:

```
npm install --save-dev metalsmith
```

So far so good, let's add some plugins.

#### 4. Adding Packages
Metalsmith itself needs a few dependency packages to run (no need to worry, as it will install these by itself), but apart from that what packages or in Metalsmith terms, what plugins do we want or need?
Well, I'm getting used to Markdown and statistically speaking so is the average reader of this article, so I'll add that to the list with the following command in terminal:

```
npm install --save-dev metalsmith-markdown
```

As you can see, it's easy to install plugins and even Metalsmith itself is a plugin.

Using the `npm ls` command it's possible to see the dependency tree.

#### 5. Create build file
To build our site with these plugins, we need to define an output folder and run a script. We're using a simple javascript for this and we've aptly named this script build.js (since every time we run it, it will build the site).

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

For each plugin you want to install, you need to run the following command in terminal 

```
npm install --save-dev plugin-name
``` 

Second, you have to add each plugin to your build file with a variable declared and set to `require ('plugin-name')` and below that invoked with `.use(variable-name())` as seen in the build.js file above.

Furthermore the destination folder is defined with `.destination('./build')` and in the final line, the build method is called, with a callback to handle possible errors.

Once you have the build file saved, you can try to build the page with the following command:

```
node build
```

Or, if you're using ubuntu, you might need to use this command instead `nodejs build`.

If everything went according to plan, there should be a new file in the build directory, molded according to our plugins. It's very simple and not much is happening there yet of course, but we'll get to that. This is merely to see if your installation so far is working.

#### 6. Add more Plugins
Well, what else do we need?  
There's a whole list of plugins [here](http://www.metalsmith.io/#the-plugins) and it's even possible to write them yourself, should you feel inclined to do so, but for our basic tutorial we won't get into this.  

We're going to need a templating engine, as well as some templates to wrap around our content.  We'll use the handlebars templating engine, though there are other equally useful options. For the templates, we'll use the metalsmith-templates plugin.
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

The above script follows the norm set before, except that we need to tell the templates which templating engine to use, rather than just add them with a `.use()` method like before. This is done with the line: `.use(templates('handlebars'))`

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

    <link rel="stylesheet" href="styles/main.css" type="text/css" />    
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
To discern between the various content we're going to have, we will set up a folder for each type of content in the content folder. E.g. we want one type for displaying pages and one of these pages will be our about page, so we'll create a `src/content/pages` folder with a new file in it named `about.md` with the following content:

```
---
title: About
template: page.hbt
---
This is a small Metalsmith demonstration site that aims at showing you a very basic site build with Metalsmith.
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

To add the partials we simply insert the line `{{> partial-name }}` as seen above.

Let's move on to creating these partials.

#### 9. Template Partials
Template partials are useful for the elements that are part of every page, such as a footer and a header for example or perhaps your logo. In Metalsmith how these are handled comes down to your templating engine and in our case for this tutorial that means it comes down to the handlebars templating engine. 

First we create the partials files `header.hbt` and `footer.hbt` in the `templates/partials` directory.
For the partials to work in Metalsmith, we need to register them in our build file. 

Since Consolidate.js supports partials for handlebars, we have a nice and easy way of registering them.
In the build file change the line with `.use(templates('handlebars'))` to the code below:

```
    .use(templates({
        engine: 'handlebars',
        partials: {
            header: 'partials/header',
            footer: 'partials/footer'
        }
    }))
```

It's simple enough, we choose a templating engine and then we register the two partials.

Let's create these partials.

The header partials file `header.hbt` in the `templates/partials` folder:

```
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Metalsmith Test Site</title>

        <meta name="viewport" content="width=device-width">
        <link rel="stylesheet" href="styles/main.css" type="text/css" />
    </head>
    <body>

        <header>
            <img src="/images/metalsmithlogo.jpg" alt="Metalsmith Demo Site" height="226" width="709">
        </header>

        <div class="main-wrapper">
```

The footer partials file `footer.hbt` in the `templates/partials` folder:

```
            </div> {{!-- END .main-wrapper --}}
        <footer>
            © Metalsmith demo site
        </footer>
    </body>
</html>
```

Notice the stylesheet link in our header.

To make the site we're working on a little less bleak, we're going to add a stylesheet.

#### 10. Add a Stylesheet
We're going to simply add a stylesheet in the `src/styles` folder named `main.css` as referenced in our header.

You can use any old external css stylesheet or create a new one. Once you run build, metalsmith will copy this file over, duplicating the file structure and any static assets you may have added in this simple manner.

#### 11. Collections and Link Plugins
To illustrate the power and flexibility of metalsmith, we'll use two additional plugins to set up some collections with [metalsmith-collections](https://github.com/segmentio/metalsmith-collections) and create a collection for our pages and one for our posts. We'll also add the [metalsmith-permalinks](https://github.com/segmentio/metalsmith-permalinks) plugin, to change our files so that they're nested properly.

```
npm install --save-dev metalsmith-collections
npm install --save-dev metalsmith-permalinks
```

Apart from simply adding these two plugins to the build file, we also have to define the two collections by giving them a pattern as seen below.

```
Metalsmith(__dirname)
    .use(collections({
        pages: {
            pattern: 'content/pages/*.md'
        },
        posts: {
            pattern: 'content/posts/*.md',
            sortBy: 'date',
            reverse: true
        }
    }))
```

The pattern for the pages is defined as all markdown files in the pages folder, while the same holds true for the posts collection which is made up of all the markdown files in its corresponding posts folder. Furthermore the posts are sorted by date in reverse.

The `collection()` function creates internal arrays of the files, which can then be accessed in templates using `collections.collection-name` or when setting up the permalinks as seen below.

The permalinks must be set AFTER the markdown plugin to work properly!

We set the pattern to use the collection and the title, so that the `about.html` file instead becomes `pages/about/index.html`

```
    .use(markdown())
    .use(permalinks({
        pattern: ':collection/:title'
    }))
```

#### 12. Creating Content
To see the difference between our two collections, the pages and the posts, we also need to create the posts template, so go ahead and create the post.hbt file in the templates directory.

The post.hbt file:

```
{{> header}}
<h2>{{title}}</h2>

<article>
    {{{contents}}}
</article>
{{> footer}}
```

Next, we need to create at least one post, but preferably a few more than that, to illustrate how the files are sorted. Each of the posts should have the following YAML frontmatter:

```
---
title: "Title of the Post"
date: YYYY-MM-DD
template: post.hbt
---
```

It's pretty self explanatory, as we've defined ourselves what YAML frontmatter makes sense through our implementation of Metalsmith. It's pretty much the same as the YAML we put with our about page, except for the added date. 

We also need a page which can show our posts sorted by date in reverse.
We'll create a blog.md file in the src/content/pages folder and put a bit of YAML in it:

```
---
title: Blog
template: blog.hbt
---
```

For our blog template, we create a blog.hbt file in the templates folder and put the following content in it:

```
{{> header}}
<h2>{{title}}</h2>

<article>
    <ul>
        {{#each collections.posts}}
            <li>
                <h3>{{this.title}}</h3>
                <article>{{this.contents}}</article>
            </li>
        {{/each}}
    </ul>
</article>

{{> footer}}
```

#### 13. 

#### 14. 

### Setup your GitHub Repository

<a id="githubstart"></a>

Let's set up a GitHub repository and push our metalsmith site and generator to a repo of our own..

#### 1. Create your Git Repo
We start by creating a GitHub repository for our metalsmith page and generator.

Head over to [GitHub](https://github.com/) and create a new repository. 
We're naming ours metalsmith-demo and we'll skip adding files to the repository until after its creation, as this can sometimes create problems (The README, license and gitignore files).

![netlify0x_createnewrepo.png](/uploads/netlify0x_createnewrepo.png)

Once the repository has been named and created we need to setup our local environment with GitHub.

#### 2. Initialize, Add & Commit
We'll initialize the local directory as a git repository with the following command:

```
git init
```

Next we need to add the files from our local directory to this git repository and stage them for their first commit with the following line in Terminal:

```
git add .
```

Finally we'll commit the files we just staged in our local repository by entering the following line in Terminal:

```
git commit -m 'First commit'
```

#### 3. Get & Add Remote URL
![a1_remotegithuburl.png](/uploads/a1_remotegithuburl.png)

It's now time to return to the GitHub repository created above and retrieve the URL for the remote repository, since this is where our local repository will be pushed.
Either copy paste the whole command or use the button as depicted above, to copy just the path to your clipboard.
Return to the Terminal window/Command prompt and paste the remote repository URL inside the following line (instead of My-Repository-URL):

```
git remote add origin My-Repository-URL
```

Optional: To check that it's set up correctly, you can use the following command:

```
git remote -v
```

#### 4. Push to GitHub.
The final task before we're done setting up, is to use the push command with git, as in the following line in Terminal:

```
git push -u origin master
```

All your files will be copied to your online repository. Once it's done, take a look at the repository online to check if everything looks correct.

It's time to connect it with Netlify.