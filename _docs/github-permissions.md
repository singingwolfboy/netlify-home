---
title: Github Permissions
position: 90
---

## Github Permissions

Netlify never stores Github Access Tokens.

Once you authorize Netlify, we fetch an Access Token from Github. But we **never store this token**. Netlify simply pass the token to our Javascript Single Page App and from then on all communication with the Github API happens straight from the browser. After configuring continuous deployment, the token is **permanently discarded**.

The only access Netlify will have is through a deploy key installed in a specific repository.

We would love to ask for less permissions when starting a new project, than we do. However [GitHub only provides very coarse grained permissions](http://developer.github.com/v3/oauth/#scopes) for their API.

When you start a new project with continuous deployments, we need to be able to browse your Github repositories, add a deploy key to the repository you pick and install a webhook to the repo.

## Restrict Access for Organizations

If you're still worried about granting access to sensitive repositories, Github lets you restrict application access for organizations.

[![settings-third-party-restrict-confirm.png](/uploads/settings-third-party-restrict-confirm.png)
](https://help.github.com/articles/about-third-party-application-restrictions/)

Once these restrictions is in place, Netlify will no longer get any kind of access to the repositories from this organization unless you explicitly whitelists our API application.

We recommend keeping all your most sensitive projects in an organization and enable third party restrictions. This will make taking advantages of any of the countless applications that can enhance Github for you much easier and more secure.

Read more about restricting third part access in [Github's documentation](https://help.github.com/articles/about-third-party-application-restrictions/)