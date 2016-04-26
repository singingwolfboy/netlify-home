# Give Your Web Typography a Head Start

## The Typographic Basics

Paragraphs are the core building block of typography online. You want to make sure you’ve got a good line-height and horizontal width—aka measure—for good readability. If you stack your lines too close together, or too far apart, lines become harder to read. Like a staircase where the steps are too shallow or too steep.

The standard line-height online is something between 1.5 and 2.0 ems. If your lines stretch too far across the page reading can feel like a tedious marathon. The standard single-column width online is about 70-90 characters.

## Puttin’ on the Ritz

**Sometimes you want some text to pop.** You can do with *emphasis* or **strong emphasis**. You won't see any difference here between the two. Un­like serif fonts, which look quite dif­fer­ent when ital­i­cized, most sans serif italic fonts just have a gen­tle slant that doesn’t stand out on the page. [Butterick’s Practical Typography](http://practicaltypography.com/bold-or-italic.html) suggests skipping italic and using bold for em­pha­sis when using a sans serif font, so we've made them both look the same.

Typically you want a nice, steady vertical rhythm to your page. Of course, some folks don’t think that it’s actually necessary on the web to stick to a baseline grid, but it can be a great guide from which you can intelligently deviate. Speaking of intelligently deviating…blockquotes and graphic elements, like images and videos, make great deviations from the monotony of paragraphs.

### Blockquotes

> "There are only two hard problems in Computer Science: Cache Invalidation and naming things."
> _– Phil Karlton_

### Images

![A random photo](https://unsplash.it/960/400)

#### A smaller image

It would be really great if we only used nice big images. Unfortunatelly,
we know that won't be the case. So this is how a small image looks.

![A random photo](https://unsplash.it/400/300)

And we'll probably end up having them in all sorts of different sizes.

![A random photo](https://unsplash.it/500/200)

### Videos

<iframe width="560" height="315" src="https://www.youtube.com/embed/f7Ig5EKjzgw" frameborder="0" allowfullscreen></iframe>

There is no markdown syntax for embedding a video. But you can just add it with some good ol' plain html.

## Lists

This Type-a-file would of course be incomplete without specifications for lists. It’s fairly common to indent both blockquotes and list elements, but seriously consider left aligning your text for these items and outdenting their bullets &amp; other visual demarcations. It can present a cleaner appearance while also drawing focused attention to information points.

1. This is a list that is well ordered.
2. It starts with one and goes to two.
3. Then it has a third item.
4. Followed by the fourth, and—in this case—last item.

* Un-ordered lists are just as simple.
* The only difference being that the items are marks by bullets instead of numbers.
* Don’t forget that lists can have list titles.
* Finally we’ve reached the last un-ordered item.

There are different ways of writing lists in markdown. Take a look at this [markdown cheatsheet] (https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#lists) and create your own wonderful, complex combinations:

1. First ordered list item.
2. Another item.
  * Unordered sub-list.
1. Actual numbers don't matter, just that it's a number.
  1. Ordered sub-list.
4. And another item.

   You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

   To have a line break without a paragraph, you will need to use two trailing spaces.  
   Note that this line is separate, but within the same paragraph.  
   (This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

 * Unordered list can use asterisks
 - Or minuses
 + Or pluses

## Code
If you’re a blogger geek, sooner or later you’ll want to tell everybody about some ripping `css` coding you concocted by posting it on your blog-o-tubes. So we’ve got you covered.

```
#header h1 a {
  display: block;
  width: 300px;
  height: 80px;
}
```

## Tables

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3


---

*You see how that works? You need something done typographically, Type-a-file does it. That simple. Now what are you waiting for? Find a flavor that suits your mood and go to town. Download the zip file. All the directions and files you’ll need will be squished inside. Oh, and when you’ve become a master <abbr>css</abbr>er and start making your own flavors of Type-a-file, come back and share them with the Type-a-file community!*
