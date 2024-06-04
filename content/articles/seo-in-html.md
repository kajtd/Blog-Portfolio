---
title: "9 Beginner HTML Tips for SEO"
description: "Improve SEO with this set of HTML tips. Optimize images, use rich snippets, and craft effective titles and meta descriptions for better rankings."
slug: seo-in-html
img: "/articles/html-tips-seo/html-tips-seo.svg"
published: 2024/05/03
updated: 2024/05/03
tags: ["SEO", "HTML"]
---

Did you know that there is a meta tag that defines keywords for search engines? It looks like this:

```html
<meta
  name="keywords"
  content="productivity, remote work, minimizing distractions"
/>
```

If you're not using it, there's no need to worry. The meta keyword tag is no longer used by Google for ranking and has little impact on search engine rankings.

However, although you don't need to worry about this specific tag, there are other HTML elements that, if not used correctly, can have a negative impact on SEO.

That's why I have prepared this article - to provide you with a checklist that you can use to ensure that you are effectively using HTML for search engine optimization.

Let's dive in.

## HTML Tips for SEO

Before we begin, it's important to note that this article will focus on several different types of elements, including:

- _HTML Tags_: HTML tags are a fundamental part of a webpage used for creating elements. They may contain text, images, data items, or nothing at all.
- _Meta Tags_: These are HTML tags that provide additional information about a page to search engines. We place them in the `<head>` section of our HTML code.
- _Attributes_: HTML attributes provide extra information about HTML elements. They are specified in the start tag and can adjust the element's behavior.

Now, let's explore some crucial HTML tips for improving your website's SEO.

### #1. Use Responsive and Accessible Images

Improving your website's search engine ranking requires optimizing all the elements on the website, including images.

To ensure that you are on the right track, there are a few things that you should do.

#### Descriptive Alt Attributes

Make use of **descriptive alt text that accurately describes the image**. Not only does this help users who can't see the images on web pages, but it also assists search engines in understanding the subject matter of the image.

```html
<img
  src="neapolitan-pizza-dough.webp"
  alt="A freshly prepared neapolitan pizza dough resting on a marble surface"
/>
```

However, it's important not to stuff alt tags with keywords because this can result in your site being viewed as spam.

#### Descriptive File Names

Use descriptive file names that provide relevant information about the image.

Instead of using random names like `qwertyuiop.png`, it's better to be more specific and use names like `neapolitan-pizza-dough.png` to **give search engines a better idea of what the image is about.**

#### Compress Images

Compress images to minimize file size without losing quality. This results in faster loading times for your website.

Consider using the right image format, with webp being the recommended choice, as it offers the best compression for images on the web.

#### Lazy Loading

Implement **lazy loading** when necessary. Lazy loading allows the web browser to delay loading an image until the user scrolls to the section of the website where the image is present.

This is another effective way to improve website performance.

```html
<img
  src="neapolitan-pizza-dough.webp"
  alt="A freshly prepared neapolitan pizza dough resting on a marble surface"
  loading="lazy"
/>
```

#### Responsive Images

Lastly, it's also recommended to use responsive images that provide different versions of the same image for various screen sizes. This can be achieved by using the `srcset` attribute in the image tag.

```html
<img
  srcset="
    neapolitan-pizza-dough-450w.webp 450w,
    neapolitan-pizza-dough-750w.webp 750w
  "
  sizes="(max-width: 600px) 450px,
             750px"
  src="neapolitan-pizza-dough-750w.webp"
  alt="A freshly prepared neapolitan pizza dough resting on a marble surface"
/>
```

The `srcset` attribute defines a set of images that the browser can choose from, each with a different size.

On the other hand, the `sizes` attribute specifies a set of media conditions, such as screen widths, and suggests the best image size to choose when certain media conditions are met.

### #2. Implement Rich Snippets

When you search for something on Google and view the search engine results page (SERP), you'll see the title, URL, and meta description.

However, these aren't the only pieces of information that Google can display on the SERP. By using structured data in your HTML code, Google can also show additional data related to your search.

Structured data, also known as schema markup, is a set of information that is presented in a standardized format and helps classify the content of a webpage.

This information provides **valuable insights about the content of a page**, such as the price, availability, rating, and number of reviews of a product on an e-commerce store.

By including this information, search engines like Google can **better understand the content and its context.** As a result, it becomes easier for users to find the information they are looking for.

