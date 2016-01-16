---
title: "A step-by-step: Sculpin on netlify"
author: Jimmi Lee
image: null
short_title: "A short guide: Sculpin on netlify"
description: "A guide to help you set up Sculpin on netlify in continuous deployment, with assets on GitHub."
thumbnail: /uploads/sculpin_logo.png
cmsUserSlug: ""
date: 2016-01-13T00:00:00.000Z
tags: null
---

### Welcome to netlify
Sculpin is a fast static site generator, which uses Twig templates, is built on Symfony's HTTP Kernel and written in PHP. It's the most popular site generator written in PHP, with almost 3 times the stars of the second most popular and it's arguably the most mature and well documented static site generator written in PHP.

For those unaware, PHP is a serverside language based on C and has long been used to make dynamic homepages. This is not as common as static site generators written in Javascript or Ruby and it will be interesting to see how it works compared with these.

If you feel at home with PHP, Sculpin will be right up your alley and it comes with lots of build in features, such as embedded Composer. Composer is to PHP what npm is to node.js or bundler is to Ruby and will install and handle dependencies for the project and it comes built into Sculpin. 

<LINKS AND REQUIREMENTS - PHP version 5 or up with php-cli ???>
Quick installation of PHP 5:

```
sudo apt-get update
sudo apt-get install php5 libapache2-mod-php5       # Main thing - PHP5
sudo apt-get install php5-cli                       # command line addition
(sudo apt-get install php5-mysql)                   # Or NO?
sudo apt-get install php5-curl                      # Sculpin needs these libraries
```

### QUICK GUIDE LINUX, OSX, WINDOWs
This sections contains a small quick guide, for each of the big three operatins systems, so whether you're on Apple, Windows or Linux, we got you covered. However, if you need a more detailed introduction and guide, simply scroll down to [here](#sculpinsetup).

The commands will help you download and install Sculpin with a blog skeleton

#### Quick Install Sculpin - Linux:

```
curl -O https://download.sculpin.io/sculpin.phar
chmod +x sculpin.phar
sudo mv sculpin.phar '/usr/local/bin/sculpin'

git clone https://github.com/sculpin/sculpin-blog-skeleton.git my-sculpin-site
cd my-sculpin-site

sculpin install

sculpin generate --watch --server
```

#### Quick Install Sculpin - OSX:

```
OSX terminal install commands
```

#### Quick Install Sculpin - Windows:

```
Windows command prompt install commands
```

### SETUP Sculpin
The quick guide is not to everyone's taste and so we'll delve deeper into the setup and installation of Sculpin in this step-by-step guide.

Please note, that while the quick start guide was tested on all three operating systems, this detailed main guide was only tested in Ubuntu Linux and while it will work with only slight changes in OSX, it will be somewhat different when using the Windows OS!

#### 1. sculpin.phar - Download, Permissions and PATH
Let's get this slippery sculpin, set its permissions and add it to the path.

Open a terminal window and use the following three commands:

```
curl -O https://download.sculpin.io/sculpin.phar
chmod +x sculpin.phar
sudo mv sculpin.phar '/usr/local/bin/sculpin'
```

This will download sculpin using curl, set its permissions so it can be executed and add it to your PATH, so it can be executed from anywhere. 

#### 2. Clone Boilerplate
Sculpin can be customized to run just about any kind of site you'd want to, but unless you want to specify all of this by yourself, it helps to clone a sculpin skeleton structure for your type of site.  

We'll clone the blog skeleton and enter it with the following commands in terminal:

```
git clone https://github.com/sculpin/sculpin-blog-skeleton.git my-sculpin-site
cd my-sculpin-site
```

#### 3. Install Dependencies
Before we can view our Sculpin site, it will need to install various dependencies, using composer. 

Since composer is built into sculpin, simply run this command from terminal in the root of your site:

```
sculpin install
```

As we downloaded the skeleton, we've already got the essentials needed to view the site!

#### 4. Run Sculpin Run
Let's take a look at our first catch of the day by running this sculpin command in a terminal window:

```
sculpin generate --watch --server
```

The generate command will build our site and when using the `--watch` flag, Sculpin will watch of the files in your site like a hawk and whenever anything's changed, it will re-generate the site automatically and instantly. The `--server` flag will launch a PHP web server, so you can see your work in progress at [localhost:8000](http://localhost:8000/).

Go ahead and take a peek.

#### 5. Folder Structure
Since we forked the basic folder structure from the blog skeleton, our folder structure is slightly different from an ordinary Sculpin site.

// Insert IMAGE FOLDER STRUCTURE 

You will notice several configuration files in the main directory for your project as well as the following directories:

app contains all the logic for generating the blog.
source contains the raw content for your blog.
output_dev contains the build output or the site and won't actually be created until you build the site the first time.

#### 6. Create Content
< Create markdown file, using Jekylls file name format YYYY-MM-DD-Title.md to create a file! >

```
---
YAML FRONTMATTER
---
MARKDON CONTENT
```

