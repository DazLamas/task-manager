# Task Manager

Check out Task Manager at https://dazlamas.github.io/task-manager/app/index.html

### Tech

* Javascript ECMA6
* HTML/Sass
* Gulp
* NPM

### Installation

Clone Github project at you computer:

```sh
$ git clone https://github.com/DazLamas/task-manager.git
```

Install the dependencies and devDependencies and start the server.

```sh
$ cd task-manager
$ npm install
```

Tasks Manager requieres to set up a local server to run at your computer, as it uses Javascript Modules. 
If you have python installed ([dowload here](https://www.python.org/)), just type:

```sh
# For MAC and Linux:
$ python -m SimpleHTTPServer
# Windows command:
$ python -m http.server
```
By default, the content of the directory will run at port 8000. Enter the following URL at your browser:

    http://localhost:8000/app/

A highly recommended option to pythn is [http-server](https://www.npmjs.com/package/http-server). But you must installing it...

```sh
$ npm install http-server -g
```
This will install http-server globally so that it may be run from the command line:
```sh
 $ http-server [path] [options]
```

