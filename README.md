# Task Manager

Check out the project at https://dazlamas.github.io/task-manager/app/index.html

### Tech

* Javascript ECMA6
* HTML/Sass
* Gulp
* NPM
* Local server

### Installation

Just clone this _Github_ repository at any folder of your computer from the command line:

```sh
$ git clone https://github.com/DazLamas/task-manager.git
```

Install the dependencies with _npm_:

```sh
$ cd task-manager
$ npm install
```

Tasks Manager requieres to set up a local server as it uses Javascript Modules. 
We can run one with _python_ just typping this command. Download [here](https://www.python.org/)), if needed.

```sh
# For MAC and Linux:
$ python -m SimpleHTTPServer
# Windows command:
$ python -m http.server
```
By default, the content of the directory will run at _port 8000_. Enter the following URL at your browser to access:

    http://localhost:8000/app/

A highly recommended option to _python_ is [http-server](https://www.npmjs.com/package/http-server).
To install using _npm_:

```sh
$ npm install http-server -g
```
This will install http-server globally so that it may be run from the command line:
```sh
 $ http-server
```
Running at http://localhost:8080 by default.

And that's it.

**Enjoy!!**

