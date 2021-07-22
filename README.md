# express-mvp
Express mvp based on https://getbuzz.io/c/learning-expressjs/stories/Learn-how-to-develop-a-NodeJS-application-4007962439.
Source code: https://github.com/buzz-software/expressjs-mvp-landing-page

## Technologies
 - [Express.js](https://expressjs.com) - Node web framework
 - [Pug.js](https://pugjs.org/) - Simple HTML templating system
 - [Nodemon](https://www.npmjs.com/package/nodemon) - Automatically reloads node app in case of source code change


# Notes

## Node / NPM
 - `npm install` in current dir installs modules from packages.json
 - `npm install -g` installs to global as opposed to current directory
 - local start of node app: `DEBUG=myapp:* npm start`
 - Nodemon: `npm install nodemon --save-dev` for developer dependency, then in `package.json` change start script to `"if [[ $NODE_ENV == 'production' ]]; then node ./bin/www; else nodemon ./bin/www; fi"`.


## Express.js
 - `express-generator` npm package for simple express app, usage: `express --view=pug myapp`
 - In Express only `public/` files can be referenced on webpages
 - /bin/www app initialization
 - /app.js main app
 
## Pug.js
 - fdfd
 
## Git
 - Current folder to local and remote git:
 ```
 $ git init-db
 $ touch .gitignore
 $ echo 'node_modules' >> .gitignore
 $ git add .
 $ git commit -a -m "Initial commit."
 $ git remote add github https://github.com/eszpee/reponame.git
  ```
