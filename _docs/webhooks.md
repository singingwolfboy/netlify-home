---
title: Webhooks
position: 60
---

# Webhooks

Netlify support both incoming and outgoing Webhooks.

## Incoming Webhooks

You can add build webhooks to a sitefrom the site settings screen.

Scroll down to the Webhooks setting and click edit to add a new hook.

Pick a title that describes the hook (ie. Google Calendar Hook), then Netlify will generate a webhook URL.

When you send a POST request to this URL, Netlify will trigger a new build of your site.

## Outgoing Webhooks

Outgoing Webhooks will be coming soon. They let you receive notifications for different events like a build starting, a build completing, a build failing or a new deploy.
