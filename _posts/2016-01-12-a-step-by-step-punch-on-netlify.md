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

{% raw %}
### Welcome to netlify
Punch is a nice static site generator from Sri Lanka (written by Mr. Lakshan Perera). 
It's written in javascript with node.js and what immediately stands out is its user friendliness and good basic documentation to get you started, while it takes only a few minutes to set up. It's not too much different from other node.js based generators and uses Mustache for its templates, with content in JSON format, though Markdown and other possibilities exist.

The aim for Punch, as defined by Mr. Lakshan Perera, is to *"help anyone to build (and maintain) modern websites using only HTML, CSS and JavaScript"* and while it's largely inspired from Jekyll it is *NOT* a blog engine.

Unlike most other static site generators, it's extremely fast and easy to change the navigation and generally speaking, it's fast and easy to get started with and comes with a boilerplate.

### Today's Guide
In our guide today, we'll do a basic Punch site with a few plugins and once we're satisfied, we'll push our site to GitHub and deploy it on netlify.

If you're all set with a Punch repo or site of your own and all you want to do is see how we connect and build a Punch site on netlify, you can skip the majority of this guide and start down [here](#netlifystart) instead.
However, if you need a bit of help with regards to hooking your local Punch site up with GitHub, starting [here](#githubstart) will make more sense.

And finally, if you want to try out our small Punch tutorial, commence chronologically and please enjoy the show.

***Please note that as Punch requires node.js, this guide assumes you have it installed before partaking !!!***

For an absolutely stellar article about installing and handling node.js using nvm please see [this guide](http://www.nearform.com/nodecrunch/nodejs-sudo-free/).

### QUICK GUIDE 
This small section is reserved for a small quick start guide to be used by those in a hurry, who simply wish to get all the terminal/command prompt commands to be entered immedeately and consecutively without too much thought.

Only use these if you know what you're doing and remember it's at your own discretion.

For a more detailed installation with setup instructions for a basic site, scroll past the quick install guide to [here](#punchsetup).

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
<REMOVE OR FILL IN>
```

#### Quick Install Punch - Windows:

```
Windows command prompt install commands
<REMOVE OR FILL IN>
```

Provided you got the requirements sorted, the installation and setup of punch and a punch site can be done with a few short commands in terminal, as seen in the above example for Linux. 

Simply choose the guide that corresponds with your operating system and substitute my-punch-site with the name of your site.

Once you've entered the last command `punch s`, leave the window open, as it will run a web server you can test your site against. Just open your browser and visit [http://localhost:9009](http://localhost:9009) and see for yourself.

It's recommended to take the quick hands-on tutorial, as it will quickly cover the basics and get the ball rolling, but it's not a prerequisite for this guide. 

Please note that while we've included a quick install guide for the Windows OS and tested this, the main guide was only tested on Linux and OSX and it will not work without alterations for users on Windows OS!

### Install & Setup Punch
<a id="punchsetup"></a>
OK, so you decided the quick start guide was a tad short on the explanations and you're correct of course. 

We'll give you our own personal template [here](https://github.com/jimmilee/punch-demo-template) and proceed with some details.

This guide will proceed with the step-by-step setup of the above template and mold it into a small Punch site which we'll host on netlify in continuous deployment with assets on GitHub.

#### 1. Install Punch
In the terminal, enter the following command:

```
npm install -g punch 
```

This should install Punch as a global npm package, at least if you're using nvm to control and handle your node.js versions. 

If you're not using nvm and/or if the command hasn't got the right privileges, you will need to add `sudo` to the front like this: `sudo npm install -g punch`

#### 2. Create Site
Let's create a site using the `punch setup` command in a terminal window like this:

```
punch setup my-punch-site
```

Easy enough. The punch setup command will setup a site at the present location, with the name  my-punch-site (substitute with your own site name).

*Feel free to keep the terminal window open between steps for your own convenience!*

#### 3. Edit Layout
The layouts define how we present the content and in punch the default template engine is [Mustache](http://mustache.github.io/) and though you can optionally change to another template engine, such as [Handlebars](https://github.com/laktek/punch-engine-handlebars), we simply opted to stay with Mustache and give it a try.

Edit the file named *_layout.mustache* inside the template folder - this is the main layout and will be used as a fall back.

Fill it in like this:

```
{{> header }}

        <div role="main">
            {{{content}}} 
        </div>

{{> footer }}
```

It's pretty simple really. We introduce partials, which follow the Mustache formula with `{{> partial-name }}` to insert a partial in the layout. In our example the header will be printed instead of the `{{> header }}` code tag and the footer will be printed instead of the `{{> footer }}` code tag.

Notice the use of an extra set of mustache brackets around the content tag? This will escape the content and serve it as unescaped HTML, instead of just text and thus, this is how we serve up the content, enabling us to use HTML inside the content.

Well, these partials don't make themselves, so let's move on to creating these partials with the punch site generator.

#### 4. Partials
Punch handles partials like most other static site generators and when you do the setup initially punch includes both a header and a footer partial file. 

We'll basically use these with a few small amendments and the result is below.

The `_header.mustache` file:

```
<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
            <title>{{{site-title}}}</title>
            <meta name="description" content="">
            <meta name="viewport" content="width=device-width">

            <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

            {{#stylesheet_bundle}}/css/all.css{{/stylesheet_bundle}} 
    </head>

    <body>
            <header>
                <h1>{{#upcase}}{{site-title}}{{/upcase}}</h1>

                <ul class="navbar">
                    {{#navbar}}
                        <li><a href="{{{href}}}">{{label}}</a>
                    {{/navbar}}
                </ul>
            </header>
```

If you've worked with HTML and ever tried to set up a web site, the above will look familiar and straight forward, except for a few oddities taken from the Mustache templating engine.

These are used to "inject" content into the template and thus in the head of our site, `{{{site-title}}}` is used to insert the title of the site in question. 

The mustache helper tags with the stylesheet declaration inside (the `stylesheet_bundle` tags) are defined by Punch and will reference the stylesheet asset bundle created in the `config.json` (soon my young padawan!). These helper tags will basically take all the stylesheet files defined in this bundle and turn them into one stylesheet file in our layout named `all-xxxxxxxxxxxxx.css` with a fingerprint. 

In the beginning of the body section, we find a header where the site title will be printed in headline letters using this code `{{#upcase}}{{site-title}}{{/upcase}}` and below this header title, we have our navigation bar, declared like this:

```
    <ul class="navbar">
        {{#navbar}}
            <li><a href="{{{href}}}">{{label}}</a>
        {{/navbar}}
    </ul>
```

Let's just stop for a second and take this one in!

Our navigation bar is the ordered list label in the center of the two navbar mustache tags (`{{#navbar}}` and `{{/navbar}}` ) and for each navbar element defined, this line will be printed once with the correct link and label. The triple mustache href tag (`{{{href}}}`), is neccessary to escape the html used for the link, while the double tagged label mustache tag will print the label (`{{label}}`).

Try it out and refresh your site and you'll see how easy it is. We'll get to the `share.json` file in which we define these navbar elements, in a few steps.

The `_footer.mustache` file:

```
            <footer>
                <p>{{{footer-text}}}</p>
            </footer>

            <script src="//ajax.googleapis.com/ajax/libs/jquery/1.8.0/jquery.min.js"></script>
        </body>

</html>
```

Again it's pretty straight forward, with a small text in the footer and since we want to put a few links in this text, we'll allow HTML by adding the extra set of mustache brackets. The `{{{footer-text}}}` is referenced through Mustache and also defined in the fabled `shared.json` file later.

#### 5. Folder Tree
Punch takes the whole separation of content from presentation concept very seriously, which is of course a good thing, as it helps divide the work in a sensible manner.

For this purpose the two are divided into two folders named contents and templates and as the names imply, one is for the content, such as your articles or posts. The templates folder though, is not only for the templates or layouts we'll introduce in the next step, but also images, stylesheets, Javascript and whatever else you might want to add to help you present the site.

In the side by side pictures shown below, we have the folder structure created by punch on the left, with the somewhat changed folder structure we ended up with on the right:

<FOLDERS TREE picture - Default folders defined by PUNCH left, with my added content folders and template files etc. to the right>
<LINK to GitHub repo with this finished folder tree>

As you can see from the picture above, I've created a folder for each of the html files being build, using an underscore followed by the name. E.g. the *_about* folder will turn into an *about.html* file using the content of the folder. 

#### 6. Create Layout
When using Punch, it's important to know a few things about how Punch works internally.

The *_layout.mustache* file is the default layout for all the pages of the site and it comes pre-installed! However, if there's a file with the name of a given page, then that layout would be used before the default layout. E.g. if I made an *about.mustache* file, this would be used to create the corresponding *about.html* file using the content of the *_about* folder in the contents directory.

We'll illustrate this quickly. Copy and rename *_layout.mustache* to *index.mustache*, so we can create a layout for our landing page which is different from the rest of our pages.

Open the newly created *index.mustache* file and fill it in like this:

```
{{> header }}

        <div role="main">
            <img src="\images\punch_banner.png" alt="The Punch SSG">
            {{{content}}} 
        </div>

{{> footer }}
```

What's that? It's identical to the default file?  Well yes, the only change is the addition of the *punch_banner.png* image to show the world that this site was made with punch.

For this to work properly, you'll need to add the *punch_banner.png* image to the `templates\images` folder.

#### 7. Title & Navigation
As mentioned a few times already, Punch is one of the few site generators that offer an incredibly easy way to set up a simple navigation bar straight out of the box, by simply editing the `share.jason` file in the contents folder.

We filled in our `share.jason` file like this, changing the title, the footer text and adding a navigation bar, in that order:

```
{
   "site-title": "Punch on netlify",
   "footer-text": "Built with <a href=\"http://laktek.github.com/punch\">Punch</a> with assets on <a href=\"https://github.com/\">GitHub</a> and deployed to <a href=\"https://www.netlify.com\">netlify</a>.",
   "navbar": [
      { "label": "Home", "href": "/" },
      { "label": "Blog", "href": "/blog" },
      { "label": "About", "href": "/about" }
   ]
}
```

Again it's kept fairly simple. Any property defined in this file, is made available to all pages of the site, which can come in handy if you need some globally shared variables. As you saw in step 5 and 6, it's then possible to reference these values from the layout and we demonstrate this by using all of the information above in the header and footer partials. 

The navigation bar is very easy to set up, with a number of labels, each with a name and a path and we've added 3 options, which we will quickly set up. One is for our landing page and is simply named Home, while the other two are About, which points to the about folder, and the Blog label pointing to the blog folder.

#### 8. Create Blog Layout
We'll create the blog layout and populate it with articles (we'll create these in the next step).

Open the contents folder and create a directory named `_blog`, then create the *blog.mustache* file in the layouts folder and finally open the newly created file and fill it in like this:

```
{{> header }}

    <div role="main">
        <ul class="article_list">
            {{#articles}}
                <li>
                    <a href="{{ permalink }}">{{{ title }}}</a>
                    <article>{{content}}</article>    
            {{/articles}}
        </ul>
    </div>

{{> footer }}
```

The layout follows the winning formula from the other two pages, with the header and footer placed at the top and bottom and the center dedicated to content. Unlike the other pages though, this is where something interesting happens, as we will use Mustache to cycle through all the articles and print them in succession, with the newest articles first, like one would do in a blog or news paper.

Let's take a closer look at the Mustache inserted in the HTML and explain in detail.

Inside the unordered list (the `<ul>` tags) we'll list our articles, as defined with the Mustache section tags `{{#article_list}}` to begin and `{{/article_list}}` to end the section.

Within this section we'll print an ordered list item for each article (ordered list tags are `<li>` and `</li>`).

Inside the ordered list item, we'll print the title as a headline above the content text, with the title line: `<h3>{{title}}</h3>` 

The content is printed underneath, inside the article tag liks this: `<article>{{content}}</article>`

Now all that's needed is for the list of articles to be available in a json file (e.g. share.json, making the articles available everywhere)

<OBS - HOW TO GET THIS INFO AT RUNTIME?>

share.json:

```
{
  "articles": [
    { "title": "Article Title 1", "content": "This is the main content, but where should it go?" },
    { "title": "Article Title 2", "content": "This is the main content, but where should it go?" },
    { "title": "Article Title 3", "content": "This is the main content, but where should it go?" }
  ]
}
```

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


<INFORMATION: Extended contents
While, JSON format works great for structured content, it would not be ideal to define long, formatted texts. Practically, properties such as intro from the above example, wouldn't be just a single sentence. It will span into multiple paragraphs and can contain hyperlinks, emphasizing, etc.

You can move such contents into their own files. These are known as extended contents. All extended contents for a page must be placed in a directory named by the page name preceded with an underscore (eg. _index, _about). Punch will merge all properties defined in a extended content directory into the regular content object.

Punch will actually try to parse the extended content files, before merging them into the regular content object. By default, Punch can parse content defined as Markdown. You can easily add your own parsers for other content types too. >

#### 10. Edit configuration
Open up the default `config.json` file [here](https://github.com/laktek/punch/blob/master/lib/default_config.js) and take a look and use it as a reference when making your own configuration. The `config.json` file for your project is in the content folder.

```
```

#### 11. Build it and smile
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

{% endraw %}