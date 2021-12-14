# Memory Stack

## _The Last Markdown Editor, Ever_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

📜 Memory stack is a developer oriented, social journaling platform.

- Open your terminal
- Log your thought
- See your log being read by the world
- ✨Magic ✨

## Features

- Explore random events in the life of people across the globe.
- Minimal user interface.
- Explore "a moment" in the life of other users or "delve" into their stack of memories!
- mstak log "Emacs sucks!"...its that simple to make a small talk!
- Login, push your logs, monitor log histories, logout all of it from CLI!


## Installation

Memory Stack requires [Node.js](https://nodejs.org/) v10+ to run.

Visit [Memory Stack signup page](https://memorystack.live/signup/) and create an account.

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

Memory stack's CLI is used to log your thoughts on to the web.
All the CLI commands are listed below.

| Command | Input                     | Details                                      | Demo                                                                        |
| ------- | ------------------------- | -------------------------------------------- | --------------------------------------------------------------------------- |
| login   | none                      | Login into the CLI.                          | mstak login                                                                 |
| logout  | none                      | Logs out the current user.                   | mstak logout                                                                |
| log     | Your log in double quotes | Push log to the cloud.                       | mstak log "my first log"                                                    |
| logs    | none                      | Lists all the logs you've pushed today.      | mstak logs                                                                  |
| setbio  | Your desired bio          | Changes your current bio to the desired bio. | mstak bio "A passionate developer from India, trying to make a difference!" |

Format : mstak <command> <input>

## Use Cases

This is how to use the web interface of Memory stack

| Endpoint                | Details                                         | Example                                                     |
| ----------------------- | ----------------------------------------------- | ----------------------------------------------------------- |
| /username               | Displays the logged dates of the specified user | https://www.memorystack.live/void                           |
| /username/date/logs | Displays the logs of a specified date and user  | https://memorystack.tech/void/14-12-2021/logs |
| /signup                 | Your log in double quotes                       | https://www.memorystack.live/signup                   |


## Tech

Memory Stack uses a number of open source projects to work properly:

- [ReactJS] - HTML enhanced for web apps!
- [node.js] - evented I/O for the backend & CLI application.
- [Express] - fast node.js network app framework [@tjholowaychuk]

## Contributors

Memory stack is just an infant right now. We need you to make it something big. 

<a href="https://github.com/memory-stack/memory-stack/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=memory-stack/memory-stack" />
</a>

Made with [contrib.rocks](https://contrib.rocks).


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
