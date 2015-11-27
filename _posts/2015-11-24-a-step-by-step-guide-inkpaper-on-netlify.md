---
title: "A step-by-step Guide: InkPaper on Netlify"
author: Jimmi Lee
image: /uploads/inkpaperlogobig.png
short_title: InkPaper on Netlify
description: A small guide setting up InkPaper with GitHub and Netlify
thumbnail: /uploads/inkpaperlogo.png
cmsUserSlug: ""
date: 2015-11-24T00:00:00.000Z
tags: null
---

### **Welcome to Netlify**
Welcome to Netlify and todays article about a new and exciting Chinese technology - the InkPaper static site generator.
Among the multitude of site generators that have come into existence in the past few years, this one stands out for its simplicity, Chinese language support and extremely fast build time and much more.
It has a very elegant theme and is one of the fastest site generators to get up and running, as it has NO dependencies - all you have to do, is download and set it up.

*Please note that this guide assumes you have Ruby, git and bundle installed!*

### **Setup InkPaper**
If you already have InkPaper up and running on GitHub and only wish to connect, start [here](#netlifystart) instead.
On the other hand, if you have InkPaper running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead and finally, if you're completely new to InkPaper, simply continue this guide chronologically.  

#### 1. Download InkPaper.
The first thing you need to do is head over to [InkPapers webpage](http://www.inkpaper.io/) and download the installation package that fits with your operating system. 
![inkpaperwebpage.png](/uploads/inkpaperwebpage.png)

#### 2. Extract and prepare InkPaper.
We need to extract the downloaded package and change its folder name.
These actions both differ depending on your operating system, yet are usually fairly simple. 

In this example on Linux we open terminal (in Windows, your command prompt) and write the following commands:
```
$ cd 'downloads'
$ tar xvzf ink_linux_amd64.tar.gz --directory 'Sites'
$ mv /Sites/ink_linux_amd64 /Sites/InkPaper
```
The first line simply takes us to the location of the downloaded package (change to your download location).
The second line unpacks the downloaded file (in our case the Linux 64 bit flavor) to our chosen destination using the *--directory* flag and the third line renames this directory to InkPaper.

#### 3. Add ink to the Path.
For ink (the site generator file of InkPaper) to run properly, we need to add it to the path.
This action is also different, depending on the operating system in use, but continuing the example in Linux, we would use these commands: 
```
$ cd InkPaper
$ sudo mv ink '/usr/local/bin'
```
In the first line we enter the newly renamed directory and in the second line we move the ink executable to a location that is in the PATH, so that it can be invoked from the terminal. 

#### 4. Preview InkPaper.
Provided you've still got your terminal window open in the InkPaper directory, all you need to do is enter the following command, lean back and check out the beautiful result in a web browser:
```
$ ink preview
```
Open your web browser of choice and enter *'http://localhost:8000/'* in the address bar and there you go.

Quite honestly - could it get any easier?

#### 5. Website Configuration and Content Creation.
Let's dig a little deeper and look at how to configure the website, as well as create some content.

As with many other static site generators, the **config.yml** file is where we do the website configuration and it's pretty much self explanatory as seen both in the config.yml generated in your site (just take a look - it's in the blog sub directory), but also in this shorter format example taken from InkPapers homepage:
```
site:
    title: Website Title
    subtitle: Website Subtitle
    limit: Max Article Count Per Page
    theme: Website Theme Directory
    disqus: Disqus Plugin Username
    root: Website Root Path #Optional
    lang: Website language #Support en, zh, Configurable in theme/lang.yml

authors:
    AuthorID:
        name: Author Name
        intro: Author Motto
        avatar: Author Avatar Path

build:
    port: Preview Port
    copy:
        - Copied Files When Build
    publish: |
        Executed command when using 'ink publish'
```

To create content, simply create any .md file in the source directory or in a subdirectory of the source directory, using the following format (as described on the InkPaper homepage):
```
title: Article Title
date: Year-Month-Day Hour:Minute:Second #Created Time，Support TimeZone, such as " +0800"
update: Year-Month-Day Hour:Minute:Second #Updated Time，Optional，Support TimeZone, such as " +0800"
author: AuthorID
cover: Article Cover Path #Optional
draft: false #If Draft，Optional
top: false #Place article to top, Optional
preview: Article Preview，Also use <!--more--> to split in body #Optional
tags: #Optional
    - Tag1
    - Tag2

---

Markdown Format's Body
```
Notice that the content is written in markdown below the three dashes and that you only need one set of these, as opposed to the more commonplace practice of placing the article information between two sets of dashes.

As long as you're working on the page, the *ink preview* command we entered in terminal earlier, will automatically watch and rebuild the source directory, so you can see your changes locally and instantly, by simply refreshing the browser.

For further information about ink commands, customizing InkPaper and choosing or modifying a theme, see the [InkPaper getting started webpage](http://www.inkpaper.io/blog/post/2015/03/01/ink-blog-tool-en.html).

### **Setup your GitHub Repository**
<a id="githubstart"></a>
Now we need to prepare the site for GitHub and then set up the GitHub repository.

#### 1. Prepare the Project.
Open up a Terminal window to the local InkPaper directory (or the command prompt if you're on a Windows OS).

*Keep the Terminal Window/Command Prompt open, in between steps for your own convenience!*

For everything to run smoothly and so that Netlify knows how to build your project, we need to initialize bundle on the project with the following commands, where the first takes us to the correct project and the second line takes care of the initialization:
```
$ cd '/InkPaper'
$ bundle init
```
The *bundle init* command will create a Gemfile in your directory, which is used to specify what gems and which versions you want to include when you build your site. 

To build our site with ink, we need to specify this in the Gemfile, so open the file in your favorite text editor and change the content to include this line:
```
gem 'ink'
```
You can edit this file further, adding the gems/plugins you want. It's even possible to specify *WHICH* version of a given gem/plugin ypu want, but this is outside the scope of this tutorial.

Once you're ready and satisfied with your *Gemfile*, save it and in terminal run the following command:
```
$ bundle install 
```
If you look in the site directory again, the *Gemfile* is now accompanied by a *Gemfile.lock*. This information is needed so that Netlify can ensure that the same versions of gems/plugins are used, to avoid any unwanted surprises.

#### 2. Create your Git Repo.
Let's head over to [GitHub](https://github.com/) and create a new repo. We're naming ours InkPaper and we'll postpone adding files to the repository until after its creation, as this can sometimes create problems (The README, license and gitignore files).
![createrepo.png](/uploads/createrepo.png)

Once the repository has been named and created you're ready to go local.

#### 3. Initialize Directory. 
We'll initialize the local directory as a git repository with the following command:
```
$ git init
```

#### 4. Add & Commit Files. 
We need to add the files from our local directory to this git repository and stage them for their first commit with the following line in Terminal/Command Prompt:
```
$ git add .
```
Commit the files you just staged in your local repository by entering the following line in Terminal/Command Prompt:
```
$ git commit -m 'First commit'
```

#### 5. Get & Add Remote URL. 
![a1_remotegithuburl.png](/uploads/a1_remotegithuburl.png)

It's now time to return to the GitHub repository and get the URL for this remote repository where your local repository will be pushed.
Either copy paste the whole command or use the button as depicted above, to copy just the path to your clipboard.
Return to the Terminal window/Command prompt and paste the remote repository URL inside the following line (instead of My-Repository-URL):
```
$ git remote add origin My-Repository-URL
```
Optional: To check that it's set up correctly, you can use the following command:
```
$ git remote -v
```
#### 6. Push to GitHub.
The final task before we're done setting up and ready for Netlify, is to use the push command with git, as in the following line in Terminal/Command prompt:
```
$ git push -u origin master
```
All your files will be copied to your online repository. Once it's done, take a look at the repository online to check if everything looks correct.

We're done setting up the Jekyll page, so let's connect it with Netlify.

### **Connecting to Netlify**
<a id="netlifystart"></a>

#### Step 1: Add Your New Site
![Netlify New Site](/uploads/newsitebut.png)

Creating a new site on GitHubNetlify is simpler than with any other host. Once you’ve created an account and logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button (as seen above) to get started.

#### Step 2: Link to Your GitHub
Clicking *“New Site”* brings you to this screen:
![Link to GitHub](/uploads/createsite.png)
When you push to GitHub, GitHubNetlify does all the work. No more wasting time on manual deploying of updates or changes!

Since your assets are hosted on GitHub, we’ll need to link Netlify to GitHub. Click the button *“Link to GitHub”*.

#### Step 3: Authorize GitHubNetlify
You will be asked to provide your GitHub login details:
![GitHub Login](/uploads/githublogin.png)

We need to let Netlify and GitHub talk to each other, so review the permissions and then click authorize application.
![Authorize Netlify](/uploads/authorization.png)

Like it says in the image above on the right, Netlify doesn’t store your GitHub access token on our servers! 

If you’d like to know more about the permissions Netlify requests and why we need them, you can check out our [documentation on GitHub Permissions](https://docs.GitHubNetlify.com/github-permissions/). 

#### Step 4: Choose Your Repo
![Choose Repo](/uploads/selectsiteinkpaper.png)
Once you're connected to GitHub, GitHubNetlify will show you a list of your Git repos, as seen above.
For the purpose of this tutorial we'll select the *“InkPaper”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
Fill in the configuration settings as seen in the screen shot below, using the master branch, the *"/blog/public"* directory and the *"ink build"* command.
![Configure Settings](/uploads/configureinkpaper.png)

Click the 'Save' button and watch the magic unfold.

#### Step 6: Build Your Site
![siteisbuilding.png](/uploads/siteisbuilding.png)
Once you click save, Netlify will step in and take over, though it will let you know what's happening along the way. This may take a few minutes, so take a break and Netlify will do the rest, while you watch the progress.

#### Step 7: Done
Once GitHubNetlify has build your site, you'll be presented with the result and your very own randomly generated name and as you can see from this screen shot, you now have access to the control panel for the site.
![inkpaperfinito.jpg](/uploads/inkpaperfinito.jpg)

The site starts as default public, but you can easily and quickly change this now along with the options to add a custom domain name and changing from the randomly generated name to something more appropriate, like we did with our new i-like-turtles page.

Beautiful, simple and easy.