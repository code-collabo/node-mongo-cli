# Demo CRUD app

## Interacting with database

You can use postman or any other tool to add data or remove data from the database. To make it easy to test that all is well setup and also to show example usage of the template with a client app in development, you can download the [node-mongo-demo-app](https://github.com/code-collabo/node-mongo-demo-app).

Change directory \(cd\) into the root of the demo app and install dependencies:

```text
npm install
```

Start the app:

```text
npm start
```

View the demo app in the browser at [http://localhost:4200](http://localhost:4200). Although the app is built with angular, you don't need to have any knowledge of how to write an angular application. Just interact with form supplying name and age \(these have been configured in the template's src/api/ folder\). Make sure to keep port 3000 still running. You will see your entries in a table under the form. You can also always refresh your browser for [http://localhost:3000/demo](http://localhost:3000/demo) to see that the changes you made are now returned as json and are in the database.

