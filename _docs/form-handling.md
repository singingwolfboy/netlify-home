---
title: Form Handling
position: 55
---

Netlify comes with built-in form handling. Just add a **netlify** attribute to your form tag and you can start receiving submissions.

It's a good idea to set a **name** attribute on the form so you can easily identify which form incoming submissions are coming from.

You can point the **action** attribute on the form to one of your html pages to show a custom thank-you message on successful form submission.

Here's an example:

```html
<form name="contact" action="thank-you" netlify>
  <p>
    <label>Your Name:</label>
    <input type="text" name="name">
  </p>
  <p>
    <label>Your Email</label>
    <input type="email" name="email">
  </p>
  <p>
    <label>Message</label>
    <textarea name="message"></textarea>
  </p>
  <p>
    <button>Send</button>
  </p>
</form>
```

Use the notification tab in the site admin UI to get notified when a new form submission comes in.

All form submissions can be accessed via API.

We run a spam filter when a form is submitted and if a form submission gets flagged as spam we will show the user a captcha before storing the submission.

If you're submitting the form over Ajax, note that we add a hidden field to the form called **form-name** with the **name** attribute of the form. Make sure to include this in your Ajax request.
