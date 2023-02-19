# Building RESTful APIs with Node.js and Express

This material is based on LinkedIn Training :
https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express

## Installation

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
Init dependencies
```
```
