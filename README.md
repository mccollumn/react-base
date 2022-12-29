# React Atlas

Barebones MongoDB Atlas Login template in React
Project forked from [https://github.com/mccollumn/react-base](react-base)

# Setup

* Copy `.env_example` to `.env` in root directory
* Add the MongoDB Atlas AppId to .env
* Enable `Email/Password` validation in MongoDB Atlas
* Create a user with Email/Password in MongoDB Atlas
* Start this App
* Login on the Login page

# E2E Tests
E2E tests are run with cypress

## Run tests locally

### Set Login Environment Variables

Add the Email/Password created in MongoDB Atlas as
Environment Variables in your `.bash_aliases` file.

These will be used to login on E2E tests

```
export CYPRESS_LOGIN_EMAIL=
export CYPRESS_LOGIN_PASSWORD=
```

### Run Cypress E2E Tests
```
npm run e2e
```

## E2E Pipeline Testing
E2E tests are run in github actions
