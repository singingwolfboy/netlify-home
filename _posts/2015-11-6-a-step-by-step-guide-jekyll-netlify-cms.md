---
title: "A step-by-step guide: Jekyll Netlify CMS"
author: Jimmi Lee
image: null
short_title: Setting up Jekyll with Netlify CMS
description: A step-by-step guide on how to set up Jekyll with Netlify CMS.
thumbnail: /uploads/netlifylogo.png
cmsUserSlug: ""
date: 2015-11-06T00:00:00.000Z
tags: null
---

### **Welcome to Netlify**
Welcome to Netlify or should I say welcome to Netlify CMS, the first static site CMS system that can easily be integrated with almost any static site generator!

I know - it sounds too good to be true, but the age where static sites were defined by a lack of dynamic content, a lack of user interactivity and a lack of a CMS system is finally over.
In this little guide, we'll do a step by step, which will show you how to install and configure your own copy of our jekyll-netlify-cms template.

### **Setup your GitHub Repository**
We'll start by getting our own copy of the template and then we'll set up a local version and configure it, before letting Netlify build it, but one thing at the time.

#### 1. Get your own copy.
First you need to fork your own copy of the [jekyll-netlify-cms template](https://github.com/netlify-templates/jekyll-netlify-cms) and give it a new name.

#### 2. Local Work Space.
Make a directory locally, open terminal (or the Windows prompt if you're using a Microsoft OS) and go to the location of this directory (cd my-local-repo-directory).
This will be the location of your site, while working on your local machine.

#### 3. Get Repository URL
From the repo we made above, we want to clone a copy to our local directory.
To do this we will first copy the remote GitHub URL (it will look like https://github.com/AccountName/RepoName.git or similar) from the above mentioned repo - the button looks like this:

![a1_remotegithuburl.png](/uploads/a1_remotegithuburl.png)

Then we open a terminal window to the location of our local repo directory created above  and finally we use the following command (substitute my-repo-url with the URL you copied from GitHub):
```
$ git clone my-repo-url .
```
The full stop "." at the end specifies the current folder as the checkout folder, so make sure you are in the correct folder.
Feel free to keep the Terminal window open, as we're not done with it yet!

#### 4. Install the Netlify Git API.
Go to the [Netlify Git API](https://github.com/netlify/netlify-git-api/releases) releases page and download the relevant version for your OS.

Decompress the netlify-cms-api file and add it to your path. E.g. this can be done by using the command below from the directory where you have the file and it will move the executable to your bin directory, which is a part of the PATH:
```
$ sudo mv netlify-git-api '/bin'
```
Note that this step differs a bit on a Windows machine.

#### 5. Set up your gemfile
We want to use Jekyll 3.0.0 in our example and since we're using github, we will also add the github pages plugin. To do this, we open the gemfile in the root directory and change/add the following:
```
gem 'jekyll', '~> 3.0.0'
gem 'jekyll-sitemap'
```
At the time of writing the jekyll used for the template was 2.5.3, but we're having no issues with the newer version of Jekyll so far, so we're going ahead.

#### 6. Bundle Install.
The following command will install the jekyll gem specified in the gemfile, along with github-pages:
```
$ bundle install
```
Once you've used the command above, to install the listed gems, a gemfile.lock file will be created in your directory. This makes sure that netlify uses the same version of Jekyll and plugins that you used to build your site.

#### 7. Create Netlify CMS Users

From the terminal window, from your local repo directory, we need to run the following command for each user you wish to add (you will be asked for an email, a name and a password):
```
$ netlify-git-api users add
```
You need to create at least one user, to properly test the system.

#### 8. Start Netlify CMS Server
Next we need to start the Netlify CMS server locally with the following command:
```
$ netlify-git-api serve
```
This will start the Netlify CMS Server.

**Keep the Terminal Window/Command Prompt open to keep the server running!**

You can log in here and create a new post: 
[https://localhost:4000/admin](https://localhost:4000/admin)

#### 9. Build and Watch 
From the root of your site, run the following command to build your site using bundle
```
$ bundle exec jekyll server --watch
```
Now you can navigate to check out your site and the post you just created through this link:
[https://localhost:4000](https://localhost:4000)

#### 10. Push to Github
Once you're done fiddling with the local version and maybe adding some posts, we should try out this netlify-cms online.

In the terminal window/command prompt, CD to the root folder of your site and start by entering this command, to check where the project is pushed to:
```
$ git remote -v
```
If you're happy with the result go ahead and add the new files with this command:
```
$ git add .
```
And then commit the files you just staged in your local repository by entering the following line in Terminal/Command Prompt:
```
git commit -m 'First commit'
```
The final step we need to do is push the project to GitHub and we use the following line for that:
```
$ git push -u origin master
```
You'll be asked for login details for your account at GitHub and once they've been provided, the local project is pushed to GitHub.

We're done setting up the Jekyll with Netlify CMS template page, so let's connect it with Netlify and build this thing.

### **Connecting to Netlify**
<a id="netlifystart"></a>

#### Step 1: Add Your New Site
![Netlify New Site](/uploads/newsitebut.png)

Creating a new site on netlify is simple. Once you’ve created an account and logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button to get started.

#### Step 2: Link to Your GitHub
Clicking *“New Site”* brings you to this screen:
![Link to GitHub](/uploads/createsite.png)
When you push to GitHub, netlify does all the work. No more manual deploying of updates or changes!
Since your assets are hosted on GitHub, we’ll need to link Netlify to GitHub. Click *“Link to GitHub”*.

#### Step 3: Authorize netlify
You will be asked to provide your github login details:
![GitHub Login](/uploads/githublogin.png)

It’s time to allow netlify and GitHub to talk to each other, so review the permissions and click authorize application.
![Authorize Netlify](/uploads/authorize.png)

Like it says in the image above, netlify doesn’t store your GitHub access token on our servers! 

If you’d like to know more about the permissions netlify requests and why we need them, you can check out our [documentation on GitHub Permissions](https://docs.netlify.com/github-permissions/).

#### Step 4: Choose Your Repo
![Choose Repo](/uploads/chooserepo.png)

Once you're connected to GitHub, netlify will show you a list of your Git repos, as seen above.
For the purpose of this tutorial we'll select the *“AmazingWood”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
![Configure Settings](/uploads/configurerepo.png)

In most cases, there's nothing we need to configure, but for this build we need to set an environment variable under the environment tab:
```
JEKYLL_ENV = production
```

#### Step 6: Build Your Site
Once you click save, netlify will step in and take over, though it will let you know what's happening on the way, as seen in this screenshot:
![siteisbuilding.png](/uploads/siteisbuilding.png)

Now it’s time to sit back and relax, as the next step may take a few minutes. Take a break and Netlify will do the rest, while you watch the progress.

#### Step 7: Done
![Done](/uploads/naturalistpanda.png)
Once netlify has build your site, you'll be presented with the result and your very own randomly generated name and as you can see from this screen shot, you now have access to the control panel for the site.

The site starts as default public, but you can easily and quickly change this along with the options to add a custom domain name and change from the randomly generated name to something more appropriate.

That's it for now.