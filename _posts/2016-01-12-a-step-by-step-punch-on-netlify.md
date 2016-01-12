---
title: "A step-by-step: Punch on netlify"
author: Jimmi Lee
image: null
short_title: "A short guide: Punch on netlify"
description: "A short tutorial on how to set up Punch in continuous deployment on netlify, with assets on GitHub"
thumbnail: /uploads/punch_logo_400p.png
cmsUserSlug: ""
date: 2016-01-12T00:00:00.000Z
tags: null
---

### Welcome to netlify
<INTRO - A BIT ABOUT PUNCH, pro's and cons>
Pro's -> easy to fiddle with Navigation, fast as f... to set up with some default content etc.>

REQUIREMENTS: Node.js (version?)
Node.js with npm using nvm to install link.

<LINKS - to various chapters in guide #netlifystart #githubstart #punchsetup>

### QUICK GUIDE LINUX, OSX, WINDOWs
<REWRITE SIMILAR: If you want to get a head start, you can download, install and setup from the terminal (or command prompt) in this quick start guide. However, if you need a more detailed introduction and guide, simply scroll down to [here](#inkpapersetup).>

#### Quick Install Punch - Linux:

```
npm install -g punch
punch setup my-punch-site
cd my-punch-site
punch s
```

#### Quick Install Punch - OSX:

```
OSX terminal install commands
```

#### Quick Install Punch - Windows:

```
Windows command prompt install commands
```

Provided you got the requirements sorted, the installation and setup of punch and a punch site can be done with a few short commands in terminal, as seen in the above examples. Simply choose the guide that corresponds with your operating system and substitute my-punch-site with the name of your site.

Once you've entered the last command `punch s`, leave the window open, as it will run a web server you can test your site against. Just open your browser and visit [http://localhost:9009](http://localhost:9009) and see for yourself.

It's recommended to take the quick hands-on tutorial, as it will quickly cover the basics and get the ball running, but it's not a prerequisite for this guide.

Please note that while we've included a quick install guide for the Windows OS and tested this, the main guide was only tested on Linux and OSX and it will not work without alterations if you are using a Windows OS!

### Install & Setup Punch
<a id="punchsetup"></a>
<Short intro with recap of what we'll do here>

<Link to repo for site with folder structure etc.>

#### 1. Install Punch
In the terminal, enter the following command:

```
npm install -g punch 
```

This should install Punch as a global npm package, at least if you're using nvm to control and handle your node.js versions. 

If you're not using nvm not and if the command hasn't got the right privileges, you will need to add sudo to the front like this: `sudo npm install -g punch`

#### 2. Create Site
Let's create a site using the punch setup command in a terminal window like this:

```
punch setup my-punch-site
```

Easy enough.

#### 3. Folder Tree
Punch takes the whole separation of content from presentation concept very seriously, which is of course a good thing, as it helps divide the work in a sensible manner.
For this purpose the two are divided into two folders named contents and templates and as the names imply, one is for the content, such as your articles, posts and images and the other is for all the presentational elements, such as the layouts we'll introduce in the next step.

In the side by side pictures shown below, we have the folder structure created by punch on the left, with the somewhat changed folder structure we ended up with on the right:

<FOLDERS TREE picture - Default folders = side by side with THIS sites Finished folder tree>
<LINK to GitHub repo with this finished folder tree?>

#### 4. Edit Layout
The layouts define how we present the content and in punch the default template engine format is [Mustache](http://mustache.github.io/) and though you can optionally change to another template engine, such as [Handlebars](https://github.com/laktek/punch-engine-handlebars), we simply opted to stay with Mustache and give it a try.

Edit the file named *_layout.mustache* inside the template folder - this is the main layout and we use it for everything in our guide.

Fill it in like this:

```
{{> header }}

        <div role="main">
            {% raw %}{{{content}}}{% endraw %} 
        </div>

{{> footer }}
```

It's pretty simple really. We introduce partials, which follow the handlebars formula with `{{> partial-name }}` to insert a partial in the layout. In our example the header will be printed instead of the `{{> header }}` code and the footer will be printed instead of the `{{> footer }}` code.

Well, these partials don't make themselves, so let's move on to creating partials with the punch site generator.

#### 5. Partials
<ADD PARTIALS - Layout files, other than the _layout.mustache, that has a name starting with an underscore are known as partial layouts. You can include them in other layouts, using the following syntax - {{> header }}.>

The header file:

```
        # Insert header layout here
```

The footer file:

```
        # Insert footer layout here
```

#### 6. Create Layout
When using Punch, it's important to know a few things about how Punch works internally.

The *_layout.mustache* file is the deault layout for all the pages of the site!
However, if there's a file with the name of a given page of a site, then that layout would be used before the default layout. E.g. if I made an *about.mustache* file and if there was an about file in the content, then that file would use the *about.mustache* layout, since they have the same name.

We'll illustrate this quickly. Copy and rename *_layout.mustache* to *index.mustache*, so we can create a layout for our landing page which is different from the rest of our pages.

Open the newly created *index.mustache* file and fill it in like this:

```
{{> header }}

        <div role="main">
            <img src="punch_banner.png">
            {{{content}}} 
        </div>

{{> footer }}
```

What's that? It's identical to the default file?  Well yes, the only change is the addition of the *punch_banner.png* image to show the world that this site was made with punch.
For this to work properly, you'll need to add the *punch_banner.png* image to the `content/image` folder.

#### 7. Title & Navigation
As mentioned in the intro, Punch is one of the few site generators that offer an incredibly easy way to set up a simple navigation bar, right out of the box, by simply editing the `share.jason` file in the contents folder.

We filled in our `share.jason` file like this, changing the title, the footer text and adding a navigation bar, in that order:

```
{
   "site-title": "my-punch-site",
   "footer-text": "Built with <a href=\"http://laktek.github.com/punch\">Punch</a> with assets on <a href=\"http://laktek.github.com/punch\">Punch</a> deployed to <a href=\"https://www.netlify.com\">netlify</a>",
   "navbar": [
      { "label": "Home", "href": "/" },
      { "label": "Blog", "href": "/blog" },
      { "label": "About", "href": "/about" }
   ]
}
```

Again it's kept fairly simple. Any property defined in this file, is made available to all pages of the site, which can come in handy if you need some globally shared variables.  

The navigation bar is very easy to set up, with a number of labels with a name, an <HREF> and a path and we've added 3 options, which we will quickly set up.

#### 8. Create Blog Layout
We'll create the blog layout and populate it with articles.

Open the contents folder and create a directory named `_blog`, then create the *blog.mustache* file in the layouts folder and finally open the newly created file and fill it in like this:

```
{{> header }}

        <div role="main">
            //TITLE HERE
            //CYCLE THROUGH BLOG POSTS HERE
            {{{content}}} 
        </div>

{{> footer }}
```

<OBS: If you want to change the markup used for the site title and navbar, you can do it by editing templates/_header.mustache.> 

#### 9. Create Content
To see if our new blog page works properly, we have to create some articles for it.
Write some new or copy paste some old articles and put them in the <WHAT FOLDER???>, two or three will do.
Use the following frontmatter and fill in the content with whatever markdown you wish:

```
---
YAML STUFF
---
MARKDOWN CONTENT HERE
```

#### 10. Edit configuration
Open up the content\config.json file and take a look
<MAKE AN EXAMPLE SETUP>

#### 11. Build it and smile :)
If you've kept the punch server window open (the terminal window in which you ran the `punch s` command), simply refresh the browser window.

### Pushing Punch to GitHub
<a id="githubstart"></a>

We want to set up an online GitHub repository with our local environment and push our local files to this repository. Next, we'll connect netlify to the repository for our automatic build (i.e. whenever you push to GitHub, netlify will rebuild your site).

#### 1. Create your Git Repo
We start by creating a [GitHub](https://github.com/) repository for our Punch site and generator.

We're naming ours punch-demo and we'll skip adding files to the repository until after its creation, as this can sometimes create problems (The README, license and gitignore files).

![netlify0x_createnewrepo.png](/uploads/netlify0x_createnewrepo.png)

Once the repository has been named and created we'll return to local environment.

#### 2. Prepare the Site for GitHub
We need to set the local site up as a git repository with the `git init` command, then we'll add all the files and subdirectories to the repository with the `git add .` command and finally stage them for the first commit with the `git commit -m 'First commit'` command.

In quick succession in a terminal window:

```
cd my-punch-site
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
<PICTURE - ADD choose repo punch-demo PIC>
Once you're connected to GitHub, netlify will show you a list of your GitHub repositories, as seen above.
For the purpose of this tutorial we'll select the *“punch-demo”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
Fill in the configuration settings as seen in the screen shot below:
<PICTURE - ADD punch settings PIC>

Click the *'Save'* button and watch the magic unfold.

#### Step 6: Build Your Site
<PICTURE - ADD site building PIC>
Once you click save, netlify will step in and take over, though it will let you know what's happening along the way. This may take a few minutes, so take a break and netlify will do the rest, while you watch the progress.

#### Step 7: The End
That's it.

Once netlify has build your site, it will assign a random name to it and you'll be presented with the site and the control panel for the site, ready for additional cusomizing.
<PICTURE - ADD DONE PIC>

You can change the site to be private and password protected, which is great for work in progress. You can also assign a custom domain name and it's easy to change settings for your site in general and gives you a good quick overview.

You can see our demo site [here](http://punch.netlify.com/) and the GitHub project for the demo site [here](https://github.com/jimmilee/punch-demo).

