+++
categories = ["development"]
date = "2019-09-07T15:51:11-04:00"
featuredimage = "uploads/blogheader.jpg"
featuredimagealttext = "Screenshots of Netlify, Forestry.io, and Hugo source code"
show_featured_image = true
tags = ["development", "hugo", "netlify", "forestry.io", "jamstack"]
title = "JAMstack!?"

+++
When I set out to build my new homepage, website, portfolio (or whatever you want to call it) I first thought of using a typical content management system. The obvious first choice for this is WordPress, and I have had plenty of experience building custom WordPress sites, plugins, and themes. This time I wanted to simplify things, avoid a heavy backend, and mostly: keep things free.

## What to do?

The answer was simple, static site generators! What could be easier than typing in a command, writing some markup and forgetting about the rest? Well, static site generators have one major drawback: finding the right one for you.

## Gatsby, Jekyll, Hugo 

When looking for a static site generator there are many options out there, but the big three that stood out to me the most were [Gatsby](https://www.gatsbyjs.org/ "Gatsby"), [Jekyll](https://jekyllrb.com/ "Jekyll"), and [Hugo](https://gohugo.io/ "Hugo"). Each of them has their strengths and weaknesses.

I've worked with Jekyll in the past, and at the time I was unhappy with how it was handling static resources (CSS mostly). Mainly, Jekyll handles SASS/SCSS compilation itself, and I was having issues with getting it to work well with my Gulp tasks. As my previous experiments with Jekyll were rushed, I can honestly say I didn't take the time to look too far into the documentation (lazy, right?). With this in mind, Jekyll was an option for me, but I wanted to look elsewhere first.

Next up is Gatsby. Everyone loves Gatsby. Every podcast I hear, ever Tweet I see, everyone is talking about Gatsby. It works well with Netlify, Sanity.io, and pretty much everything else. Sadly, I'm not much into React, and I wanted to keep my site as vanilla as possible, so I would keep Gatsby on the back burner as well.

Finally, I decided to take a look at Hugo. Hugo is a (surprisingly fast) static site generator that is built in Go. While I know even less Go than I do React, I found that I don't need to know much, if any Go to work with Hugo. Like Jekyll and Gatsby, you can build simple templates for content, use partials, and it's supported by several web hosts. I decided to give Hugo a shot. My experimentation got a little out of hand and by the time I was ready to check out the other static site generators, I already had a site built. 

## Finding a Hosting Provider

Well, there's not much to say in this section. I've been a huge fan of [Netlify](https://www.netlify.com/ "Netlify") for a long time, and the pricing is fantastic for my tier (It's free! Absolutely free!). 

The Netlify setup was so easy I didn't even know I was done when I was done. Being used to WordPress and working in LAMP, it was surreal to just push to a branch in Git and suddenly have a published website.

## Content Management

The final part of my adventure in this project was to find a way to edit content easily. Sure, I could just edit markdown files, but why do that when there are so many other ways to do this?

Originally I started working with [NetlifyCMS](https://www.netlifycms.org/ "NetlifyCMS") (which is a fantastic solution). Adding NetlifyCMS was a simple process that I managed to mess up originally, but once it was in place, publishing new content was a breeze.  

When I ran into an issue adding images to content, a quick Google search led me to an article about [Forestry.io](https://forestry.io/ "Forestry.io"). Suddenly I was brought back to a year ago when I was struggling to find a project that I could play around with Forestry on. With that in mind, I removed NetlifyCMS from the repo and integrated Forestry.

## Summary

While this was just a brief account of my first full experience with this combination of tools, I plan on writing more in-depth about it in the future. Some of the subjects I'd like to cover are issues I had while building this site, some cool tricks I learned, and details on why I picked the tools that I did.

Overall I'd say the site turned out pretty decent. I tweaked it little by little over a couple of months, and I have a laundry list of changes I want to make, but eventually, you have to just get your work out there.