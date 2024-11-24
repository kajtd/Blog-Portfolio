---
title: Adding a Newsletter to Your Nuxt Website in a Few Simple Steps
description: "Learn how to add a newsletter to your Nuxt website using Buttondown."
slug: nuxt-newsletter
img: "/articles/nuxt-newsletter/cover.svg"
published: 2024/11/24
updated: 2024/11/24
tags: ["Nuxt"]
---

Building a loyal audience is crucial for any website, and one of the most effective ways to achieve this is **through a newsletter**.

In this article, I’ll walk you through how I integrated a newsletter into my own Nuxt blog. This setup will help you collect email subscriptions and showcase past newsletters to attract even more subscribers.

For that, we'll use [Buttondown](https://buttondown.email/). It's a newsletter service with a great API that integrates well with Nuxt.

I chose it for my own website, mostly because it takes care of the tricky aspects of email delivery and subscription management. That way, you can focus on creating engaging content.

Here is the finished project we'll build:

<div style="position: relative; padding-bottom: 59.4059405940594%; height: 0;"><iframe src="https://www.loom.com/embed/d2e583c1774749bdb4d996c3296ca6a9?sid=e2a2bb03-12e5-47d9-b37f-956b3a9ce929" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

And here is the code on GitHub. If you find this article helpful, feel free to give it a star ⭐

::code-bookmark{ url="https://github.com/kajtd/nuxt-buttondown-newsletter" img="/articles/nuxt-newsletter/cover.svg" title="Github Code" description="Check out and clone the code on Github to see all the details. For simplicity, some of the code is not included in the article."}
::

## Prerequisites

Before we begin, make sure you have:

- A Nuxt 3 project set up and running
- A Buttondown account (free tier works)
- Your Buttondown API key
- Optionally, TailwindCSS installed

If you don't have a Buttondown account yet, you can sign up for free and get your API key from the [Buttondown dashboard](https://buttondown.com/).

## How to Add a Newsletter Subscription Form?

Let's break down the process of creating a newsletter subscription system into manageable steps.

You'll see it is very easy and only requires a basic HTML form and an API endpoint to handle form submissions. We'll create reusable components and manage all edge cases, covering everything from validation to error states.

### 1. Copy Buttondown API Key to Your `.env` File

First, let's set up our environment variables. Create or update your `.env` file in your project root:

```bash
# .env
NUXT_BUTTONDOWN_API_KEY="..."
```

Then, add this to your `nuxt.config.ts` to make it available to your server endpoints:

```typescript
// nuxt.config.ts
export default defineNuxtConfig({
  runtimeConfig: {
    private: {
      apiKey: process.env.NUXT_BUTTONDOWN_API_KEY,
    },
  },
});
```

### 2. Create a Form with a Submit Handler

Now, let's create a simple newsletter form component. For this project, I'm using TailwindCSS for styling, but you can use anything you want.

We'll also add an alert to notify the user about the success or error of the subscription process.

```jsx
<!-- components/NewsletterForm.vue -->
<template>
    <form @submit.prevent="subscribeToNewsletter">
      <input
        v-model="email"
        type="email"
        placeholder="Enter your email"
        :disabled="loading"
        class="w-full text-base px-3 py-2 mb-2 border border-gray-200 focus:ring-1 focus:ring-green-500/80 focus:border-green-500/80 outline-none transition-colors"
      />
      <button
        type="submit"
        :disabled="loading"
        class="px-4 py-2 bg-green-500/80 text-white font-medium hover:bg-green-600/80 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {{ loading ? "Subscribing..." : "Subscribe" }}
      </button>

      <div
        v-if="alert"
        :class="[
          'mt-4 p-4',
          alert === 'success'
            ? 'bg-green-100 text-green-600/90'
            : 'bg-red-100 text-red-800/90',
        ]"
      >
        <h4 class="font-medium">{{ alertTitle }}</h4>
        <p class="mt-1">{{ alertDescription }}</p>
      </div>
    </form>
  </template>

  <script setup lang="ts">
  const {
    email,
    loading,
    alert,
    alertTitle,
    alertDescription,
    subscribeToNewsletter,
  } = useNewsletterSubscription();
  </script>
```

This code creates a simple form with an email input and a submit button. As you can see, on submit, it will trigger the `subscribeToNewsletter` function from our composable that we'll create next.

### 4. Create a Composable for the Newsletter Subscription

Let's create a composable to handle all our newsletter subscription logic. It will contain a function to handle the subscription process and all the states and variables needed to manage the form.

This composable will be used to:

- Validate the email from the newsletter form
- Handle the loading state
- Handle the alert state
- Use the `$fetch` function to send the email to our `api/server` endpoint that will handle the subscription process

