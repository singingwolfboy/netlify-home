---
layout: docs
title: Documentation
---

## Welcome to Netlify

[Netlify](http://www.netlify.com) builds, deploys and hosts your front end.

## Quickstart

Deploying a new site with Netlify is so simple it fits in a tweet:

```
npm install netlify-cli -g
cd my-site-folder
netlify deploy
```

This is all you need to deploy a static site folder, but Netlify can do much more for you.

## Continuous Deployment

For anything larger than a one page landing, you really should be using a static site generator or a front-end build tool like grunt or gulp.

If you're using any of those, Netlify can make the process of collaborating and deploying much smoother.

Netlify lets you link a Github repository to a site. Each time you push to Github, Netlify runs a build with your tool of choice and deploys the result to our powerful CDN.

## Getting Started

Netlify can be used both from our web UI at [app.netlify.com](http://app.netlify.com) or by using our [command line tools](/docs/cli).

To start with the web UI, simply head to [app.netlify.com](http://app.netlify.com) and sign in.

To start by manually deploying a folder with a static site to Netlify, make sure you have `node js` installed and then follow these steps:

```
npm install netlify-cli -g
cd ~/my-static-website
netlify deploy
```

## Helpful Hints[](#helpfulhints)

If you are creating a new site on Netlify, or just moving a pre-existing site onto the platform, it's good to keep the following things in mind:

### NodeJS (including React)

If the static site generator you are using is built with NodeJS:

Make sure your `project.json` contains the name of your tool. Do so by running the following command in your terminal:

```
$ npm install TOOLNAME --save
```

If your project directory has the same name as your tool, the above command will fail. So make sure your project name is something different.

You also need a `.nvmrc` file at the root of your project to tell Netlify which version of NodeJS to use. In the terminal, enter this command:

```
$ node -v
```

Now check to see if Netlify supports your version of Node: [https://github.com/netlify/build-image/blob/master/Dockerfile#L93](https://github.com/netlify/build-image/blob/master/Dockerfile#L93). Look for a version close to yours (look for code along the lines of nvm install v5.1.0 if your version is 5.1.x).

To create a file to tell Netlify which version of Node.js to use, enter the following command in the terminal:

```
$ echo your.version.number > .nvmrc
```

### Ruby

If you are using a static site generator built with Ruby:

You need a Gemfile and a Gemfile.lock to tell Netlify which versions of your preferred tool to use. If there isn't one, run the following command in the terminal:

```
$ bundle init
```

This will create a Gemfile in your project's root directory. Open the Gemfile in your favorite text editor. Replace the following line:

```
# gem "ruby"
```

with this line:

```
gem "TOOLNAME"
```

Make sure you delete the #, then save.

Now run this command:

```
$ bundle install
```

This will install the jekyll gem and create a file called Gemfile.lock. This file will ensure that Netlify always uses the same version of of your tool that you used to build your site, thus avoiding any nasty surprises.

### Python

If your static site generator is built with Python:

It's usually a good idea (but not necessary) to set up a virtual environment for Python projects. If you don't know how to do so, follow [these directions](http://docs.python-guide.org/en/latest/dev/virtualenvs/).

You want to make sure that Netlify knows exactly which versions of various Python plugins you are using. Do this by creating a file called `requirements.txt` in your project's root directory:

```
$ pip freeze > requirements.txt
```

## Netlify's Docs

This site is a great example of a project built on Netlify.

All of our documentation (this whole site in fact) is in a [Github repository](https://github.com/netlify/netlify-home).

Whenever we push to Github or accept a pull request, Netlify will do a clean build of the site with [Jekyll](http://jekyllrb.com/) and deploy the result.
