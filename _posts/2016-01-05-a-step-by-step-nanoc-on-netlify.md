---
title: "A step-by-step: Nanoc on Netlify"
author: Jimmi Lee
image: null
short_title: Nanoc on Netlify
description: A short tutorial about getting Nanoc up on Netlify in continuous deployment.
thumbnail: /uploads/nanoc_logo.png
cmsUserSlug: ""
date: 2016-01-05T00:00:00.000Z
tags: null
---

### Welcome to Netlify
Up until recently I had never even heard of Nanoc, but I stumbled upon this gem of gems (pun intended) when searching for a well documented static site generator with on-going support and a live community.
Nanoc has both in abundance and after checking out their up to date and aesthetically pleasing documentation, I quickly grew to like this extremely easy to use static site generator. 

In this little guide, we will set up and check out Nanoc and once we're up and running locally, we will push the project to GitHub and deploy on Netlify with continuous deployment.

If you already have a Nanoc repository forked on GitHub and only wish to connect to Netlify, you can skip the bulk of this guide and start [here](#netlifystart) instead.

On the other hand, if you have Nanoc running locally, but need some guidance getting it on GitHub, before you deploy to Netlify, start [here](#githubstart) instead.

Finally, if you want to try out our small Nanoc tutorial, before linking up with GitHub and Netlify, simply continue this guide.  

***Please note that this guide assumes you have Ruby, RubyGems and Bundler installed !!!***

For information about installing and handling Ruby with Bundler please see [this documentation](http://bundler.io/).

### Setup Nanoc
<Bla. bla bla - we will do this and that>
Instead of installing Nanoc gem by gem, we'll setup the site with bundler and a gemfile, to specify what gems we want to install, all in one place.

#### 1. Setup gemfile
Before you compile the site or do anything, make sure you have Bundler installed. If you don't, it's `gem install bundler` in a terminal window from the root of your site.

Let bundler initialize the site with the following command in terminal, from the root of your Nanoc site folder (cd my-nanoc-site):

```
bundle init
```

This will create a gemile, in which we let bundler know which gems and what versions of these gems we wish to install with our Nanoc site.

To install the nanoc gem as well, we need to add it to our gemfile, so open the gemfile found in the root of your nanoc site and add the following lines:

```
gem 'nanoc', '~> 4.0'
gem 'kramdown'
gem 'adsf'
```

This will ensure that nanoc version 4.0 is installed along with kramdown and finally adsf, which we need to view our site live (it's basically to enable the `bundle exec nanoc view` command).

#### 2. Compile the Site
It's quite possible to compile without bundler, using e.g. the `nanoc compile` or even the short hand notation, simpy `nanoc` and the site will be build. However, it is recommended that one uses Bundler and that is exactly what we intend to do, following up on the last step.

From terminal, again from your site root, use this command:

```
bundle exec nanoc
```

That's it.
It will build the site, bar any errors and let you know how quick it all went down.

If you want to see how pretty it is, run this command:

```
nanoc view
```

This will open the site up for view in your local browser [here](http://localhost:3000/).

Optional: check if Nanoc is installed properly and if so, what version by using the `--version` flag like this:

```
nanoc --version
```

#### 3. Check the nanoc.yaml file

#### 4. Edit Rules file
For our kramdown gem to work properly, we need to let Nanoc know we changed the default language from HTML to markdown. To do this we need to open the Rules file found in the root of your Nanoc site and then we need to edit the compilation rules found herein, to take markdown files.

Did that sound complicated?  Don't worry, cause it's really not! Editing compile and route rules in a Rules file is actually quite easy, but on top of this, the people behind Nanoc have anticipated our switch from HTML to Markdown and thus in our Rules file we find the compile rule for Markdown using the kramdown filter  already written and just commented out. 

Normally we would also need to set up a route rule for the .md or markdown files, but again the oracles behind Nanoc have anticipated my move and the markdown files are already added to one of the existing route rules.

The edited Rules file we ended up with, after the comments have been taken out:

```
#!/usr/bin/env ruby

compile '/**/*.html' do
  layout '/default.*'
end

compile '/**/*.md' do
  filter :kramdown
  layout '/default.*'
end

route '/**/*.{html,md}' do
  if item.identifier =~ '/index.*'
    '/index.html'
  else
    item.identifier.without_ext + '/index.html'
  end
end

compile '/**/*' do
  write item.identifier.to_s
end

layout '/**/*', :erb
```

If you're using kramdown like us, simply used the above in your Rules file and if you're using HTML, there's nothing to edit. However, if you choose a third option, check out Nanoc's documentation on rules [here](http://nanoc.ws/doc/rules/)

#### 5. Create, Compile & View Nanoc Site
To create your Nanoc site, use the following code in terminal (substitute my-site-name with the name of your choice):

```
nanoc create-site my-site-name
cd my-site-name
nanoc compile
nanoc view 
```

The commands above will create your Nanoc site, enter your site folder, build your site and offer it up for view at [http://localhost:3000/](http://localhost:3000/), in that order from the top and down.

As is obvious, Nanoc is lightning fast and incredibly easy to get up and running with some basic content, as it comes with a file structure with some rudimentary content pre-installed.

#### 6. Under the Hood
Let's take a look at what's under the hood of this Nanoc site. First take a look at the folder structure, as depicted in the illustration below, the files and directories created are as follows:

![nanoc_tree.png](/uploads/nanoc_tree.png)

In the file and folder tree above, there are some distinct folders and to create content and customize the layout, it's important to know what goes where and why!

In Nanoc we use the term layouts instead of templates and these all go in the **layouts folder**.

The content we're creating goes in the **content folder** and here you'll find the landing page and a stylesheet, ready for editing.

Then there's the **lib folder**, which contains custom Ruby code.

Of the files its worth noting that **nanoc.yaml** contains site-wide configuration details and that the **Rules** file is used by Ruby to describe how pages and assests will be processed.

#### 7. Edit Landing Page
To distinguish our new basic Nanoc site, we'll start by editing the two files it comes with as default. We take the *index.html* file and change its extension to reflect that we're using markdown instead of HTML and it becomes *index.md*. In the content I remove any HTML tags and instead I insert some sample markdown text content and change its title. Take note that this file only contains the content of the page and none of the layout.

I'll fill the index.md file in as seen below and I suggest you do something similar. The tile in YAML front matter is important, but the text outside the YAML front matter you can fill in as you want:

```
---
title: Nanoc Demo Site
---

# Nanoc on Netlify
This page is mainly created to demonstrate a basic Nanoc site, with assets hosted on GitHub using Netlify to deploy in continuous deployment.

We'll run some font and layout tests...

**This font is Bold.**

*This font is Italic.*

***This font is Bold and Italic.***

## Headline Title Two
I wonder if the title above will render in the proper size and font.

### Headline Title Three
I wonder if the title above will render in the proper size and font.

#### Headline Title Four
I wonder if the title above will render in the proper size and font.
```

As you can see we're simply adding sample text to check the format and layouts of the site, as the next stop is - you guessed it, we'll fiddle with the layout.

#### 8. Edit Layout
We'll follow the advice left for us in the original landing page and change the layout from the bland default color scheme and fonts to something new and refreshing.

The *default.html* file in the layouts folder is where you can set up the layout of your page, using HTML and eRuby instructions. Nanoc has build in support for Haml and Mustache as well and it's possible to add support for other layout engines rather easily using filters (as we did with markdown in the Rules file earlier).

```
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>A Brand New Nanoc Site - <%= @item[:title] %></title>
    <link rel="stylesheet" href="/stylesheet.css">

    <!-- you don't need to keep this, but it's cool for stats! -->
    <meta name="generator" content="Nanoc <%= Nanoc::VERSION %>">
  </head>
  <body>
    <div id="main">
      <%= yield %>
    </div>
    <div id="sidebar">
      <h2>Netlify</h2>
      <ul>
        <li><a href="https://www.netlify.com/">Home</a></li>
        <li><a href="https://www.netlify.com/documentation/">Documentation</a></li>
        <li><a href="https://www.netlify.com/Blog/">Blog</a></li>
      </ul>
      <h2>Nanoc</h2>
      <ul>
        <li><a href="http://nanoc.ws//">Home</a></li>
        <li><a href="http://nanoc.ws/doc/">Documentation</a></li>
        <li><a href="http://nanoc.ws/community/">Community</a></li>
      </ul>
      <h2>GitHub</h2>
      <ul>
        <li><a href="https://github.com/">Home</a></li>
        <li><a href="https://help.github.com/">Help</a></li>
      </ul>
    </div>
  </body>
</html>
```

You can either leave the *default.html* alone and check out the basic site (which comes with additional links and documentaion) or you try something out yourselves or use our slightly modified *default.html* content as seen above.

We've just changed the sidebar links to link to Netlify, Nanoc and GitHub, but feel free yo try out some eRuby or one of the other layout languages.

If you want more information about layouts in Nanoc, head over to Nanoc's excellent documentation on layouts and partials [here](http://nanoc.ws/doc/items-and-layouts/#layouts).

#### 9. Final Build



We're ready to setup the local site with an online GitHub repository.

### Setup your GitHub Repository
<a id="githubstart"></a>

We'll setup a GitHub repository to hold our assets, before we connect and deploy on Netlify.

#### 1. Create your Git Repo
Start by opening up [GitHub](https://github.com/) and create a new repository for your Nanoc site.

We're naming our site nanoc-demo and we'll skip adding files to the repository until after its creation, as this can sometimes create problems (The README, license and gitignore files).

![netlify0x_createnewrepo.png](/uploads/netlify0x_createnewrepo.png)

As you'll see once you create the repository, GitHub provides very good documentation on what to do next.


#### 2. Initialize, Add & Commit
We'll initialize the local directory as a git repository with the following command:
Before we push (copy the files to our new online repository) the files online, we need to prep our local site and you need to have git installed for this.

Use the following commands in the root of the Nanoc site (cd my-site-folder):

```
git init
git add .
git commit -m 'First commit'

```

The above initializes the site as a git repository with `git init`, then adds all the files in the directory to the repository and stages them for the first commit with `git add .` and finally it commits all these files with the last command `git commit -m 'First commit'`.

#### 3. Get & Add Remote URL
To let our local git repository know where to push these files to, we need to give it the remote URL of our remote repository on GitHub.
This URL can be found under the settings and you need to use it with the following command in terminal (substitute My-Repository-URL with your actual URL):

```
git remote add origin My-Repository-URL
```

Optional: To check which online repository you're working with, you can use the following command:

```
git remote -v
```

#### 4. Push to GitHub.
To do the actual moving after staging and committing, we'll need the push command. From the root of your Nanoc site enter it like this in terminal:

```
git push -u origin master
```

All your files will be copied by git to your online repository. Once it's finished, take a look at the repository online to check if everything went according to plan.

Now we're ready to connect with Netlify.

### Connecting to Netlify
<a id="netlifystart"></a>
We want to connect our GitHub repository with Netlify, so that Netlify can build the site, whenever we push changes to our online repository - this is what's meant with continuous deployment - as soon as you've pushed changes to GitHub, Netlify will rebuild your site, to reflect these changes.

If you haven't got a [Netlify account](https://www.netlify.com/) already, head over and make one - it's completely free of charge.

#### Step 1: Add Your New Site
Click the **"New Site"** button to get started.

![Netlify New Site](/uploads/newsitebut.png)

#### Step 2: Link to Your GitHub
Next you'll be brought to this screen, where you can choose between manual deploy or linking to GitHub or Bitbucket - we'll link with GitHub for this demonstration:
![Link to GitHub](/uploads/createsite.png)
When you push to GitHub, Netlify does all the work. No more wasting time on manual deploying of updates or changes!

To link Netlify with GitHub click the button **“Link to GitHub”**.

#### Step 3: Authorize Netlify
You can skip this step or rather it will be skipped automatically, if you already have an account with Netlify set up to automatically login!

If not, you'll be asked to provide your GitHub login details:
![GitHub Login](/uploads/githublogin.png)

We need to let Netlify and GitHub talk to each other, so review the permissions and then click authorize application.
![Authorize Netlify](/uploads/authorization.png)

Like stated in the image above on the right, Netlify doesn’t store your GitHub access token on our servers! 

If you’d like to know more about the permissions Netlify requests and why, you can check out our [documentation on GitHub Permissions](https://docs.GitHubNetlify.com/github-permissions/). 

#### Step 4: Choose Your Repo
Once you've connected Netlify with GitHub, you will be shown a list of your GitHub repositories, as seen below.
<INSERT PIC - Choose NANOC Repo>
For the purpose of this tutorial we'll select the *“nanoc-demo”* repo we just pushed to GitHub. 

#### Step 5: Configure Your Settings
Fill in the configuration settings as seen in the screen shot below:
<INSERT PIC - Configure NANOC Build>

Click the *'Save'* button and watch the magic unfold.

#### Step 6: Build Your Site
<INSERT PIC - NANOC building>
The first time, assuming you haven't added copious amounts of content, Netlify will build your Nanoc site very quickly. A console will let you know what's happening along the way. If you don't want to wait, simply do something else and you can always return and check the log file later, since Netlify will keep the log of each build.

#### Step 7: The End
That's all there is to it.

Once Netlify has build your site, it will assign a random name to it and you'll be presented with the site and the control panel for the site, ready for additional cusomizing.
<INSERT PIC - NANOC done>

You can change the site to be private and password protected, which is great for work in progress. You can also assign a custom domain name and it's easy to change settings for your site in general and gives you a good quick overview.

You can see our demo site [here](http://nanoc-demo.netlify.com/) and the GitHub repository for our demo site [here](https://github.com/JimmiLee/nanoc-demo).