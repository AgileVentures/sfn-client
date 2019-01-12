
## About this project

## Getting Started

This describes how to contribute to SFN-CLIENT:  the tools we use to track and
coordinate the work that is happening and that needs to happen. This also describes the
*workflow* -- the processes and sequences for getting contributions merged into the project in an organized and coherent way.

First be sure that you've set up your development environment following all the steps
 in **[Setting Up for Development on WebSiteOne _(Project Set Up)_]() :construction:


We use [Waffle](https://waffle.io/AgileVentures/sfn-client) to manage our work on features, chores and bugfixes.

We keep our code on [GitHub](http://github.com) and use [git](https://git-scm.com) for version control.

# Contribution Guideline
### Forking the repository
Each developer will usually work with a [fork](https://help.github.com/articles/fork-a-repo/) of the [main repository on Agile Ventures](https://github.com/AgileVentures/sfn-client). Before starting work on a new feature or bugfix, please ensure you have [synced your fork to upstream/develop](https://help.github.com/articles/syncing-a-fork/):

### Choosing Stories/tickets.

When deciding on an issue to work on, look for the  `Help Wanted` or `Good First Issue` tags.

### How to create a feature branch

```
git checkout develop
```
``` 
git pull upstream develop
```

Ensure you have setup AgileVentures/sfn-client's upstream  `develop`.  Otherwise you will not have the latest `develop ` changes.

To confirm this, run ```git remote -v```.

You should see a simillar output.

```
origin  https://github.com/yourgithubusername/sfn-client.git (fetch)
origin  https://github.com/yourgithubusername/sfn-client.git (push)
upstream    https://github.com/AgileVentures/sfn-client.git (fetch)
upstream    https://github.com/AgileVentures/sfn-client.git (push)
```

If not, you need to set the remote develop in order to get the latest copy once changes are merged.

Inorder to achieve that, run:

```
git remote add upstream https://github.com/AgileVentures/sfn-client
```

```
git pull upstream develop
```

This depends on the name of your origin (Counter check before running the above command).

You will now have the latest copy of develop in your local.


Once this is done, you can proceed with naming your branch following the below convention.

### Branch Naming Conventions

``` 
git checkout -b 17-add-sfn-logo
```


Where `17` is the ticket number and `add-sfn-logo ` is a short description of the purpose of your branch.

### Commit Messages

Ensure your commit message clearly communicate the work you have done.

For example,
```
git commit -m "Implement user login"
```

### Pull Requests

For your Pull Requests, ensure you have a proper title describing your task.
Make sure to add a link to the ticket you've worked on and add any screenshots if necessary.


Your pull request needs to be reviewed by at least two people in the team for it to be merged in `develop` branch.