```jsx
// composables/useNewsletterSubscription.ts

const isValidEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export function useNewsletterSubscription() {
  const email = ref("");
  const loading = ref(false);
  const alert = ref<"success" | "error" | "">("");
  const alertTitle = ref("");
  const alertDescription = ref("");

  const subscribeToNewsletter = async () => {
    try {
      if (!isValidEmail(email.value)) {
        alert.value = "error";
        alertTitle.value = "Invalid Email";
        alertDescription.value =
          "Please enter a valid email address.";
        return;
      }

      loading.value = true;
      await $fetch("/api/subscribe", {
        method: "POST",
        body: { email: email.value }
      });

      alert.value = "success";
      alertTitle.value = "Welcome aboard! 🎉";
      alertDescription.value =
        "Please check your inbox to confirm your subscription.";
      email.value = "";

    } catch (error) {
      console.error("Subscription failed:", error);
      alert.value = "error";
      alertTitle.value = "Something went wrong";
      alertDescription.value =
        "Unable to subscribe. Please try again later.";
    } finally {
      loading.value = false;
      // Clear alert after 5 seconds
      setTimeout(() => {
        alert.value = "";
      }, 5000);
    }
  };

  return {
    email,
    loading,
    alert,
    alertTitle,
    alertDescription,
    subscribeToNewsletter,
  };
}
```

### 5. Add an API Endpoint for Subscribing to the Newsletter

Finally, let's create our server endpoint that will communicate with Buttondown. We will trigger the subscription process by sending the user's email to Buttondown's API.

For that, we'll create a `POST` endpoint in the `server/api` folder that will read the email from the request body. It will also authorize the request with our Buttondown API key that we set up earlier using `runtimeConfig`.

```typescript
// server/api/subscribe.post.ts
import { H3Event } from "h3";

export default defineEventHandler(async (event: H3Event) => {
  const config = useRuntimeConfig();
  const body = await readBody(event);

  if (!body.email) {
    throw createError({
      statusCode: 400,
      statusMessage: "Email is required",
    });
  }

  try {
    const response = await $fetch(
      "https://api.buttondown.email/v1/subscribers",
      {
        method: "POST",
        headers: {
          Authorization: `Token ${config.private.apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: body.email,
          type: "regular",
        }),
      }
    );

    return response;
  } catch (error) {
    console.error("Newsletter subscription error:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to subscribe to the newsletter",
    });
  }
});
```

If everything is set up correctly, you should be able to subscribe to the newsletter. Simply make a request to the endpoint with the email address you'd like to subscribe and verify if it works as expected.

Give it a try! 😉

### 6. Display a Confirmation Message to the User + Handle Errors

We've already integrated error handling and success messages in our form component and composable. The system will:

- Show loading states during the subscription process
- Display validation errors for invalid emails
- Show success messages after a successful subscription
- Handle API errors
- Automatically clear alerts after 5 seconds

To use the newsletter form on any page of your site, simply import and use the component:

```jsx
<!-- app.vue -->
<template>
  <div class="container mx-auto flex items-center justify-center flex-col min-h-screen">
    <div class="border border-gray-200 rounded-md p-6 w-full max-w-3xl">
      <h2 class="text-3xl font-bold">Stay Updated</h2>
      <p class="text-gray-700/90 mb-6 mt-2 text-base">
        Subscribe to get the latest articles and updates.
      </p>
      <NewsletterForm />
    </div>
  </div>
</template>
```

You now have a fully functional newsletter subscription component! Users can subscribe to your newsletter, and they'll receive a feedback at the end of the process. The code is modular, reusable, and can be easily integrated into any Nuxt project.

Now, let's **take this to the next level** by fetching the latest emails from Buttondown and displaying them on the page, so users can see what they'll get if they subscribe 👀

## How to Fetch Latest Emails from Buttondown?

Now that we have our subscription system working, let's showcase your previous newsletters to potential subscribers. Think of it as a social proof that can boost your subscription rate by letting visitors preview the content they'll receive.

I added the exact same thing for my own newsletter because, as a user, I like **seeing what I’m signing up for before committing**. I think it’s a simple yet effective way to build trust with the audience.

You can see the result in the video below:

<div style="position: relative; padding-bottom: 67.94871794871796%; height: 0;"><iframe src="https://www.loom.com/embed/2bec8c8824ef45c1b98bff3d002ebf20?sid=1b1955a8-53dc-41a7-8077-244cdb7a433e" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

### 1. Create a New Endpoint in the API Folder for Fetching Newsletters

Let's create the API endpoint. It should fetch the latest newsletters from Buttondown and return only the necessary fields (for example, we don't need the email body or analytics in our case).

We just want to return the necessary data to display the newsletters on the page.

Once again, we'll use the `$fetch` function to send the authorized request to Buttondown's API and handle the response. I've also created two types to handle the response from Buttondown's API, which we'll reuse later on the frontend.

```typescript
// server/api/fetch-newsletters.ts
import type { Newsletter, NewsletterResponse } from "~/types/Newsletter";

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  try {
    const response = await $fetch<NewsletterResponse>(
      "https://api.buttondown.email/v1/emails",
      {
        query: {
          status: "sent",
          excluded_fields: "body", // Optimize response size, we don't need the body in our case
        },
        headers: {
          Authorization: `Token ${config.private.apiKey}`,
        },
      }
    );

    // Get only the latest 3 filtered newsletters

    const filteredNewsletters: Newsletter[] = response.results
      .slice(-3)
      .map((email: Newsletter) => ({
        id: email.id,
        subject: email.subject,
        creation_date: email.creation_date,
        absolute_url: email.absolute_url,
        image: email.image,
        secondary_id: email.secondary_id,
      }));

    return filteredNewsletters;
  } catch (error) {
    console.error("Failed to fetch newsletters:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Failed to fetch newsletters",
    });
  }
});
```

Now, we have our endpoint ready to return the latest emails from Buttondown. Let's handle the data on the frontend.

### 2. Create a Composable to Fetch and Cache the Newsletters

Let's create a composable to handle the newsletter fetching. The general idea is to fetch and return the newsletters from our server endpoint.

I've also decided to add simple caching to the composable. We'll store the newsletters in sessionStorage to:

- Reduce API calls to Buttondown
- Avoid calling the API endpoint on every newsletter form load
- Provide a better user experience

```typescript
// composables/useNewsletters.ts
import type { Newsletter } from "~/types/Newsletter";

