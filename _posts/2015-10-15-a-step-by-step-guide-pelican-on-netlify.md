---
title: "A step-by-step guide: Pelican on netlify"
author: Aaron Autrand
image: /uploads/pelican-screenshot.png
short_title: Pelican on netlify
description: A step-by-step guide on how to host Pelican sites on netlify
thumbnail: /uploads/2043492.png
cmsUserSlug: ""
date: 2015-10-15T00:00:00.000Z
tags:
  - pelican
  - python
  - tutorial
---

Today, we're going to look at how to host a website built with [Pelican](http://getpelican.com) on netlify, including setting up continuous deployment.

Let's start from scratch. If you already have a Pelican site set up, you can skip straight to the [Preparing for deployment](#gitstart) or [Connecting to netlify](#netlifystart) sections.

<!-- excerpt -->

## Installing Pelican

This guide assumes you have [Python](https://www.python.org/) installed.

Open your terminal, and enter the following command:

```
$ pip install virtualenv
```

Installing virtualenv will allow you to easily control all the dependencies needed for your project (or any Python project). This way, we can make sure that what you see when you build your Pelican site on your local machine is exactly what you see when you host that site on netlify.

Let's get your workstation prepped. Use virtualenv to create the pelican directory where you'll be working:

```
$ virtualenv ~/PATH/TO/pelican
$ cd ~/PATH/TO/pelican
$ source bin/activate
```

Now you can install Pelican (and since you'll want to create content, go ahead and install Markdown while you are at it).

```
$ pip install pelican Markdown
```

## **Building Your Site**

Pelican can build a skeleton for your site, which will set up directories within the pelican directory to hold your content, html that Pelican builds for you, and all of your necessary configuration files. Let's do that now:

```
$ pelican-quickstart
```

Whoa, that's a bunch of questions. If you see something in square brackets after the question, that's the default setting. You can change the settings to meet your needs.

If you already have a domain, enter it in http://www.example.com format when you are asked for your URL prefix. Otherwise, you can leave it blank for now.

Additionally, when Pelican asks you about hosting options, go ahead and answer "No" to each of them. You'll be hosting on  netlify instead.

Now it's time to create some content (that's why you are building a site in the first place, isn't it?). Open your favorite text editor, and paste in the following:

```
Title: Pelican Websites on netlify
Date: 2015-09-01 10:20
Category: Review

This is how easy it is to create a static website hosted with netlify.
```

Since you installed Markdown along with Pelican (and since this content is in Markdown format), save this as `~/PATH/TO/pelican/content/netlify.md`

It's time to display your content. Use this command to generate your site:

```
$ pelican content
```

This will generate your site in simple HTML format in `~/PATH/TO/pelican/output`

Want to see what your site will look like? Pelican includes a server which will allow you to view your site before you push it live. To do so, change to the `output` directory and launch the server with the following two commands

```
$ cd ~/PATH/TO/pelican/output
$ python -m pelican.server
```

Now you can view your site by visiting [http://localhost:8000](http://localhost:8000) in your browser.

Like what you see? Great. Let's move on!

## **Preparing for Deployment**

If you are satisfied with your site, it's time to get it ready to deploy. First, let's make sure that Pelican and GitHub will play nicely together.

Change back to the `pelican` directory:
```
$ cd ..
```

Pelican generates your website to the `output` directory. We want to make sure that the `output` directory is not version controlled by Git, so we'll create a `.gitignore` file in the root directory and add `output` to it:

```
$ echo "/output" >> .gitignore
```

We also want to make sure that netlify knows exactly which versions of various Python plugins you are using. We can do that by creating a file called `requirements.txt`

```
$ pip freeze > requirements.txt
```

Okay, you're ready to go!

Now it's time to push it to your repo of choice. Directions for GitHub follow here.
<a id="gitstart"></a>

## **Creating your Git Repo**

Create a new repository on GitHub. To avoid errors, do not initialize the new repository with README, license, or gitignore files. You can add these files after your project has been pushed to GitHub.

Open Terminal (for Mac users) or the command prompt (for Windows and Linux users).

For our purposes, let's call your new repo "pelican".

Change the current working directory to your local project.

```
$ cd ~/PATH/TO/pelican/
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
git push origin master
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

Since your assets are hosted on GitHub, we'll need to link  netlify to GitHub. Click "Link to Github".

### Step 3: Authorize netlify
![step 3 - authorize](https://cloud.githubusercontent.com/assets/6520639/9803635/71760370-57d9-11e5-8bdb-850aa176a22c.png)

It's time to allow netlify and GitHub to talk to each other. Clicking the "Authorize Application" button will do just that. Like it says in the image below, netlify doesn't store your GitHub access token on our servers. If you'd like to know more about the permissions netlify requests and why we need them, you can visit [https://docs.netlify.com/github-permissions/](https://docs.netlify.com/github-permissions/).

### Step 4: Choose Your Repo
![step 4 - repo](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step4Pelican.png)

Now that you've connected netlify and GitHub, you can see a list of your Git repos. There's the "pelican" repo we just pushed to GitHub. Let's select it.

### Step 5: Configure Your Settings
![step 5 - configure](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step5Pelican.png)

Here you can configure your options. For the purposes of this tutorial, there's nothing you need to change, so just click "Save".

### Step 6: Build Your Site

![step 6 - build](https://cloud.githubusercontent.com/assets/6520639/9803640/717b9c40-57d9-11e5-9ca4-92f90f8ed005.png)

Now it's time to sit back and relax. Go grab something cold to drink, scratch the dog behind the ears, or just get up and walk around (you've probably been in front of the computer for too long today, right?). Netlify will do the rest, and you can watch the progress.

### Step 7: Done

![step 7 - done](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step7Pelican.png)

Wait, you thought there was going to be more? Nope! Netlify has done it all for you, including giving your site a temporary name. Let's make it look a little prettier:

![step 8 - pretty](https://raw.githubusercontent.com/munkymack/netlify-assets/master/Step8Pelican.png)

There, that's better. Now you can add your custom domain, and your site will be live for your adoring public to view. Congratulations, and thanks for using netlify!
