---
title: "Improving Visibility and Inclusivity with Semantic HTML"
description: "Discover the benefits of using semantic HTML elements for improved accessibility, better search engine optimization, and overall user experience."
published: 2024/05/03
updated: 2024/05/03
slug: "semantic-html-seo"
img: "/download.jpg"
tags: ["SEO", "HTML"]
---

Semantic HTML is a great way to make your website more inclusive. It can also improve its chances of ranking higher on Google.

Despite that, it's often forgotten.

That's why, today, we'll talk a little bit more about writing a good HTML structure.

Enjoy 😊

## What is Semantic HTML?

If we take a look at the meaning of the word semantic in a dictionary, we can see that it means:

> relating to meaning in language or logic.

So, the term "_semantic_" is actually quite broad and extends beyond HTML or web development.

It can also refer to writing code in other programming languages. This involves naming variables and functions properly, as well as using the correct language keywords.

However, in this article, we will focus on semantic HTML and its role in SEO and accessibility. And when it comes to HTML, writing semantic code means using elements that clearly describe the content within them.

Let's take a look at the two examples below:

```html
<!-- Using incorrect tags -->

<div class="footer">This is a site footer</div>
<div class="header">This is a site header</div>
<a class="button">This is a button</a>

<!-- Using semantic elements -->
<footer>This is a site footer</footer>
<header>This is a site header</header>
<button>This is a button</button>
```

To the end user, these elements will look identical most of the time. You can also use CSS to style both blocks to look the same.

So, what's the difference?

In fact, there are several benefits to using the second choice:

It will help search engines better understand the content of this element (more on that later).
Assistive devices, like screen readers, will understand the content better. This is beneficial for people using such devices.

It will improve the overall readability of the code. After all, it's easier to understand the meaning of elements such as the footer, header, main, and nav than just div, div, div.Using semantic HTML won't improve your website's appearance or power. But, it is still necessary due to the benefits above.

Obviously, there are a lot of other semantic HTML elements that clearly describe the content within them, like:

```html
<section>...</section>
<nav>...</nav>
<form>...</form>
<time>...</time>
<details>...</details>
<main>...</main>
<summary>...</summary>
<mark>...</mark>
<!-- and many more -->
```

Remember that semantic tags are not a complete replacement for divs or spans. Yet, they are often a better option.

::newsletter
::

## The Benefits of Semantic HTML

Now, let's talk a little bit more about why the proper HTML structure is a must.

### Better SEO

When you visit a website, you can easily identify various elements such as the navbar, footer, sidebar, or buttons.

Even by looking at this article, it is clear that this blog post follows a specific structure. The article is on the left, sidebar is on the right, and header navigation is at the top.

However, humans aren't the only ones that visit your website.

Google web crawlers visit pages during the process called indexing. They analyze content, images, and video files to understand their meaning.

Then, Google uses this information to determine if your main content is relevant to specific searches.

For example - putting your article inside the `<main>` tag has a purpose. It signals to Google that this is the main page content and it holds significant value.

Also, using elements such as `<nav>`, `<header>`, and `<footer>` can help search engines better understand the layout of your entire website.

If you're writing a blog post, use `<p>` tags for paragraphs and `<img>` for images. Also, add other elements like lists, figures, or tables to support your content.

Will it have a huge impact on your website's SEO? Although Google can usually understand the web page content, even if the HTML markup is not perfect, using semantic HTML is still a must.

This is not only for SEO purposes but also for other reasons that we will discuss below.

### Improved Accessibility

If you want to make your websites accessible to everyone, then you have to write proper HTML. This can make a huge difference for people who use assistive technologies like screen readers or text-to-speech software.

When you use semantic HTML, it helps these devices understand the structure of the website, just like search engines do.

For example, if you navigate a website using only the keyboard, you can use the Tab ↹ key. It can help you move between focusable elements such as form elements, buttons, and links.

These elements will be highlighted and clickable, making it easier to get around the website.Using the `Tab ↹` key to navigate a page

If you use the wrong tags, like spans instead of buttons, it can be really hard for some people to move around the site smoothly.

Other layout elements are also crucial. They help various devices understand website structure. In MDN docs we can read that:

> ...you can create a layout using only nested `<div>` elements, but it is better to use appropriate sectioning elements to wrap your main navigation (`<nav>`), footer (`<footer>`), repeating content units (`<article>`), etc. These provide extra semantics for screen readers (and other tools) to give users extra clues about the content they are navigating.

As you can see, by using semantic HTML, your website will have a more cohesive structure. What's most important is that it will be easier to use for everyone, regardless of the device.

### Better Human Readability

Lastly, there is another reason to care about writing semantic HTML5. It improves the code readability.

You might see something like this pop up pretty often when reviewing HTML code or checking out a website's source:

```html
<div id="footer">...</div>
```

Leaving aside issues related to SEO and accessibility for a moment, this is simply reinventing the wheel.

There are many built-in tags that clearly indicate the content they represent. Mimicking this behavior with CSS classes or IDs is just unnecessary.

Take a look and compare the two markups. Which one do you find more pleasant to read?

```html
<!-- This one? -->

<div>
  <div>
    <div>
      <div>...</div>
    </div>
  </div>
</div>
<div>
  <div>...</div>
  <div>...</div>
</div>
<div>...</div>

<!-- Or this one? -->

<header>
  <nav>
    <ul>
      <li>...</li>
    </ul>
  </nav>
</header>
<main>
  <section>...</section>
  <section>...</section>
</main>
<footer>...</footer>
```

The code below is easier to read, right?

Semantic HTML is not primarily intended to improve code readability, but it can have a positive impact on it. So, it is definitely important to use appropriate elements when necessary.Related: Check out my article on improving SEO for Ghost CMS.

## Semantic HTML Cheat Sheet

According to MDN, there are roughly 100 semantic elements available in HTML.

Of course, you don't have to memorize all of them right away. But it's a good idea to familiarize yourself with some of the most commonly used ones. And start implementing them as soon as possible.

Writing semantic HTML takes the same amount of time as regular HTML. However, it has many other benefits. So, it's definitely worth the effort.

Here are some of the most popular semantic elements:

```html
<main>
  : This tag defines the main content of the document. It contains the primary
  information or functionality intended for the user.
  <article>
    : This element represents a standalone piece in a document, page, or
    application. It is designed to be distributed or reused easily, like a
    product card.
    <section>
      : This tag represents a generic section of a document that lacks a more
      specific semantic element to represent it.
      <header>
        : The tag element is used for introductory content or navigational
        links.
        <aside>
          : This tag represents a section of a document that is indirectly
          related to the primary content.
          <nav>
            : This element represents a section of a page intended to provide
            navigation links.
            <footer>
              : This tag is designed to define the footer of an HTML document or
              section.
              <form>
                : This is a document section that contains interactive controls
                for submitting information.
              </form>
            </footer>
          </nav>
        </aside>
      </header>
    </section>
  </article>
</main>
```

## FAQ

### Is Semantic HTML a Ranking Factor?

In my opinion, it is always important to use semantic HTML. However, it may not impact SEO unless your website's HTML structure is really poor.

## Final Words

Thanks for checking out this article! Semantic HTML is definitely an important topic. It can be approached from different perspectives. Developers, SEOs, and website owners can all benefit from it.
