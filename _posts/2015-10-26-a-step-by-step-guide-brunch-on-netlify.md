---
title: "A step-by-step guide: Brunch on netlify"
author: Aaron Autrand
image: /uploads/brunch-screenshot.png
short_title: Host Brunch on netlify
description: A step-by-step guide on how to host a website built with static site generator Brunch.
thumbnail: /uploads/brunch-copy.png
cmsUserSlug: ""
date: 2015-10-26
tags:
  - nodejs
  - brunch
  - tutorial
---

Today, we're going to look at how to host a website built with [Brunch](http://brunch.io/) on netlify, including setting up continuous deployment.

Let's start from scratch. If you already have a Brunch site set up, you can skip straight to the [Connecting to netlify]({{ page.url }}#netlifystart) section.

<!-- excerpt -->

## Installing Brunch

This guide assumes you have [Node.js](https://nodejs.org) installed.

Open your terminal, and enter the following command:

```
$ npm install -g brunch
```

The `-g` flag will install Brunch globally on your system, which you need to make sure Brunch has access to the proper dependencies.

Additionally, you'll want to install `bower` at this step as well, otherwise you'll run into a whole host of problems further on down the line:

```
$ npm install -g bower
```

Brunch uses skeletons to start projects, automatically installing specific dependencies and creating a file structure for you. We'll be using Brunch with Chaplin for the purposes of this tutorial. In the terminal, enter the following:

```
$ brunch new https://github.com/paulmillr/brunch-with-chaplin.git /PATH/TO/brunchnetlify
```

 Whatever you decide to name your project, you must be sure not to call it just plain `brunch` (which is why we are calling this project `brunchnetlify`).

Now you can see a `brunchnetlify` directory, with all of the various assets you need to develop your site in `brunch`.

Change into this new directory:
```
$ cd PATH/TO/brunchnetlify
```
 If you decided to call your project `brunch`, the next command will fail:
```
$ npm install brunch --save
```
The above command inserts `brunch` into the dependencies of your `package.json` file, which tells netlify what tools it needs to build your site. If you named your project `brunch`, npm will refuse to add `brunch` as a dependency of itself.

Brunch allows you to preview your work by running its own testing server:

```
$ brunch watch --server
```

Brunch will compile your site and allow you to open it in a browser at http://localhost:3333.

Like what you see? Great. Let's move on!

Now it's time to push it to your repo of choice. Directions for GitHub follow here.

## **Creating your Git Repo**

Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

Open Terminal (for Mac users) or the command prompt (for Windows and Linux users).

For our purposes, let's call your new repo "brunch".

In the terminal, initialize the local directory as a Git repository.
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

At the top of your GitHub repository's Quick Setup page, click the clipboard icon to copy the remote repository URL.

In Terminal, add the URL for the remote repository where your local repository will be pushed.
```
git remote add origin Git_Repository_URL
```
Verify your URL
```
git remote -v
```
Now, it's time to push the changes in your local repository to GitHub.
```
git push -u origin master
```

Now that your assets are up and running on GitHub, let's connect them to netlify.
<a id="netlifystart"></a>
## **Connecting to netlify**

### Step 1: Add Your New Site

![step 1 - add](https://cloud.githubusercontent.com/assets/6520639/9803638/717820a6-57d9-11e5-838f-d2a732eb0a41.png)
Creating a new site on netlify is simple. Once you've logged in, you'll be taken to https://app.netlify.com/sites. If you're just starting out, there's only one option.

### Step 2: Link to Your GitHub
Clicking "New Site" brings you to this screen:

![step 2 - link](https://cloud.githubusercontent.com/assets/6520639/9803637/7176ac8a-57d9-11e5-9b09-f43dc772a4f9.png)

When you push to GitHub, netlify does all the work. No more manual deploying of updates or changes!

Since your assets are hosted on GitHub, we'll need to link Netlify to GitHub. Click "Link to GitHub".

### Step 3: Authorize netlify
![step 3 - authorize](https://cloud.githubusercontent.com/assets/6520639/9803635/71760370-57d9-11e5-8bdb-850aa176a22c.png)

It's time to allow netlify and GitHub to talk to each other. Clicking the "Authorize Application" button will do just that. Like it says in the image below, netlify doesn't store your GitHub access token on our servers. If you'd like to know more about the permissions netlify requests and why we need them, you can visit [https://docs.netlify.com/github-permissions/](https://docs.netlify.com/github-permissions/).

### Step 4: Choose Your Repo
![step 4 - repo](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step4Brunch.png)

Now that you've connected netlify and GitHub, you can see a list of your Git repos. There's the "brunch" repo we just pushed to GitHub. Let's select it.

### Step 5: Configure Your Settings
![step 5 - configure](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step5Brunch.png)

Here you can configure your options. For the purposes of this tutorial, there's nothing you need to change, so just click "Save".

### Step 6: Build Your Site

![step 6 - build](https://cloud.githubusercontent.com/assets/6520639/9803640/717b9c40-57d9-11e5-9ca4-92f90f8ed005.png)

Now it's time to sit back and relax. Go grab something cold to drink, scratch the dog behind the ears, or just get up and walk around (you've probably been in front of the computer for too long today, right?). Netlify will do the rest, and you can watch the progress.

### Step 7: Done

![step 7 - done](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step7Brunch.png)

Wait, you thought there was going to be more? Nope! Netlify has done it all for you, including giving your site a temporary name. Now you can add your custom domain, and your site will be live for your adoring public to view. Congratulations, and thanks for using netlify!
