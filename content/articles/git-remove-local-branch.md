---
title: "Deleting Git Branches 101: Remove Local and Remote Branches"
description: "Discover easy-to-follow steps for deleting Git branches and maintaining an organized repository."
published: "2023-08-15"
img: "download.jpg"
alt: "git remove local branch"
tags: ["Git"]
---

When working with Git, there might be several reasons to delete a branch. For example, you may want to clean up your project by removing all unnecessary, old branches that make it challenging to navigate your code repository.

In this short article, I'll show you how to delete Git branches locally and remotely.

Let’s get started!

## How to Delete a Local Branch in Git? 🤔

First, one thing is worth explaining - deleting local and remote branches are two different operations (your local and remote branches are two separate objects).

That is why it is important to sync your repositories after deleting a branch from one place, so they are the same, as I will show later in this article.

Let's talk about how to delete a local branch. Just use the command below:

```
git branch -d your_branch
```

The `-d` flag stands for `--delete`. It will only remove your branch if it has been completely merged. If there are any unmerged changes, this command won't work, and you will get an error.

Below you can see the git command that will allow you to force delete a branch with unmerged changes.

    git branch -D your_branch

<Alert type="error">
Before using it, be careful because it will delete all data on this branch.
</Alert>
<br />
<Alert type="warning">
Before using it, be careful because it will delete all data on this branch.
</Alert>
<br />
<Alert type="success">
Before using it, be careful because it will delete all data on this branch.
</Alert>

## How to Delete a Remote Branch in Git?

Now that you know how to delete a local branch, let's move on to remote branches.
To delete a remote branch, use the following command:

    git push origin -d your_branch

Your branch will be removed from the remote repository due to this action. But, if you are working on the project with others, make sure this branch is no longer needed before deleting it.

You can also inform your colleagues that you want to delete the remote branch, as it may cause conflicts in their local repositories.

## Syncing Deleted Remote Branches Locally

After deleting branches, you should sync both the local and remote repositories. It can be quickly done by using the command below to pull the latest changes from the remote repository:

    git fetch --all --prune

By using `--prune`, you will get rid of all your local branches that no longer exist on the remote. So, it is a great way to keep your local repo up to date!

## Delete Branches Before Merging

Once you've merged your branch with the parent branch, it's a good idea to delete the old one. It can be done very quickly - just go into your repository settings and check the right box. Here's an example of how to set this on GitHub.

| ![automatically delete head branches on GitHub](/images/github-delete-branches.webp)
|:--:|
| _Automatically delete head branches on GitHub_ |

## Wrapping Up

In this article, I've covered the basics of deleting local and remote Git branches and syncing your local repository with remote changes. By using these commands and other [Git best practices](https://gist.github.com/luismts/495d982e8c5b1a0ced4a57cf3d93cf60), you will ensure your repo is always neat and tidy.

Happy coding! ✌