Besides enhancing the visual appeal, rich snippets can boost click-through rates. According to [Google's official documentation](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data):

> Rotten Tomatoes added structured data to 100,000 unique pages and measured a 25% higher click-through rate for pages enhanced with structured data, compared to pages without structured data.

So, it's worth considering implementing structured data on your website, especially if you have specific types of content like products, events, or recipes.

How to add schema markup to your HTML? There are various ways to do so, but one method I personally recommend is using a [schema markup validator](https://validator.schema.org/). It can automatically generate a markup scheme for you based on the URL of the website you want to create a schema markup for.

This tool will automatically generate an entire schema markup for you, which you can later edit if you need to make changes. Also, if you want to verify that your structured data is correct, you can use the [official Google tool for testing your schema markup](https://search.google.com/test/rich-results).

Once you have generated and verified your schema markup, the final step is to add the generated script to the head section of your HTML page file.

```js
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "publisher": {
            "@type": "Person",
            "name": "Kajetan Domagała",
            "url": "https://www.kajetan.io/",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.kajetan.io/content/images/size/w256h256/2023/04/android-chrome-512x512-1.png",
                "width": 60,
                "height": 60
            }
        },
     ...
    }
    </script>
```

### **#3. Always Write Title Tags**

The title tag is the first element that users see.

It's important to note that this tag is not necessarily the same as the title of an article. The title tag is what appears in search results and in a browser tab, while the `h1` header (which is the title of the article) is visible to a user after they visit a website.

It's easy to confuse the two, but they are not the same.

Here's an example of the HTML code for a title tag:

```html
<head>
  <title>How to Make Neapolitan Pizza Dough?</title>
</head>
```

Now, let's explore important elements to consider when writing title tags. Google's guidelines provide some instructions for optimizing title tags:

- Use **concise and descriptive title elements** for your pages. While Google doesn't specify the exact length of titles, it's a good practice to keep them under 60 characters to avoid truncation. If your title is too long, it may get cut off at the end.
- Create a unique `<title>` element for each page to differentiate pages for Google.
- Choose a title that effectively communicates the content's topic.

Having optimized title tags is crucial for SEO because they help Google better understand the content on your website.

Besides helping your content stand out in search results, well-crafted titles can also **attract clicks**. However, be cautious not to cross the line between a catchy title and clickbait.

Another interesting thing is that Google can rewrite titles for improved clarity and length. According to[ a study by Zyppy](https://zyppy.com/seo/title-tags/google-title-rewrite-study/), **Google rewrote 61.6% of the title tags** among the 80,959 examined on 2370 sites.

There are ways to minimize the chances of having your article title rewritten. However, I usually don't take any action as the changes that Google makes to my titles are typically minor.

### **#4. Write Clear Meta Descriptions**

The meta description tag provides a brief summary of the web page content, with the aim of giving the user an idea of the page's content.

Here's an example of the HTML code for a meta description tag:

```html
<head>
  <meta
    name="description"
    content="Master Neapolitan pizza dough with our step-by-step guide for a perfect, authentic crust. Elevate your homemade pizza!"
  />
</head>
```

Actually, **meta description is not a ranking factor.** However, writing a good description can attract clicks and increase traffic, so it's important.

To ensure that our meta descriptions are of high quality, Google has provided us with some best practices. These practices include:

- Writing **unique and accurate** descriptions for each page on your website.
- Ensuring that your descriptions provide **relevant information** that accurately reflects the content of each page.
- If necessary, generate descriptions programmatically. This is particularly useful when dealing with a large database that has a huge number of pages, making it impossible to write a meta description for each page manually.

Similar to the title tag, the meta description can also be rewritten by Google. According to a [study by Ahrefs](https://ahrefs.com/blog/meta-description-study/), **Google rewrites meta descriptions approximately 62% of the time.**

### **#5. Structure Content with Headings**

Header tags are incredibly useful and should not be overlooked.

Firstly, they improve the readability of your text. Dividing your content into sections with headers makes it **easier for readers to scan** and process the information.

Secondly, **headers improve article navigation**. If you have a lengthy article, readers can easily find specific sections of interest by clicking on the relevant header in the table of contents.

Besides, using headers can make it easier for you to write the article, as you can break it down into smaller pieces and organize it more logically.

There are six different header tags available in HTML. Here is a list of them:

```html
<h1>...</h1>
<h2>...</h2>
<h3>...</h3>
<h4>...</h4>
<h5>...</h5>
<h6>...</h6>
```

There are a couple of rules to follow when managing headings:

- Each page should have a unique H1 heading.
- We should not skip levels in the headings hierarchy. So, we should not use `h4` before `h3`, `h3` before `h2`, and so on.
- Headings should be associated with relevant content. For instance, creating an `h2` heading that only contains a list of `h3` without any associated text is considered a bad practice.

### #6. Manage Links Effectively

Links are an essential component of the SEO world. They play a crucial role in determining whether a website ranks or not.

Internal links help Google find pages better and understand the website's structure. External links send people to other websites on the internet and help indicate a website's authority.

So, it is important to use links wisely and optimize them for better SEO results.

You are likely familiar with the anchor tag, which is used to link to locations within the same page or any other URL address.

Let's take a look at its structure:

```html
<a href="https://example.com">Website</a>
```

It's important to note that the anchor tag contains a list of attributes, including the `rel` attribute. This attribute is important for SEO and determines the type of link, such as `nofollow`, `dofollow`, `ugc`, or `sponsored`.

For example, a `nofollow` link would have the following HTML code:

```html
<a href="https://example.com" rel="nofollow">Website</a>
```

When a user visits your website, a nofollow link looks the same as a regular link. However, for search engines, it has a significant impact.

Google does not transfer **PageRank** across nofollow links, which means that they do not impact the search engine ranking of the destination URL.

On the other hand, **dofollow links can help improve your search engine rankings**, especially if they come from other authority websites.

If you are linking to a valuable resource that is a part of your content, then you don't have to worry about using the nofollow attribute. However, if you don't want Google to associate your site with the linked page or crawl it from your site, you should use the nofollow attribute.

There are also other anchor attributes worth knowing, such as `ugc` and `sponsored`. The `ugc` attribute is useful for marking user-generated content such as comments and forum posts, which helps prevent spammy links.

The `sponsored` attribute, on the other hand, should be used for marking links that are advertisements or paid placements.

### #7. Apply Open Graph Tags

Open Graph is a protocol that enables web pages to become interactive and engaging objects within a social graph.

If a reader likes the content on your website, they may want to share it with others. By including OG tags, you can **simplify this sharing process** and make sure that your content looks its best on social media platforms.

OG tags not only make the content look good but also provide social media platforms with a clearer understanding of the content, **increasing the likelihood of it being shown to the right audience.**

Here is an example of HTML code for open graph meta tags:

```html
<head>
  <meta property="og:title" content="How to Make Neapolitan Pizza Dough?" />
  <meta property="og:type" content="website" />
  <meta
    property="og:description"
    content="Master Neapolitan pizza dough with our step-by-step guide for a perfect, authentic crust. Elevate your homemade pizza!"
  />
  <meta property="og:url" content="https://example.com" />
  <meta property="og:image" content="https://example.com/image.jpg" />
</head>
```

As you can see, we have added a few extra meta tags to help the web page transform into a graph object. Each of these tags serves a specific purpose:

- `og:title`: This tag displays the title of your object.
- `og:type`: This tag indicates the type of your object.
- `og:description`: This tag presents a concise description of your object.
- `og:image`: This tag links an image URL that represents your object within the graph.
- `og:url`: This tag specifies the canonical URL of your object, which will be used as its permanent identifier within the graph.

### #8. Set Canonical Tags

A canonical tag is a way to inform search engines about **the preferred version of a URL** that should be displayed in search results.

This helps to **avoid duplicate content issues**, as each URL is treated as a separate page by search engines, even if they contain the same content.

A common example of this is a homepage that can have multiple URLs with slightly different variations:

```html
http://www.website.com - https://www.website.com - http://website.com -
https://website.com
```

By specifying the canonical URL, search engines can better understand the preferred page to display in search results and avoid indexing duplicate pages.

Here is an example of the HTML code for the canonical tag:

```html
<link rel="canonical" href="https://example.com" />
```

A good practice is ensuring that we **canonicalize the homepage**. That's because, as seen in the example above, it is common to have duplicate versions of the homepage.

### #9. Meta Robots Tag and Indexing Control

Sometimes, you might not want some of your websites to be indexed by search engines. In such cases, the meta robots tag can be quite useful.

You can use the simple code snippet to block a webpage from getting indexed:

```html
<meta name="robots" content="noindex, nofollow" />
```

To implement this, simply place the above code snippet inside the `<head>` section of your page's HTML.

What's interesting is that you can also block specific crawlers. For example, replacing the term "_robots_" with "_googlebot-news_" will make your page appear in Google web search results but not in Google News, a news aggregator service that displays articles on its channels.

```html
<meta name="googlebot-news" content="noindex, nofollow" />
```

In most cases, you will probably stick to using the regular robots meta tag to prevent content from being indexed.

This is particularly useful when you want to hide certain information from the public, such as paid content, that people should only be able to access after paying.

## The Importance of HTML in SEO

Google uses algorithms to determine which content should rank for specific keywords. By adopting the best HTML practices for SEO, **we make it easier for Google to scan our website and understand the content on it** and how it can help our users.

This is also why Google has so many guidelines in their documentation about optimizing websites. Although we don't fully understand how their algorithms work, we can follow their guidelines to ensure that our websites have everything it takes to rank.

It's crucial that websites are **accessible and fast** so users can use them without encountering problems related to loading assets, unreadable texts, or lack of mobile support. All of these factors contribute to users enjoying staying on our site for longer, which can also help with our SEO efforts.

## Final Words

I hope that the SEO tips I shared with you were helpful. As you can see, it's not very complicated.

Thank you for taking the time to read this article.

Hope to see you soon!
