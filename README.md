
## About this project
:construction: UNDER CONSTRUCTION :construction:

## Getting Started

This describes how to contribute to SFN-CLIENT:  the tools we use to track and
coordinate the work that is happening and that needs to happen. This also describes the
*workflow* -- the processes and sequences for getting contributions merged into the project in an organized and coherent way.

First be sure that you've set up your development environment following all the steps
 in **[Setting Up for Development on WebSiteOne _(Project Set Up)_]() :construction:


We use [Waffle](https://waffle.io/AgileVentures/sfn-client) to manage our work on features, chores and bugfixes.

We keep our code on [GitHub](http://github.com) and use [git](https://git-scm.com) for version control.

### Forking the repository
Each developer will usually work with a [fork](https://help.github.com/articles/fork-a-repo/) of the [main repository on Agile Ventures](https://github.com/AgileVentures/sfn-client). Before starting work on a new feature or bugfix, please ensure you have [synced your fork to upstream/develop](https://help.github.com/articles/syncing-a-fork/):

### Node version management :hammer_and_wrench:
Please ensure you have nvm installed in your local machine. If you are using OSX you can run the command below

```brew install nvm```

To ensure that the correct node version for the project is automatically selected when you cd into the sfn-client project's directory please install [avn](https://github.com/wbyoung/avn) in your local machine and run the commands below in your terminal:

```
yarn global add  avn avn-nvm avn-n
avn setup
```

Unfortunately, if you are using vs code's integrated terminal, you have to cd .. and cd back in.

In Mac's Terminal it works automatically.

If you are using [fish shell](https://gist.github.com/idleberg/9c7aaa3abedc58694df5) please [use this](https://medium.com/@joshuacrass/nvm-on-mac-for-fish-users-e00af124c540) to install nvm and [install avn for fish](https://github.com/martinkacmar/fish-avn)

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

In your pull request description please include a sensible description of your code and a tag `fixes #<issue-id>` e.g. :

```
This PR adds a CONTRIBUTING.md file and a docs directory

fixes #799
```

which will associate the pull request with the issue in the Waffle board.

Your pull request needs to be reviewed by at least two people in the team for it to be merged in `develop` branch.