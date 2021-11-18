# Memory Stack

## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Dillinger is a cloud-enabled, mobile-ready, offline-storage compatible,
AngularJS-powered HTML5 Markdown editor.

- Type some Markdown on the left
- See HTML in the right
- ✨Magic ✨

## Features

- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Import and save files from GitHub, Dropbox, Google Drive and One Drive
- Drag and drop markdown and HTML files into Dillinger
- Export documents as Markdown, HTML and PDF

## Use Cases

Loren Ipsum need to insert something here

| Endpoint                | Details                                         | Example                                                     |
| ----------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| /username               | Displays the logged dates of the specified user | https://www.memorystack.tech/void                           |
| /username/datetime/logs | Displays the logs of a specified date and user  | https://memorystack.tech/void/2021-11-18T07:44:39.970Z/logs |
| /signup                 | Your log in double quotes                       | https://memory-stack.herokuapp.com/signup                   |

Markdown is a lightweight markup language based on the formatting conventions
that people naturally use in email.
As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is \*actually- written in Markdown! To get a feel
for Markdown's syntax, type some text into the left window and
watch the results in the right.

## Installation

Memory Stack requires [Node.js](https://nodejs.org/) v10+ to run.

Visit [Memory Stack signup page](https://memorystack.tech/signup/) and create an account.

Install the mstak NPM package globally.

```sh
npm install -g mstak
```

Login into the mstak CLI application using the credentials created above.

```sh
mstak login
```

Push your first log.

```sh
mstak log "this is my very first log"
```

## Commands

Dillinger is currently extended with the following plugins.
Instructions on how to use them in your own application are linked below.
Format : mstak <command> <input>

| Command | Input                     | Details                                      | Demo                                                                        |
| ------- | ------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| login   | none                      | Login into the CLI.                          | mstak login                                                                 |
| logout  | none                      | Logs out the current user.                   | mstak logout                                                                |
| log     | Your log in double quotes | Push log to the cloud.                       | mstak log "my first log"                                                    |
| logs    | none                      | Lists all the logs you've pushed today.      | mstak logs                                                                  |
| setbio  | Your desired bio          | Changes your current bio to the desired bio. | mstak bio "A passionate developer from India, trying to make a difference!" |

## Tech

Memory Stack uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend & CLI application.
- [Express] - fast node.js network app framework [@tjholowaychuk]

## Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:

```sh
node app
```

Second Tab:

```sh
gulp watch
```

(optional) Third:

```sh
karma test
```

## License

MIT

**Free Software, Hell Yeah!**

[//]: # "These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax"
[dill]: https://github.com/joemccann/dillinger
[git-repo-url]: https://github.com/joemccann/dillinger.git
[john gruber]: http://daringfireball.net
[df1]: http://daringfireball.net/projects/markdown/
[markdown-it]: https://github.com/markdown-it/markdown-it
[ace editor]: http://ace.ajax.org
[node.js]: http://nodejs.org
[twitter bootstrap]: http://twitter.github.com/bootstrap/
[jquery]: http://jquery.com
[@tjholowaychuk]: http://twitter.com/tjholowaychuk
[express]: http://expressjs.com
[angularjs]: http://angularjs.org
[gulp]: http://gulpjs.com
[reactjs]: http://reactjs.org
[pldb]: https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md
[plgh]: https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md
[plgd]: https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md
[plod]: https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md
[plme]: https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md
[plga]: https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md
