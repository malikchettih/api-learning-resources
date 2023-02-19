# Building RESTful APIs with Node.js and Express

This material is based on LinkedIn Training :
https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express

## Env Setup

### NodeJs installation
Install last node version using nvm
```
C:\Users\mchettih>nvm list

  * 18.12.1 (Currently using 64-bit executable)
    16.15.0

C:\Users\mchettih>nvm install 18.14.1
Downloading node.js version 18.14.1 (64-bit)...
Extracting...
Complete


Installation complete. If you want to use this version, type

nvm use 18.14.1

C:\Users\mchettih>nvm use 18.14.1
Now using node v18.14.1 (64-bit)

```

### Project init

Init project
```
C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm init
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (linkedin-building-restful-apis-with-node-js-and-express)
version: (1.0.0)
description: https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express
entry point: (index.js)
test command:
git repository: https://github.com/malikchettih/api-learning-resources
keywords: API Rest Nodejs Express
author: malik.chettih@gmail.com
license: (ISC)
About to write to C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express\package.json:

{
  "name": "linkedin-building-restful-apis-with-node-js-and-express",
  "version": "1.0.0",
  "description": "https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/malikchettih/api-learning-resources.git"
  },
  "keywords": [
    "API",
    "Rest",
    "Nodejs",
    "Express"
  ],
  "author": "malik.chettih@gmail.com",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/malikchettih/api-learning-resources/issues"
  },
  "homepage": "https://github.com/malikchettih/api-learning-resources#readme"
}

Is this OK? (yes) yes
```
Init prodcution dependencies

```
C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm install express --save

added 57 packages, and audited 58 packages in 11s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm install mongodb --save

added 16 packages, and audited 74 packages in 12s

7 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm install mongoose --save

added 88 packages, and audited 162 packages in 34s

12 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```
C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm i --save nodemon body-parser

added 27 packages, and audited 499 packages in 7s

20 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (2 low, 9 high)

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.
```

Init development dependencies
```
C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm i --save-dev babel-cli
npm WARN deprecated source-map-url@0.4.1: See https://github.com/lydell/source-map-url#deprecated
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm WARN deprecated source-map-resolve@0.5.3: See https://github.com/lydell/source-map-resolve#deprecated
npm WARN deprecated chokidar@1.7.0: Chokidar 2 will break on node v14+. Upgrade to chokidar 3 with 15x less dependencies.
npm WARN deprecated core-js@2.6.12: core-js@<3.23.3 is no longer maintained and not recommended for usage due to the number of issues. Because of the V8 engine whims, feature detection in old core-js versions could cause a slowdown up to 100x even if nothing is polyfilled. Some versions have web compatibility issues. Please, upgrade your dependencies to the actual version of core-js.

added 235 packages, and audited 397 packages in 2m

16 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (2 low, 9 high)

To address issues that do not require attention, run:
  npm audit fix

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

C:\Consulting\Workspaces\api-learning-resources\Linkedin-building-restful-apis-with-node-js-and-express>npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0

added 75 packages, and audited 472 packages in 47s

17 packages are looking for funding
  run `npm fund` for details

11 vulnerabilities (2 low, 9 high)

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

```


### Mongodb setup

We will use docker to run mongodb. Lets create a mongodb\docker-compose.yml file:
```
version: '3.7'
services:
  mongodb_container:
    image: mongo:latest
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: rootpassword
    ports:
      - 27017:27017
    volumes:
      - mongodb_data_container:/data/db

volumes:
  mongodb_data_container:
```

To run the mongodb container:
```
docker-compose up -d
```

## Server Build

### Server setup

Change package.json
```
  "scripts": {
    "start": "nodemon ./index.js --exec -e js"
  },
```

create index.js at the root of the project
```
import express from 'express';

const app = express();
const PORT = 4000;

app.get('/', (request, response) =>{
    response.send('Node and express server running on port ${PORT}')
});

app.listen(PORT, () => {
    console.log('You server is running on port ${PORT}')
});
```


