---
title: Reseller Documentation
layout: reseller_docs
---

## Reseller Documentation

Welcome to netlify's reseller platform!

As a reseller you can issued API tokens that provides access to publish to your own instance of netlify's API, with very high API rate limits and a setup that doesn't distinguish between free or paid sites (ie, no callouts when adding custom domains).

As a reseller you have access to all of the normal API documented at [in the API docs](/docs/api).

You'll be using exactly the same flow for doing deploys, updating sites, setting custom domain, etc, as any other normal API user.

However, as a reseller, you also have access to some specific endpoints.

## Access Tokens and permissions

The most important of these endpoints is the capacity to create access tokens on behalf of your users, and create new user accounts in the process.

To create a new access token for a user simply:

    POST https://api.netlify.com/api/v1/access_tokens
      {"user": {"email": “name@mail.com", "uid": "12345"}}

    Returns:
      {"id":"54321","access_token":"some-token","user_id":"54321","created_at":"2015-11-06T02:48:15Z","email":"name@email.com"}

This will create a new user (only if none exists, otherwise register a login of an existing user) with the email “name@mail.com" and "uid" (your internal identifier for this user) ‘12345’, and return an OAuth access token valid for this user.

This makes it easy to generate unique access tokens that can be sent to your client side JS and used to interact with the netlify API directly from there. An example of that, is that all of app.netlify.com is a single page Angular app that talks directly to api.netlify.com. Everything we do at our netlify web UI, you'll also be able to do in your own UI as a reseller.

When accessing the API with an access token generated from your reseller credentials, you'll access the API on behalf of the reseller rather than on behalf of a single user.

This means that if you call:

    GET /api/v1/sites

With your reseller access token, you'll get a list of all sites in your reseller account (rather than the sites for a specific user).

The same works with most API end points, like:

    GET /api/v1/submissions

This would normally return the latest submissions for a user, but with a reseller access token it will return the latest form submissions for that reseller account.

In general a reseller can use this rule for all endpoints not scoped to a single site.

## Reseller Settings

To access your reseller panel, configure reseller settings and issue reseller API tokens, go to:

[Netlify's Reseller Panel](https://app.netlify.com/resellers)

You'll need to let us know which email address you're using to access netlify, so we can give you admin access to your reseller account.

## Preview Domain

By default when a new reseller account is set up, it'll share the same preview domain as netlify (`yoursite.netlify.com`), but normally you'll probably want a unique preview domain for development sites.

To do that you will have to set up a domain with a CNAME wildcard record, like \*.sites.example.com and point the CNAME to <reseller-name>.r.netlify.com and then tell us the domain to configure for this.

## Notification Email

If you're using features like email notifications or continuous deployments, you'll want to make sure we don't send mails from netlify.com

You can configure your notification email from the reseller panel. We currently use Mandrill to send notification emails, so make sure to follow [their guide on configuring SPF/DKIM records](https://mandrill.zendesk.com/hc/en-us/articles/205582267-About-SPF-and-DKIM) before changing the notification email.


## Custom HTML Pages

There's a few default HTML pages you can set for your reseller account. Each must be a self-contained HTML page (ie., either inline CSS/JS/Images or link to external CSS/JS or Image files).

* **Default 404 Page** Shown for 404s when a site doesn't have a 404.html
* **Form Success Page** Show on successful form submission when a form doesn't have an action attribute.
* **Password Page** Shown when a site is password protected. Must include a form with an input element with the name "password".

We're working on making these editable from the reseller panel, but for now, just mail the pages to us and we'll install them in your account.

## Paid features

As a reseller, your account doesn't distinguish between free and paid sites, but there are some actions that require payment:

* **SSL Certificates** enabling Full SSL on a site with a certificate we provision is a paid action
* **Domain Registration** registering a new domain is a paid action

To interact with those features you need to specify a payment method ID when calling the action, and we'll charge the payment method based on the settings for your account.

For more details on these API endpoints and how to setup payment methods, please get in touch. There's a few different options based on your type of integration.
