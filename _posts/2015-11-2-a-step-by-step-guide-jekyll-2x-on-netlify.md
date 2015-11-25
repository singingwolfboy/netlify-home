---
title: "A step-by-step guide: Jekyll (2.X) on Netlify."
author: Jimmi Lee
image: /uploads/1424055625jekyll.png
short_title: Hosting Jekyll on netlify
description: A step-by-step guide on how to host a website built with a specific version of jekyll.
thumbnail: /uploads/jekyllsquarelogo.png
cmsUserSlug: ""
date: 2015-11-02T00:00:00.000Z
tags:
  - jekyll github
---

## **Welcome to Netlify**
Jekyll past, present and future versions hosted on Netlify.  
Today we will give you a step by step guide with more details on how to set up the biggest one of them all, I present to you: Jekyll (any version) on Netlify in continuous deployment.

If you already have a site set up and running on GitHub and only wish to connect, start [here](#netlifystart) instead.

### **Setup your GitHub Repository**
If you want to create a GitHub repo from a local directory scroll down to [here](#githubfromlocal).

If you are setting up a jekyll page from scratch check these two out:
* [Using jekyll with pages](https://help.github.com/articles/using-jekyll-with-pages/).
* [Jekyll Now](https://github.com/barryclark/jekyll-now)
.

#### 1. Set up your GemFile
Your Gemfile should be located in the root of your site. Open it in your text editor of choice and make sure that Jekyll is included and since we're hosting at Netlify's, it's also possible to specify *WHICH* version of Jekyll you wish to use! 
See the following examples of including Jekyll:

To use the most current version of Jekyll (as of this writing version 3) use this line:
```
$ gem 'jekyll'
```

To use a specific version, enter the version name after a comma separation like seen on this line:
```
$ gem 'jekyll', '~> 2.5.3'
```

To use the most current beta version of Jekyll:
```
$ gem install jekyll --pre
```
Keep in mind that this is also how it works with other site generators and their Gemfile.

The Gemfile is also where you would list the gems for the plugins your site is using and just as we saw with Jekyll, it's possible to specify *WHICH* version you wish to use, without limitations on which plugin and what versions are allowed! 

For example when you're using jekylll you might want to add the jekyll-sitemap plugin to silently generate a sitemaps.org compliant sitemap for your Jekyll site and to specify this in the gem file you'd use the following line: 
```
$ gem 'jekyll-sitemap'
```

Here's an example where we specify *WHICH* exact version of the plugin we wish to use.  The following line specifies that octopress version 3.0.0.rc.12 should be installed:
```
$ gem 'octopress', '~> 3.0.0.rc.12'
```

#### 2. Open Terminal Window/Command Prompt
Open up a Terminal window (or the command prompt if you're on a Windows OS) and change the current working directory to your local project – the root directory of your site.

#### 3. Bundle Install.
The following command will install the jekyll gem specified in the Gemfile, along with dependencies and plugins:
```
$ bundle install
```
Once you've used the command above, a Gemfile.lock file will be created in your directory listing all installed gems (plugins dependencies etc.) and this ensures that Netlify always uses the same version of Jekyll (and whatever else you specified in the Gemfile) that you used to build your site.

### **GitHub Repository from Local Directory**
<a id="githubfromlocal"></a>
Let's face it. Some of us prefer to work on our local machines and as such, we need to know how to create and move a local site/directory to a new GitHub repository.
First make sure you ran the _$ bundle install_ command as outlined above and that your Gemfile is included with a Gemfile.lock.  This is needed for the repository to work with Netlify.

#### 1. Create Repository. 
If you haven't already done it, go to GitHub and create a new repository for your Jekyll page. 
You can postpone adding files to the repository until after its creation (The README, license and gitignore files).
![createrepo.png](/uploads/createrepo.png)

Once you've named the repository and clicked *Create repository* you're ready to go local.

#### 2. Open Terminal. 
Open up a Terminal window (or the command prompt if you're on a Windows OS) and change the current working directory to your local project – the root of the directory of your page (cd my-local-repo-directory).

*Keep the Terminal Window/Command Prompt open, in between steps for your own convenience!*

#### 3. Initialize Directory. 
Initialize the local directory as a git repository with the following line in Terminal/Command Prompt:
```
$ git init
```

#### 4. Add Files. 
Add the files from your local directory to this git repository and stage them for their first commit with the following line in Terminal/Command Prompt:
```
$ git add .
```

#### 5. Commit Files. 
Commit the files you just staged in your local repository by entering the following line in Terminal/Command Prompt:
```
$ git commit -m 'First commit'
```

#### 6. Get Remote URL. 
![a1_remotegithuburl.png](/uploads/a1_remotegithuburl.png)

Now it's time to return to the GitHub repository you created in step one to get the URL for this remote repository where your local repository will be pushed.

#### 7. Add Remote Repository URL.
Return to the Terminal window/Command prompt and paste the remote repository URL inside the following line (instead of My-Repository-URL):
```
$ git remote add origin My-Repository-URL
```
If you cannot set the remote repository (e.g. if it exists already) or if you just want to check what remote repository this project is linked to, you can use the following command:
```
$ git remote -v
```

#### 8. Push.
The final task before we're done setting up is to use the push command with git, as in the following line in Terminal/Command prompt:
```
$ git push -u origin master
```

All your files will then be copied to your online repository.

We're done setting up the Jekyll page, so let's connect it with Netlify.

### **Connecting to Netlify**
<a id="netlifystart"></a>

#### Step 1: Add Your New Site
![Netlify New Site](/uploads/newsitebut.png)

Creating a new site on Netlify is simple. Once you’ve created an account and logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button to get started.

#### Step 2: Link to Your GitHub
Clicking *“New Site”* brings you to this screen:
![Link to GitHub](/uploads/createsite.png)
When you push to GitHub, Netlify does all the work. No more manual deploying of updates or changes!
Since your assets are hosted on GitHub, we’ll need to link Netlify to GitHub. Click *“Link to GitHub”*.

#### Step 3: Authorize Netlify
You will be asked to provide your GitHub login details:
![GitHub Login](/uploads/githublogin.png)

It’s time to allow Netlify and GitHub to talk to each other, so review the permissions and click authorize application.
![Authorize Netlify](/uploads/authorize.png)

Like it says in the image above, Netlify doesn’t store your GitHub access token on our servers! 

If you’d like to know more about the permissions Netlify requests and why we need them, you can check out our [documentation on GitHub Permissions](https://docs.netlify.com/github-permissions/).

#### Step 4: Choose Your Repo
![Choose Repo](/uploads/chooserepo.png)

Once you're connected to GitHub, Netlify will show you a list of your Git repos, as seen above.
For the purpose of this tutorial we'll select the *“AmazingWood”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
![Configure Settings](/uploads/configurerepo.png)

In most cases and for the purpose of this tutorial, there's nothing we need to configure, so we'll simply click save to go with the default options.

#### Step 6: Build Your Site
![siteisbuilding.png](/uploads/siteisbuilding.png)
Once you click save, Netlify will step in and take over, though it will let you know what's happening on the way, as seen in the above screenshot.
Now it’s time to sit back and relax, as the next step may take a few minutes. Take a break and Netlify will do the rest, while you watch the progress.

#### Step 7: Done
![Done](/uploads/naturalistpanda.png)
Once Netlify has build your site, you'll be presented with the result and your very own randomly generated name and as you can see from this screen shot, you now have access to the control panel for the site.

The site starts as default public, but you can easily and quickly change this now along with the options to add a custom domain name and changing from the randomly generated name to something more appropriate.

That's it for now.
