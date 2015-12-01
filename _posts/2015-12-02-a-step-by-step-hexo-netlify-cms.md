---
title: "A step-by-step: Hexo Netlify CMS"
author: Jimmi Lee
image: null
short_title: Hexo Netlify CMS Template
description: "A short tutorial about setting up Netlify's hexo-netlify-cms template"
thumbnail: /uploads/hexologo.jpg
cmsUserSlug: ""
date: 2015-12-02 
tags: null
---

# Hexo + netlify CMS

This is a simple example of how to integrate netlify CMS with a hexo based site.

It's based on Brian Rinaldi's great [Static Site Samples](https://github.com/remotesynth/Static-Site-Samples) and meant as a simple example of how to hook netlify CMS up with a hexo based site.

## Setting up

Make sure to install the [netlify-git-api](https://github.com/netlify/netlify-git-api) before you start.

Then:

```
git clone https://github.com/netlify-templates/hexo-cms-example.git
cd hexo-cms-example
netlify-git-api users add
netlify-git-api serve
```

Open a separate terminal window and run:

```
npm install

hexo server
```

## Using

Visit [localhost:4000](http://localhost:4000/) to browser the site.

Visit [localhost:4000/admin](http://localhost:4000/admin) to use the CMS.

To run against the GitHub API in production, edit the production backend settings for `admin/index.ejs` with the correct repository and branch.

Then run:

```
CMS_ENV=production hexo server
```



*******************************************
### **Welcome to Netlify CMS**
If you're not new to the world of Static Site Generators, chances are you've heard of Hexo, which is one of the top five most popular web site generators as of writing.

Hexo prides itself on being not only fast and simple, but also easy to write, while having plenty of extensibility. Hexo is powered by the nodejs framework and in this article we'll look at how to set up your very own Hexo Netlify CMS Template, from getting a clone online, to connecting to Netlify and beyond.

If you're not interested in the template, but soley in setting up Hexo with continous deployment on Netlify, please see [this informative article](https://www.netlify.com/blog/2015/10/26/a-step-by-step-guide-hexo-on-netlify) by Mr. Aaron Autrand and otherwise continue reading.

*Please note that this guide assumes you have Ruby, git and nodejs installed.*

### **Deploying Locally**
We'll start by preparing the netlify-git-api CLI tool to enable us to deploy locally and then we'll clone the hexo-netlify-cms template repository to our local environment and set it up.

#### 1. The netlify-git-api CLI tool.
Browse to the [netlify-git-api page](https://github.com/netlify/netlify-git-api/releases) and download the relevant version of the tool.  
As I'm demonstrating this on a Linux machine, I will download the *linux.zip* file, but if you're using Apple Mac's OSX, you should download and unpack the *osx.zip* and if you're using a Microsoft OS, download the *windows.zip* file.

Once the download is done, unpack the netlify-git-api executable from the zipped file and place it in your PATH. There are many methods for doing so and they differ somewhat depending on your operating system. However, it can usually be done easily through the graphical user interface. 

We will use the following commands in a terminal window (the Command Prompt in a Microsoft OS):
```
$ cd 'downloads'
$ unzip linux.zip 
$ cd linux
$ sudo mv netlify-git-api '/usr/local/bin'
```
We enter the downloads folder (substitute with the location of your download), use the `unzip` command to unpack the file, then we enter the new directory created by unpacking and finally we move the file to a directory that is in the PATH, making it easy to invoke from the terminal.

If you're unsure of where to move the file, you can run the following command to see which directories are in the PATH on your computer:
```
$ echo $PATH
```
*For convenience sake, keep the terminal window/command prompt open throughout this guide.*

#### 2. Fork and Clone the Template.
We'll begin by forking our own copy of the [hexo-netlify-cms template](https://github.com/netlify-templates/hexo-cms-example) and then we rename it - we simply named ours hexo-netlify-cms-demo.

To make a local clone first we need to get the remote GitHub URL from the repository we created. The button looks like this: 
![pelicanlinkbutton.png](/uploads/pelicanlinkbutton.png)

The commands below first take us to the location where we want to put our new Pelican site (use `cd my-site-folder`) and the second command uses git to create the clone:
```
$ cd '/home/username/Sites'
$ git clone https://github.com/github_account/hexo-netlify-cms-demo.git
```
Substitute *https://github.com/github_account/hexo-netlify-cms-demo.git* with your repository's URL and your GitHub account.

Note that you should NOT create a folder for the project, as it comes inside a folder structure already. 

#### 3. Setup the Netlify CMS server.
To start the Netlify CMS server, we need to add users by running the following command for each user we wish to add to the system (you will be asked for an email, a name and a password):
```
$ netlify-git-api users add
```
Alternatively you can create a user, including the information necessary, in a one liner like this:
```
$ netlify-git-api users add --name='User Name' --email=my@email.com --password=mypassword
```
You need to create at least one user, to be able to test the system.

To start the Netlify CMS server, we then use the following command:
```
$ netlify-git-api serve
```
***Keep the Terminal Window/Command Prompt open to keep the server running!***

#### 4. Install the Hexo CLI.
Open up a new Terminal Window/Command Prompt to the site root (cd hexo-netlify-cms-demo in our example) and install the hexo client

To install Hexo, make sure you already have npm and nodejs installed and then run the following command:
```
$ npm install -g hexo-cli
```
Once the application has finished installing, it's time to test it out.

#### 5. Test Hexo and Netlify CMS.
Open up [localhost:4000](https://localhost:4000) to browse the site.

Next, try out the Netlify CMS system, by visiting [localhost:4000/admin](https://localhost:4000/admin)localhost:4000/admin).

As is obvious (if everything is working as it should), this template comes with a bit of extra content, as it is based on Brian Rinaldi's great [Static Site Samples](https://github.com/remotesynth/Static-Site-Samples). This makes it easier to instantly get an idea of how it will look, when it's up and running with actual content and default theme. 

### **Deploy to Production Environment**

#### 1. Add & Commit Files. 
Optional: To check that our local environment is set up correctly and will push the files to the correct repository we can use this command:
```
$ git remote -v
```
We need to add the new files from our local directory to our repository with the following line in Terminal/Command Prompt:
```
$ git add .
```
Next we'll commit the files we just staged in our local repository by entering the following line:
```
$ git commit -m 'First commit'
```

#### 2. Push to GitHub.
The final task before we're done setting up and ready for Netlify, is to use the push command with git, as in the following line in Terminal/Command prompt:
```
$ git push -u origin master
```
Once it's done uploading the files (pushing them to GitHub), take a look at the repository online to check if everything looks correct.

It's time to connect with Netlify.

### **Connect to Netlify**
We're ready to start a new project at Netlify's to host our Pelican Netlify CMS template. 

If you haven't made one already, create an account and login at [Netlify](https://www.netlify.com/).

#### 1. Create Site.
Creating a new site on Netlify is intuitive and quick. 

![Netlify New Site](/uploads/newsitebut.png)

Once your account is created and you're logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button to get started (depicted above).

Next, select *Link to GitHub* and you'll be shown a list of your GitHub repositories, as seen in the screen shot below. We'll select the Pelican repository we made earlier.
![createsitepelican.png](/uploads/createsitepelican.png)

#### 2. Configure Build.
You'll notice that Netlify detects the Pelican build command to be `pelican content`, but we'll change that to `make publish` instead, while using the `/output` as Dir, as seen in this screen shot:
![buildpelican.png](/uploads/buildpelican.png)

A few notes on the difference between the two commands, though both will work with Netlify.

The build command `make publish` will generate your site for production using the settings in the `pelicanconf.py` file. The *advantage* of this method is that the make command is built into most POSIX systems and won't require installing anything else to be able to use it. The problem though is that non-POSIX systems such as Windows don't include make and that it can be a bit of a long-haired affair to do so!

The `pelican content` command on the other hand, comes with pelican and will generate your site with any production specific settings and as such, would probably be the more likely candidate in most cases.

#### 3. Build Your Site.
Once you click save, Netlify will step in and take over, while keeping you informed through a live build log, as seen in this screen shot:
![pelicanlivebuildlog.png](/uploads/pelicanlivebuildlog.png)

Taking a short break now might make sense, as the next step may take as much as a few minutes (depending on how much content you've created). Don't worry - Netlify will do the work while you relax.

#### 4. Register new Application.
Open up the [GitHub developer application screen](https://github.com/settings/developers) and select **register a new application**.  
Next fill out the application information as seen in the screen shot below - you can name and describe it however you want, but it is important that you use the exact URL for the Authorization callback like this: `https://api.netlify.com/auth/done`
Use the screen shot below as an example:

![registernewapplication.png](/uploads/registernewapplication.png)

You can disregard choosing an image, though we did, to help distinguish the application.

Once you're done filling out, simply click the green **Register application** button and you will get to the following screen shot (well, it will be similar at least):

![clientidnsecret.png](/uploads/clientidnsecret.png)

What you need to take note of here, is the **Client ID** and the **Client Secret** in the upper right corner. You will need to provide both in the next step!

#### 5. Setup GitHub API Access.
Return to Netlify and the site you just build and in the control panel select the **Access panel**.

This is where we give the GitHub Api access to our site with the application we just registered and you need to enter the **Client ID** and the **Client Secret** from above, as seen in the screen shot below:

![githubaccess.png](/uploads/githubaccess.png)

Simply paste them into the windows where it says *enter Client ID here* and below where it says *enter Client Secret here* and you're good to go.

#### 6: Trying Out Netlify CMS
We tried testing the CMS system locally earlier in this guide and it's virtually the same using it online, you just have to change the address to **https://mysite.netlify.com/admin** (change to the URL of your site) to access the CMS system and then log in with GitHub, since we're using GitHub auth when working online.

This screen shot depicts our CMS system with Pelican, after logging in:
![pelicannetlifycms.png](/uploads/pelicannetlifycms.png)

As you can see, it takes very little time and effort to get up and running, so give it a try - I'm sure you won't regret it.

This is a simple example of how to integrate netlify CMS with a hexo based site.

It's based on Brian Rinaldi's great [Static Site Samples](https://github.com/remotesynth/Static-Site-Samples) and meant as a simple example of how to hook netlify CMS up with a hexo based site.

## Setting up

Make sure to install the [netlify-git-api](https://github.com/netlify/netlify-git-api) before you start.

Then:

```
git clone https://github.com/netlify-templates/hexo-cms-example.git
cd hexo-cms-example
netlify-git-api users add
netlify-git-api serve
```

Open a separate terminal window and run:

```
npm install

hexo server
```

## Using

Visit [localhost:4000](http://localhost:4000/) to browser the site.

Visit [localhost:4000/admin](http://localhost:4000/admin) to use the CMS.

To run against the GitHub API in production, edit the production backend settings for `admin/index.ejs` with the correct repository and branch.

Then run:

```
CMS_ENV=production hexo server
```



*******************************************
### **Welcome to Netlify CMS**
If you're not new to the world of Static Site Generators, chances are you've heard of Hexo, which is one of the top five most popular web site generators as of writing.

Hexo prides itself on being not only fast and simple, but also easy to write, while having plenty of extensibility. Hexo is powered by the nodejs framework and in this article we'll look at how to set up your very own Hexo Netlify CMS Template, from getting a clone online, to connecting to Netlify and beyond.

If you're not interested in the template, but soley in setting up Hexo with continous deployment on Netlify, please see [this informative article](https://www.netlify.com/blog/2015/10/26/a-step-by-step-guide-hexo-on-netlify) by Mr. Aaron Autrand and otherwise continue reading.

*Please note that this guide assumes you have Ruby, git and nodejs installed.*

### **Deploying Locally**
We'll start by preparing the netlify-git-api CLI tool to enable us to deploy locally and then we'll clone the hexo-netlify-cms template repository to our local environment and set it up.

#### 1. The netlify-git-api CLI tool.
Browse to the [netlify-git-api page](https://github.com/netlify/netlify-git-api/releases) and download the relevant version of the tool.  
As I'm demonstrating this on a Linux machine, I will download the *linux.zip* file, but if you're using Apple Mac's OSX, you should download and unpack the *osx.zip* and if you're using a Microsoft OS, download the *windows.zip* file.

Once the download is done, unpack the netlify-git-api executable from the zipped file and place it in your PATH. There are many methods for doing so and they differ somewhat depending on your operating system. However, it can usually be done easily through the graphical user interface. 

We will use the following commands in a terminal window (the Command Prompt in a Microsoft OS):
```
$ cd 'downloads'
$ unzip linux.zip 
$ cd linux
$ sudo mv netlify-git-api '/usr/local/bin'
```
We enter the downloads folder (substitute with the location of your download), use the `unzip` command to unpack the file, then we enter the new directory created by unpacking and finally we move the file to a directory that is in the PATH, making it easy to invoke from the terminal.

If you're unsure of where to move the file, you can run the following command to see which directories are in the PATH on your computer:
```
$ echo $PATH
```
*For convenience sake, keep the terminal window/command prompt open throughout this guide.*

#### 2. Fork and Clone the Template.
We'll begin by forking our own copy of the [hexo-netlify-cms template](https://github.com/netlify-templates/hexo-cms-example) and then we rename it - we simply named ours hexo-netlify-cms-demo.

To make a local clone first we need to get the remote GitHub URL from the repository we created. The button looks like this: 
![pelicanlinkbutton.png](/uploads/pelicanlinkbutton.png)

The commands below first take us to the location where we want to put our new Pelican site (use `cd my-site-folder`) and the second command uses git to create the clone:
```
$ cd '/home/username/Sites'
$ git clone https://github.com/github_account/hexo-netlify-cms-demo.git
```
Substitute *https://github.com/github_account/hexo-netlify-cms-demo.git* with your repository's URL and your GitHub account.

Note that you should NOT create a folder for the project, as it comes inside a folder structure already. 

#### 3. Setup the Netlify CMS server.
To start the Netlify CMS server, we need to add users by running the following command for each user we wish to add to the system (you will be asked for an email, a name and a password):
```
$ netlify-git-api users add
```
Alternatively you can create a user, including the information necessary, in a one liner like this:
```
$ netlify-git-api users add --name='User Name' --email=my@email.com --password=mypassword
```
You need to create at least one user, to be able to test the system.

To start the Netlify CMS server, we then use the following command:
```
$ netlify-git-api serve
```
***Keep the Terminal Window/Command Prompt open to keep the server running!***

#### 4. Install the Hexo CLI.
Open up a new Terminal Window/Command Prompt to the site root (cd hexo-netlify-cms-demo in our example) and install the hexo client

To install Hexo, make sure you already have npm and nodejs installed and then run the following command:
```
$ npm install -g hexo-cli
```
Once the application has finished installing, it's time to test it out.

#### 5. Test Hexo and Netlify CMS.
Open up [localhost:4000](https://localhost:4000) to browse the site.

Next, try out the Netlify CMS system, by visiting [localhost:4000/admin](https://localhost:4000/admin)localhost:4000/admin).

As is obvious (if everything is working as it should), this template comes with a bit of extra content, as it is based on Brian Rinaldi's great [Static Site Samples](https://github.com/remotesynth/Static-Site-Samples). This makes it easier to instantly get an idea of how it will look, when it's up and running with actual content and default theme. 

### **Deploy to Production Environment**

#### 1. Add & Commit Files. 
Optional: To check that our local environment is set up correctly and will push the files to the correct repository we can use this command:
```
$ git remote -v
```
We need to add the new files from our local directory to our repository with the following line in Terminal/Command Prompt:
```
$ git add .
```
Next we'll commit the files we just staged in our local repository by entering the following line:
```
$ git commit -m 'First commit'
```

#### 2. Push to GitHub.
The final task before we're done setting up and ready for Netlify, is to use the push command with git, as in the following line in Terminal/Command prompt:
```
$ git push -u origin master
```
Once it's done uploading the files (pushing them to GitHub), take a look at the repository online to check if everything looks correct.

It's time to connect with Netlify.

### **Connect to Netlify**
We're ready to start a new project at Netlify's to host our Pelican Netlify CMS template. 

If you haven't made one already, create an account and login at [Netlify](https://www.netlify.com/).

#### 1. Create Site.
Creating a new site on Netlify is intuitive and quick. 

![Netlify New Site](/uploads/newsitebut.png)

Once your account is created and you're logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button to get started (depicted above).

Next, select *Link to GitHub* and you'll be shown a list of your GitHub repositories, as seen in the screen shot below. We'll select the Pelican repository we made earlier.
![createsitepelican.png](/uploads/createsitepelican.png)

#### 2. Configure Build.
You'll notice that Netlify detects the Pelican build command to be `pelican content`, but we'll change that to `make publish` instead, while using the `/output` as Dir, as seen in this screen shot:
![buildpelican.png](/uploads/buildpelican.png)

A few notes on the difference between the two commands, though both will work with Netlify.

The build command `make publish` will generate your site for production using the settings in the `pelicanconf.py` file. The *advantage* of this method is that the make command is built into most POSIX systems and won't require installing anything else to be able to use it. The problem though is that non-POSIX systems such as Windows don't include make and that it can be a bit of a long-haired affair to do so!

The `pelican content` command on the other hand, comes with pelican and will generate your site with any production specific settings and as such, would probably be the more likely candidate in most cases.

#### 3. Build Your Site.
Once you click save, Netlify will step in and take over, while keeping you informed through a live build log, as seen in this screen shot:
![pelicanlivebuildlog.png](/uploads/pelicanlivebuildlog.png)

Taking a short break now might make sense, as the next step may take as much as a few minutes (depending on how much content you've created). Don't worry - Netlify will do the work while you relax.

#### 4. Register new Application.
Open up the [GitHub developer application screen](https://github.com/settings/developers) and select **register a new application**.  
Next fill out the application information as seen in the screen shot below - you can name and describe it however you want, but it is important that you use the exact URL for the Authorization callback like this: `https://api.netlify.com/auth/done`
Use the screen shot below as an example:

![registernewapplication.png](/uploads/registernewapplication.png)

You can disregard choosing an image, though we did, to help distinguish the application.

Once you're done filling out, simply click the green **Register application** button and you will get to the following screen shot (well, it will be similar at least):

![clientidnsecret.png](/uploads/clientidnsecret.png)

What you need to take note of here, is the **Client ID** and the **Client Secret** in the upper right corner. You will need to provide both in the next step!

#### 5. Setup GitHub API Access.
Return to Netlify and the site you just build and in the control panel select the **Access panel**.

This is where we give the GitHub Api access to our site with the application we just registered and you need to enter the **Client ID** and the **Client Secret** from above, as seen in the screen shot below:

![githubaccess.png](/uploads/githubaccess.png)

Simply paste them into the windows where it says *enter Client ID here* and below where it says *enter Client Secret here* and you're good to go.

#### 6: Trying Out Netlify CMS
We tried testing the CMS system locally earlier in this guide and it's virtually the same using it online, you just have to change the address to **https://mysite.netlify.com/admin** (change to the URL of your site) to access the CMS system and then log in with GitHub, since we're using GitHub auth when working online.

This screen shot depicts our CMS system with Pelican, after logging in:
![pelicannetlifycms.png](/uploads/pelicannetlifycms.png)

As you can see, it takes very little time and effort to get up and running, so give it a try - I'm sure you won't regret it.