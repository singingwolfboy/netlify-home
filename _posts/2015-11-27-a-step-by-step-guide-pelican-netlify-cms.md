---
title: "A step-by-step guide: Pelican Netlify CMS"
author: Jimmi Lee
image: null
short_title: The Pelican Netlify CMS Template
description: A short guide on how to set up your very own Pelican Netlify CMS Template.
thumbnail: /uploads/pelicanthumb.png
cmsUserSlug: ""
date: 2015-11-27T00:00:00.000Z
tags: null
---

### **Welcome to Netlify CMS**
While static site generators with CMS capability may be a brand new thing, we *did* cover Netlify CMS previously, with the Jekyll version of our templates [here](https://www.netlify.com/blog/2015/11/6/a-step-by-step-guide-jekyll-netlify-cms) and today we'll take a look at how to set up our *pelican-netlify-cms* template in much the same manner.

If you merely want to set up Pelican with continous deployment on Netlify, check out [this splendid article](https://www.netlify.com/blog/2015/11/6/a-step-by-step-guide-pelican-on-netlify) by Mr. Aaron Autrand and otherwise keep reading.

*Please note that this guide assumes you have virtualenv, Ruby, git and bundle installed*

### **Getting the Pelican Netlify CMS Template**
We'll start by preparing the netlify-git-api CLI tool and then we'll clone the pelican-netlify-cms template repository to our local environment and set it all up.

#### 1. The netlify-git-api CLI tool.
Browse to the [netlify-git-api page](https://github.com/netlify/netlify-git-api/releases) and download the relevant version of the tool.  

E.g. as I'm demonstrating this on Ubuntu, I will download the *linux.zip* file.

Once the download is done, unpack the netlify-git-api executable and place it in your PATH. The methods for doing this are numerous and differ slightly depending on your operating system, but we used the following commands in Ubuntu, after using the GUI to unpack the file into our download folder and opening a terminal window (or the Command Prompt in a Microsoft OS):
```
$ cd 'my-downloads'
$ sudo mv netlify-git-api '/usr/local/bin'
```
First we cd into the downloads folder and next we move the netlify-git-api executable to a folder that is in the PATH, so that it can be invoked easily from the terminal.

If you're unsure of where to move the file, you can run the following command to see which directories are in the PATH on your computer:
```
$ echo $PATH
```
*For convenience sake, keep the terminal window/command prompt open throughout this guide.*

#### 2. Fork and Clone the Template.
First we need to fork our own copy of the [pelican-netlify-cms template](https://github.com/netlify-templates/pelican-netlify-cms) and then rename it - we simply named ours Pelican.

Second, to make a local clone first we need to get the remote GitHub URL (it will look like https://github.com/AccountName/RepoName.git or similar) from the Pelican repo we just made. The button looks like this (or similar): 
![pelicanlinkbutton.png](/uploads/pelicanlinkbutton.png)

The commands below first take us to the location where we want to put our new Pelican site (use `cd my-site-folder`) and the second command uses git to create the clone:
```
$ cd '/home/AlcoholiO/Sites'
$ git clone https://github.com/AlcoholiO/Pelican.git
```
Substitute *https://github.com/AlcoholiO/Pelican.git* with your repository's URL.

Note that you should NOT create a folder for the project, as it comes inside a folder structure. 

#### 3. Setup the Netlify CMS server.
To start the Netlify CMS server, we need to run the following command for each user we wish to add to the system (you will be asked for an email, a name and a password):
```
$ netlify-git-api users add
```
Alternatively you can create a user, including the information necessary, in a one liner like this:
```
$ netlify-git-api users add --name='User Name' --email=my@email.com --password=mypassword
```
You need to create at least one user, to be able to test the system and make sure the email is in a valid format, as in the example above (something@emailprovider.com).

To start the Netlify CMS server, we then use the following command:
```
$ netlify-git-api serve
```
***Keep the Terminal Window/Command Prompt open to keep the server running!***

Before we can test the system there's a few preparatory measures to be made to our Pelican site, so open up a new terminal window (do not use the one that's running the server) and enter the following commands, one by one (you can ommit the comments):
```
$ cd Pelican   
$ virtualenv pelican-env   
$ source pelican-env/bin/activate   
$ pip install -r requirements.txt
$ make devserver
```
In the first line we simply enter our new local repository's directory with the good old `cd` command.
In the second line we use `virtualenv` to create an isolated Python environment for our site (`sudo apt-get install virtualenv` if you haven't already got it installed), then we activate/enter this environment in the third line and in the fourth line we install various requirements, before starting a devserver, which will run Pelican in regeneration mode as well as serve the output at *http://localhost:8000*.

#### 4. Test Pelican and Netlify CMS.
Provided all the requirements installed as they should and that the server is running, we can now enjoy the fruits of our hard labour.
To see the beautiful Pelican site, open up a browser at [localhost:8000](http://localhost:8000) and then try out the Netlify CMS system at [localhost:8000/admin](http://localhost:8000/admin) with the user account you made earlier.

### **Deploy to Production Environment.**
So far so good.
It's time we push this repository to GitHub and it's important that you do so to a GitHub repository you own! 

<INSERT PUSH TO GITHUB COMMANDS>

#### 1. Connect to Netlify.
We're ready to start a new project. 

If you haven't made one already, create an account and login at [Netlify](https://www.netlify.com/).

![Netlify New Site](/uploads/newsitebut.png)

Creating a new site on Netlify is extremely simple. Once your account is created and you're logged in, you’ll be taken to https://app.netlify.com/sites. Click the *"New Site"* button to get started (depicted above).

Next, select *Link to GitHub* and you'll be shown a list of your GitHub repositories, as seen in the screen shot below. We'll select the Pelican repository we made earlier.
<INSERT SELECT REPOSITORY>

