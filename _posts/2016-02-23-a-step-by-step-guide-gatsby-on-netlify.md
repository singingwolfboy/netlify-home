---
title: "A step-by-step guide: Gatsby on netlify "
author: Aaron Autrand
image: null
short_title: Gatsby on netlify
description: A short guide to help you set up Gatsby on netlify with continuous deployment.
thumbnail: /uploads/gatsbyjs.png
cmsUserSlug: ""
date: 2016-02-24T00:00:00.000Z
tags: null
---

Today, we’re going to look at how to host a website built with Gatsby on netlify, including setting up continuous deployment.

Gatsby is a new static site generator, but it’s gaining traction fast! It’s made in what’s probably the only thing as hot as Google’s ‘go’ right now, React.js. React is a hugely popular javascript framework out of Facebook.

<!-- excerpt -->

Let’s start from scratch (if you already have a Gatsby site set up, you can skip down to [here](#netlifystart)).

Open your terminal, and enter the following command (this guide assumes you have Node.js installed):

```
$ npm install -g gatsby
```

The `-g` flag will install Gatsby globally on your system, which you need to make sure Gatsby has access to the proper dependencies.

Gatsby offers a few starters, which are partially built sites preconfigured to get your project up and running faster. Well be creating a blog, so we are going to use the Starter Blog starter from [https://github.com/gatsbyjs/gatsby-starter-blog](https://github.com/gatsbyjs/gatsby-starter-blog).

Now, navigate to where you want to set up your project, then run the command below. Whatever you decide to name your project, you must be sure not to call it just plain `gatsby` (which is why we are calling this project `gatsbynetlify`).

```
$ gatsby new gatsbynetlify https://github.com/gatsbyjs/gatsby-starter-blog

```
This will use `npm install` to build a new Gatsby blog with the Starter Blog framework.

Now you can see a `gatsbynetlify` directory, with all of the various assets you need to develop your site in `gatsby`.

Change into this new directory:

```
$ cd ./gatsbynetlify
```

 If you decided to call your project `gatsby`, the next command will fail:

```
$ npm install gatsby --save
```

The above command inserts `gatsby` into the dependencies of your `package.json` file, which tells netlify what tools it needs to build your site. If you named your project `gatsby`, npm will refuse to add `gatsby` as a dependency of itself.

Open the `pages` directory. In Gatsby, each article has its own directory, and inside that directory is the actual written content contained in a file called `index.md`. Create a folder called `netlify`, and then create a new text document inside that folder. Now you can add some content to that file.

```
---
title: Gatsby on netlify
date: "2015-12-14T22:12:03.284Z"
layout: post
readNext: "/hi-folks/"
path: "/netlify/"
---

This is how easy it is to start a new blog built with Gatsby and host it on netlify.
```

Once you are satisfied with your content, save the text file as `index.md`

It’s time to display your content. Use this command to generate your site:

```
$ gatsby develop
```

Gatsby will compile your site, create an internal server at [http://localhost:8000](http://localhost:8000), and watch for changes. Add some more content to `index.md`. When you save your changes, reload your Gatsby site to see the updated content.

Like what you see? Great. Let’s move on!

## Prepping for Build

Netlify can use any number of versions of tools to build your site. But we need to tell netlify which versions to use. Since Gastby uses Node.js and NPM, we need to see which version you are running on your production machine. In the terminal enter the following:

```
$ node -v
```

Now check to see if netlify supports your version of Node: [https://github.com/netlify/build-image/blob/master/Dockerfile#L93](https://github.com/netlify/build-image/blob/master/Dockerfile#L93). Look for a version close to yours (look for code along the lines of `nvm install v4.2.2` if your version is 4.2.x).

To create a file to tell netlify which version of Node.js to use, enter the following command in the terminal:

```
$ echo your.version.number > .nvmrc
```

On the computer used to create this tutorial, the node version is v5.0.0, so version 5.1.0 works. Therefore, the command used was `echo 5.1.0 > .nvmrc`. Your version number may be different.

Now it’s time to push it to your repo of choice. Directions for GitHub follow here.

## Creating your Git Repo

Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

Open Terminal (for Mac users) or the command prompt (for Windows and Linux users).

For our purposes, let’s call your new repo `gatsby`.

Change the current working directory to your local project.

```
$ cd ~/PATH/TO/gatsbynetlify/
```

Initialize the local directory as a Git repository.

```
$ git init
```

Add the files in your new local repository. This stages them for the first commit.

```
$ git add .
```

Commit the files that you've staged in your local repository.

```
$ git commit -m 'First commit'
```

At the top of your GitHub repository’s Quick Setup page, click the clipboard icon to copy the remote repository URL.

In Terminal, add the URL for the remote repository where your local repository will be pushed.

```
git remote add origin Git_Repository_URL
```

Verify your URL

```
git remote -v
```

Now, it’s time to push the changes in your local repository to GitHub.

```
git push -u origin master
```

Now that your assets are up and running on GitHub, let’s connect them to netlify.

<a id="netlifystart"></a>
## Connecting to netlify

### Step 1: Add Your New Site

![step 1 - add](https://cloud.githubusercontent.com/assets/6520639/9803638/717820a6-57d9-11e5-838f-d2a732eb0a41.png)

Creating a new site on netlify is simple. Once you’ve logged in, you'll be taken to https://app.netlify.com/sites. If you’re just starting out, there’s only one option.

### Step 2: Link to Your GitHub

Clicking “New Site” brings you to this screen:

![step 2 - link](https://cloud.githubusercontent.com/assets/6520639/9803637/7176ac8a-57d9-11e5-9b09-f43dc772a4f9.png)

When you push to GitHub, netlify does all the work. No more manual deploying of updates or changes!

Since your assets are hosted on GitHub, we’ll need to link netlify to GitHub. Click “Link to GitHub”.

### Step 3: Authorize netlify

![step 3 - authorize](https://cloud.githubusercontent.com/assets/6520639/9803635/71760370-57d9-11e5-8bdb-850aa176a22c.png)

It’s time to allow netlify and GitHub to talk to each other. Clicking the “Authorize Application” button will do just that. Like it says in the image below, netlify doesn’t store your GitHub access token on our servers. If you’d like to know more about the permissions netlify requests and why we need them, you can visit [https://docs.netlify.com/github-permissions/](https://docs.netlify.com/github-permissions/).

### Step 4: Choose Your Repo

![step 4 - repo](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step4Gatsby.png)

Now that you’ve connected netlify and GitHub, you can see a list of your Git repos. There’s the **gatsby** repo we just pushed to GitHub. Let's select it.

### Step 5: Configure Your Settings

![step 5 - configure](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step5Gatsby.png)

Here you can configure your options. For the purposes of this tutorial, there’s nothing you need to change, so just click "Save".

### Step 6: Build Your Site

![step 6 - build](https://cloud.githubusercontent.com/assets/6520639/9803640/717b9c40-57d9-11e5-9ca4-92f90f8ed005.png)

Now it’s time to sit back and relax. Go grab something cold to drink, scratch the dog behind the ears, or just get up and walk around (you’ve probably been in front of the computer for too long today, right?). Netlify will do the rest, and you can watch the progress.

### Step 7: Done

![step 7 - done](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step7Gatsby.png)

Wait, you thought there was going to be more? Nope! Netlify has done it all for you, including giving your site a temporary name. Now you can add your custom domain, and your site will be live for your adoring public to view. Congratulations, and thanks for using netlify!