export function useNewsletters() {
  const newsletters = ref<Newsletter[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const fetchNewsletters = async () => {
    // Check cache first
    const cached = sessionStorage.getItem("newsletters");
    if (cached) {
      newsletters.value = JSON.parse(cached);
      return;
    }

    loading.value = true;
    error.value = null;

    try {
      const response = await $fetch<Newsletter[]>("/api/fetch-newsletters");
      newsletters.value = response;

      // Cache the response
      sessionStorage.setItem("newsletters", JSON.stringify(response));
    } catch (e) {
      error.value = "Failed to load newsletters";
      console.error("Newsletter fetch error:", e);
    } finally {
      loading.value = false;
    }
  };

  return {
    newsletters,
    loading,
    error,
    fetchNewsletters,
  };
}
```

Once our composable is ready, we can use it in any component to fetch and display the newsletters.

### 3. Display a List of the Latest Newsletters

Now is a good time to create a `RecentNewsletters` component that will display the latest newsletters. Of course, we'll use the `useNewsletters` composable we created earlier.

```jsx
<!-- components/RecentNewsletters.vue -->
<template>
    <div class="my-8">
      <div v-if="loading" class="text-center py-8 text-slate-500">
        Loading recent newsletters...
      </div>
      <div v-else-if="newsletters.length" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          v-for="newsletter in newsletters"
          :key="newsletter.id"
          :href="newsletter.absolute_url"
          target="_blank"
        >
          <article class="border border-slate-200">
            <div class="p-6">
              <h3 class="text-xl font-semibold mb-2">{{ newsletter.subject }}</h3>
              <time
                :datetime="newsletter.creation_date"
                class="block text-slate-500"
              >
                {{ formatDate(newsletter.creation_date) }}
              </time>
            </div>
          </article>
        </a>
      </div>

      <div v-else class="text-center py-8 text-slate-500">
        No newsletters available yet. Subscribe to be the first to receive them!
      </div>
    </div>
  </template>

  <script setup lang="ts">
  const { newsletters, loading, error, fetchNewsletters } = useNewsletters();

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  onMounted(() => {
    fetchNewsletters();
  });
</script>
```

To improve the user experience, I also added a simple `formatDate` function to make the newsletter dates more human-readable.

Now, we can combine the two components we created earlier: `RecentNewsletters` and `NewsletterForm`. Together, they let users subscribe to your newsletter and view the latest emails right below the subscription form.

Here’s how you can use both components to build a complete, functional newsletter section:

```jsx
<!-- app.vue -->
<template>
  <div
    class="container mx-auto flex items-center justify-center flex-col min-h-screen"
  >
    <div class="border border-gray-200 rounded-md p-6 w-full max-w-3xl">
      <h2 class="text-3xl font-bold">Stay Updated 🔥</h2>
      <p class="text-gray-700/90 mb-6 mt-2 text-base">
        Subscribe to get the latest articles and updates.
      </p>
      <NewsletterForm />
    </div>

    <h2 class="text-3xl font-bold mt-12 mb-4">Recent Newsletters 👇</h2>

    <RecentNewsletters />
  </div>
</template>
```

This creates an entire newsletter page that:

- Shows a subscription form at the top
- Displays your three most recent newsletters below
- Caches the newsletter data to improve performance
- Handles loading and error states

<img src="/articles/nuxt-newsletter/finished-project.webp" alt="Newsletter Page" />

## Final Words

I hope this tutorial helped you set up a newsletter system for your Nuxt website! The code is available in the examples above, and you can find more information in the [Buttondown documentation](https://docs.buttondown.com/introduction).

The API we've integrated with also supports other features, so you can easily extend this implementation as your newsletter grows.

P.S. Don't forget to subscribe to my newsletter to get more Nuxt tutorials like this one ✨
