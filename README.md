# app-tournaments-manager

App to manage soccer tournaments (to sports and e-sports).

# Sprint Planning
  - [Estórias do produto ](https://docs.google.com/document/d/e/2PACX-1vRCkVYuS-Bp5OeSX8_XfoqqWIOJMiiq7Zqc3sdZFgdVOVvkk1agHI-8_KcbdmDfPV2TR69pgNxHX70T/pub)
  - [Sprint 0](https://trello.com/b/cmEznTJt/sprint-0)

### Tech

app-tournaments-manager uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](https://breakdance.github.io/breakdance/) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantaneously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT