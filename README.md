[![Build Status](https://travis-ci.org/sanketphansekar/tournament-management.svg?branch=master)](https://travis-ci.org/sanketphansekar/tournament-management)

# Tournament Management web app

Software allows admin to update scores of matches and allocate points to users who have predicted the score.

## Configuration

Create .env file and specify your environment variables.

## DB creation and migration

```
#Create database
node -r dotenv/config node_modules/.bin/sequelize db:create

#Create tables
node -r dotenv/config node_modules/.bin/sequelize db:migrate

node -r dotenv/config node_modules/.bin/sequelize db:seed:all
```

## Steps to run project

```
npm i

#Development
npm run dev
```

Server will be running on port 3000.