<With this one file you've updated the blog listing, created a page for the post, and updated the atom feed.
Assuming you are still running the server with the command sculpin generate --watch --server, the new pages are now available on your local server (localhost:8000). You will need to refresh the browser to see your new content.>

When working with Sculpin it's worth noting two things about running the server. The first is that it might crash, but the solution to this is simple, as all you have to do is run the generate command again like before: `sculpin generate --watch --server`

Another tiny issue is when the content hasn't generated completely, for whatever reason. When this happens, simply stop and then restart the server, by first pressing control + c (while you have your terminal window with the server running selected) and then running the generate command again like this: `sculpin generate --watch --server` 

### Pushing Sculpin to GitHub
<a id="githubstart"></a>

We want to set up an online GitHub repository with our local environment and push our local files to this repository. Next, we'll connect netlify to the repository for our automatic build (i.e. whenever you push to GitHub, netlify will rebuild your site).

#### 1. Create your Git Repo
We start by creating a [GitHub](https://github.com/) repository for our Sculpin site and generator.

We're naming ours sculpin-demo and we'll skip adding files to the repository until after its creation, as this can sometimes create problems (The README, license and gitignore files).

![netlify0x_createnewrepo.png](/uploads/netlify0x_createnewrepo.png)

Once the repository has been named and created we'll return to local environment.

#### 2. Prepare the Site for GitHub
We need to set the local site up as a git repository with the `git init` command, then we'll add all the files and subdirectories to the repository with the `git add .` command and finally stage them for the first commit with the `git commit -m 'First commit'` command.

In quick succession in a terminal window:

```
cd my-sculpin-site
git init
git add .
git commit -m 'First commit'
```

Once the files are committed, it's time to connect with the GitHub repository online.

#### 3. Get & Add Remote URL
![a1_remotegithuburl.png](/uploads/a1_remotegithuburl.png)

We return to the GitHub repository created earlier and retrieve the URL for the remote repository, since this is where our local repository will be pushed.
Either copy paste the whole command or use the button as depicted above, to copy just the path to your clipboard.
Return to the Terminal window and paste the remote repository URL inside the following line (instead of My-Repository-URL):

```
git remote add origin My-Repository-URL
```

Optional: To check that it's set up correctly, you can use the following command:

```
git remote -v
```

If it looks all right, we're ready to push the files.

#### 4. Push to GitHub.
The final task before we're done setting up, is to use the push command with git, as in the following line in Terminal:

```
git push -u origin master
```

All your files will be copied to your online repository. Once it's done, take a look at the repository online to check if everything looks correct.

It's time to connect it with netlify.

### Connect with netlify
<a id="netlifystart"></a>

Creating a new site on netlify is intuitive and once you’ve created an account and logged in, you’ll be taken to https://app.netlify.com/sites.

#### Step 1: Add Your New Site
![Netlify New Site](/uploads/newsitebut.png)
Click the *"New Site"* button (as seen above) to get started.

#### Step 2: Link to Your GitHub
Clicking *“New Site”* brings you to this screen:
![Link to GitHub](/uploads/createsite.png)
When you push to GitHub, netlify does all the work. No more wasting time on manual deploying of updates or changes!

Since we're hosting the site assets on GitHub, we’ll need to link netlify with GitHub. Click the button *“Link to GitHub”*.

#### Step 3: Authorize netlify
You can skip this step, if you already have an account with netlify set up to automatically login!

You will be asked to provide your GitHub login details:
![GitHub Login](/uploads/githublogin.png)

We need to let netlify and GitHub talk to each other, so review the permissions and then click authorize application.
![Authorize netlify](/uploads/authorization.png)

Like it says in the image above on the right, netlify doesn’t store your GitHub access token on our servers! 

If you’d like to know more about the permissions netlify requests and why we need them, you can check out our [documentation on GitHub Permissions](https://docs.GitHubNetlify.com/github-permissions/). 

#### Step 4: Choose Your Repo
<PICTURE - ADD choose repo sculpin-demo PIC>
Once you're connected to GitHub, netlify will show you a list of your GitHub repositories, as seen above.
For the purpose of this tutorial we'll select the *“sculpin-demo”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
Fill in the configuration settings as seen in the screen shot below:
<PICTURE - ADD sculpin settings PIC>

Click the *'Save'* button and watch the magic unfold.

#### Step 6: Build Your Site
<PICTURE - ADD site building PIC>
Once you click save, netlify will step in and take over, though it will let you know what's happening along the way. This may take a few minutes, so take a break and netlify will do the rest, while you watch the progress.

#### Step 7: The End
That's it.

Once netlify has build your site, it will assign a random name to it and you'll be presented with the site and the control panel for the site, ready for additional cusomizing.
<PICTURE - ADD DONE PIC>

You can change the site to be private and password protected, which is great for work in progress. You can also assign a custom domain name and it's easy to change settings for your site in general and gives you a good quick overview.

You can see our demo site [here](http://sculpin.netlify.com/) and the GitHub project for the demo site [here](https://github.com/jimmilee/sculpin-demo).


