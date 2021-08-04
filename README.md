# express-mvp
Express mvp based on https://getbuzz.io/c/learning-expressjs/stories/Learn-how-to-develop-a-NodeJS-application-4007962439.
Source code: https://github.com/buzz-software/expressjs-mvp-landing-page

## Technologies
 - [Express.js](https://expressjs.com) - Node web framework
 - [Pug.js](https://pugjs.org/) - Simple HTML templating system
 - [Nodemon](https://www.npmjs.com/package/nodemon) - Automatically reloads node app in case of source code change
 - [Postgresql](https://www.postgresql.org/) - DB
 - [Sequelize ORM](https://sequelize.org/) - Object-relational Mapping module 
 - [Passport.js](http://www.passportjs.org/) - Authentication for Node



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
 
## Git
 - Current folder to local and remote git:
 ```
 $ git init-db
 $ git branch -m main
 $ touch .gitignore
 $ echo 'node_modules' >> .gitignore
 $ git add .
 $ git commit -a -m "Initial commit."
 $ git remote add github https://github.com/eszpee/reponame.git
  ```
## Postgresql
 - Install: `brew install postgresql`
 - Start: `brew services start postgresql`
 - `psql postgres` - connects to DB from CLI, to create user, list dbs, etc.
 - `CREATE ROLE "username" WITH LOGIN PASSWORD 'password;'` to create user; `CREATE DATABASE "sampledb";` to create database. (DROP ROLE or DROP DATABASE deletes.)
 - `\l+` - shows databases; `\c dbname` - connects to dbname database; `\dt` - shows tables.
 - Sample SQLs:
    - `SELECT "id", "username", "firstname", "lastname", "password", "email", "is_admin", "createdAt", "updatedAt" FROM "Users" AS "User" WHERE "User"."id" = '6ad2bba8-0853-4e99-8eb7-b9e7994ef2c3';`
    - `UPDATE "Users" AS "User" SET "is_admin" = true WHERE "User"."id" = '6ad2bba8-0853-4e99-8eb7-b9e7994ef2c3';`
 
## Sequelize 
 - Install:
   - `npm install sequelize --save; npm install pg --save;` to install with Postgresql driver;
   - `npm install sequelize-cli -g` - CLI for Sequelize
   - `touch ./.sequelizerc` for initial paths (see [.sequelizerc](.sequelizerc).)
   - `sequelize init` to create config and other JS files.
 - Files under `migrations` are recipes to create/drop tables, so you can describe data structure in code. They are run by filename ABC order, so filenames are datetime-something.js.
   - Run up: `sequelize db:migrate`
   - Run down: `sequelize db:migrate:undo`

