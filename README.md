# Project Title
IBM Bluemix Node Starter API

### Description
Basic node application to be deployed on IBM Bluemix

### Requirements
- Node version 6.x
- Npm version 3.x
- CF and Bluemix CLI tools
    - [CF CLI Download]
    - [Bluemix CLI Download]

### Local Deploy
Navigate to root directory and install dependencies
```sh
$ npm install
```

Use npm start script to start application
```sh
$ npm run start
```
The application will run on localhost:3000 by default, this can be overridden by using the PORT and HOST environment variables

### Bluemix Deploy
After installing the requirements, login to bluemix api
```sh
$ bluemix api https://api.ng.bluemix.net
$ bluemix login -u [USER] -o [ORG] -s [SPACE]
```
Create an app using the Node SDK with Cloud Foundry

Navigate to the root directory of the submission
Deploy the source to the created app using the cf push command
```sh
$ cf push [APP_NAME]
```

The pre-deployed app can be found at:
https://ecampbell565-bluemix-node-starter.mybluemix.net/

### Testing
Run the Postman collection using the npm script test
```sh
$ npm run test
```
Test results will then be displayed

   [CF CLI Download]: <https://github.com/cloudfoundry/cli/releases>
   [Bluemix CLI Download]: <http://clis.ng.bluemix.net/ui/home.html>
