# mevn-starter
Minimal MEVN boilerplate.

The server is setup to run locally on port 8081.

Live version:  <a href="https://mevn-starter.herokuapp.com/">https://mevn-starter.herokuapp.com/</a>

Clone repo:
```
$ git clone https://github.com/codymj/mevn-starter
```

Install server and client deps:
```
$ cd mevn-starter && npm i && cd client && npm i
```

Start server (from root directory):
```
$ node server/server.js
```

Front-end work is done in the client directory and should not be committed or
hosted on your web server. To test changes on your front-end, run:
```
npm run serve
```
from the client directory and view on http://localhost:8080. To publish to your
web server, run:
```
npm run build
```
which will copy all static data (index.html, js, css, etc) to the server/public
folder which you will host on the web server.
