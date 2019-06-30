[![Coverage Status](https://coveralls.io/repos/github/AgileVentures/sfn-client/badge.svg?branch=develop)](https://coveralls.io/github/AgileVentures/sfn-client?branch=develop)
[![Build Status](https://travis-ci.org/AgileVentures/sfn-client.svg?branch=develop)](https://travis-ci.org/AgileVentures/sfn-client)
## About this project
Sing for Needs is a donation platform, meant to be a positive means for giving, inspired by music performances from artists, unknown and famous. The Artists get to see and choose the various causes to support with their performances, while getting a view of all the funds generated.

The Sing for Needs project is currently under active developement by a team of volunteers at [Agileventures](https://www.agileventures.org), an official UK Charity (#1170963) dedicated to crowdsourced learning and project development. Under the umbrella of Championer projects, the [Sing for Needs backend](https://github.com/agileVentures/sing_for_needs) uses the [Elixir/Phoenix](https://phoenixframework.org/) framework, while the frontend uses [React](https://reactjs.org/), mainly to facilitate mentorship for the volunteers to learn these modern technologies.

This is a guide, to help easily get set up and started with the frontend, for any voluteer who would like to contribute through code, PR reviews, mentorship, or in any other way.

## Getting Started

This describes how to contribute to SFN-CLIENT:  the tools we use to track and
coordinate the work that is happening and that needs to happen. This also describes the
*workflow* -- the processes and sequences for getting contributions merged into the project in an organized and coherent way.

We use [Zenhub](https://app.zenhub.com/workspaces/sfn-client-5cbedb54074dff0857634473/board?repos=110595899) to manage our work on features, chores and bugfixes.

We keep our code on [GitHub](http://github.com) and use [git](https://git-scm.com) for version control.

### Forking the repository
Each developer will usually work with a [fork](https://help.github.com/articles/fork-a-repo/) of the [main repository on Agile Ventures](https://github.com/AgileVentures/sfn-client). Before starting work on a new feature or bugfix, please ensure you have [synced your fork to upstream/develop](https://help.github.com/articles/syncing-a-fork/):

### Node version management :hammer_and_wrench:
Please ensure you have [nvm installed in your local machine](https://github.com/creationix/nvm). If you are using OSX you can run the command below

```brew install nvm```

Run the following command to install and switch to the current node version for the project:
```
nvm install v10.13.0
```

To ensure that the correct node version for the project is automatically selected when you cd into the sfn-client project's directory please install [avn](https://github.com/wbyoung/avn) in your local machine and run the commands below in your terminal:

```
npm install -g avn avn-nvm avn-n
```
OR
```
yarn global add avn avn-nvm avn-n
```
Then run:
```
avn setup
```

Unfortunately, if you are using vs code's integrated terminal, you have to `cd ..` and cd back in `cd sfn-client`

In Mac's Terminal it works automatically.

If you are using [fish shell](https://gist.github.com/idleberg/9c7aaa3abedc58694df5) please [use this](https://medium.com/@joshuacrass/nvm-on-mac-for-fish-users-e00af124c540) to install nvm and [install avn for fish](https://github.com/martinkacmar/fish-avn)

### Install yarn.
```
npm install -g yarn
```
### Run yarn to install dependencies
```
yarn
```
### Starting the development server
```
yarn start
```
### Set up .env.local
* You may need to set up `.env.local` with your backend server's base URL. This can be easily done by coppying the content of your `.env.default` file to `.env.local` as shown below

    ```cp .env.default .env.local```
* Update the value of the `REACT_APP_BASE_URL` to correspond to your server URL e.g. `REACT_APP_BASE_URL = 'http://localhost:4000'`
### Running tests (jest)
* This codebase uses Enzyme Javascript Testing Utility. To learn more about the Enzyme you can checkout their [documentation](https://airbnb.io/enzyme/).

* start the test by running
    ```
    yarn test
    ```
* then press `a` to run all test

### Running eslint/standard autofix command

* You can't commit or run the tests if you have lint errors, so run:

    ```
    yarn lint:fix
    ```
## SetUp Project with Docker
### Prerequisite
* Ensure you have docker installed. [Install docker](https://docs.docker.com/install/)

### Instructions
* Change to the project root directory. (.//sfn-client)

* Create an image with the following command
> docker build -f docker/Dockerfile -t sfn_client:production .

* Run the created image with
> docker run -p 80:80 sfn_client:production

* Access the application on localhost port 80
> http://127.0.0.1:80

### Using the debugger
* If tests are failing, or you found a bug running the development server, you can debug using the [inline debug tool](https://github.com/AgileVentures/sfn-client/blob/develop/HOW-TO-USE-DEBUG-SCRIPT.md).

### Creating an Issue

- You can create an issue by clicking on this [link](https://github.com/AgileVentures/sfn-client/issues/new/choose) or by clicking on the new issue button on for [github issues](https://github.com/AgileVentures/sfn-client/issues) for the sfn-client project
- Click on the [Get Started](https://github.com/AgileVentures/sfn-client/issues/new?assignees=&labels=&template=issue-template.md&title=) button to open the issue creation template.
- Fill in all the relevant sections provided in the template as you create your issue.
- Submit your issue by clicking on "Submit issue" button.

### Choosing Stories/tickets.

When deciding on an issue to work on, look for the  `Help Wanted` or `Good First Issue` tags.

Request to be added as a collaborator in our [AgileVentures.org Slack chat channel](https://agileventures.slack.com/messages/phoenix_one).

After you’re a collaborator, you can move the ticket to the `In Progress` column [here](https://waffle.io/AgileVentures/sfn-client), to indicate you’ve started work on it.

### How to create a feature branch

```
git checkout develop
```
```
git pull upstream develop
```
After you pulled the latest develop branch, make sure you have also the dependencies installed each time, by running in the console:

```
yarn
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

In order to achieve that, run:

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

After feature branch work is complete, push up to the upstream repo, for example:
```
git push --set-upstream upstream 17-add-sfn-logo
```

For your Pull Requests, ensure you have a proper title describing your task.
Make sure to add a link to the ticket you've worked on and add any screenshots if necessary.

In your pull request description please include a sensible description of your code and a tag `fixes #<issue-id>` e.g. :

```
This PR adds a CONTRIBUTING.md file and a docs directory

fixes #799
```

which will associate the pull request with the issue in the Zenhub board.

Your pull request needs to be reviewed by at least two people in the team for it to be merged in `develop` branch.

Instructions on how to review a pull request can be found [here](https://github.com/AgileVentures/sfn-client/blob/develop/HOW-TO-REVIEW-A-DEVELOP-PR.md).

## Design

### Designing new features

The Sing for Needs project follows [user-centered design principles](https://www.interaction-design.org/literature/topics/user-centered-design), accordingly the platform is built with the [different key personas](https://github.com/AgileVentures/sfn-client/blob/develop/PERSONAS.md) (artists, donors and the people behind causes) in mind. Imagine as these personas are the key stakeholders of the project.

If you want to introduce a new feature, then your responsibility is to consult each of the personas mentioned above, and empathize with their _jobs-to-do_, _major pains_ and _major gains_ to properly use this knowledge to shape the new feature. The [personas documentation](https://github.com/AgileVentures/sfn-client/blob/develop/PERSONAS.md) gives additional guidance how you can immerse yourself in the topic.

### Designing components

We try to make designing components easier with setting up some base grounds of colors, typography and layouts. Before start designing a component for the page, please consult these materials. You can find them in the src/components/styles directory.

The layout of the pages is following Bootstrap's [12 column](https://getbootstrap.com/docs/4.0/layout/grid/) grid system, but with using [CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/) and [Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) together. We recommend to have a look at the documentation, or just give a shot to [grid garden game](http://cssgridgarden.com/).

The structure of the components and spacing is suggested to follow an 8px grid system, what does that mean? It means every spacing, padding and size (width, height) of a component is following a multiple of 8. To give you a head start related to this rule, we set up the margins and paddings already to use in the styles/utilities.scss file as SASS variables.

### Design reference 🎨

In 2019 we've created a simple branding document to establish the basis for the design in terms of colors, typography and photographic direction. The values for typography and colors will be reflected in the `.scss` variables (`$variable`) as well.

Before delivering a final UI for screens, please consult this little guidance and the stylesheets (`src/styles`) if all the aspects are right in the designs. It's worth checking back because the branding document will evolve in time, so changes will occur.

![Branding_basic_document_SFN](https://user-images.githubusercontent.com/9334646/59974463-d27f9180-95ac-11e9-9c4b-9a396ab5b385.png)

As moving towards with the project the individual screens that are in-progress and assets will be documented here. Wireframes which have been implemented already are under the documentation/wireframes/finished folder.

[Design inspiration](https://dribbble.com/shots/3144986-Online-Music-Streaming-Service-Artist-Page/attachments/666587)


#### Editing Artist Page mockup & flow

![Artist Profile (edit)](https://user-images.githubusercontent.com/9334646/56868353-9fc47d00-69f1-11e9-90b1-40418ca7097f.png)
