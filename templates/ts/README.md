# @code-collabo's node-mongo API boilerplate template (typescript)

This project (@code-collabo/node-mongo-api-boilerplate-templates version 1.0.0) was generated with [@code-collabo/node-mongo-cli version 2.0.0](https://code-collabo.gitbook.io/node-mongo-v2.0.0).

## Connection option 1: Running the development server (mongoDB Atlas)
#### Step 1
Install dependencies:
````
npm install
````

#### Step 2
- Ensure you have internet connection
- Have a monogDB atlas cluster set up in the cloud
- Get your atlas mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT_ATLAS` environment variable to your preferred port number in the .env file
- Add your atlas mongoDB uri string to the `MONGODB_ATLAS_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose ATLAS connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to mongoDB atlas:
````
npm run dev:atlas
````

## Connection option 2: Running the development server (mongoDB local)
#### Step 1
Install dependencies:
````
npm install
````

#### Step 2
- Have mongoDB installed and running on your computer
- Get your local mongoDB uri string

#### Step 3
- Rename the `.env.example` file to `.env`
- Change `PORT_LOCAL` environment variable to your preferred port number in the .env file
- Add your local mongoDB uri string to the `MONGODB_LOCAL_URI` environment variable in the .env file

#### Step 4
Start the automated development server and choose LOCAL connection:
````
npm run dev
````

#### Step 4 (alternative)
You can also use the (manual) development server alternative for connection to local mongoDB:
````
npm run dev:local
````

## Automated development server and commands
- `npm run dev` is the command that starts the automated development server. It prompts you to choose your preferred connection setup type the first time you use it, and saves the chosen connection setup type for every other time you come back to use it. It also automatically installs or set up the db and server files for the chosen connection setup type.
- `npm run dev:restore` resets the automated development server back to first time usage condition i.e. it removes your previously saved connection setup type and the development server will now assume that you are a first timer. After using this command, you will now have the option to set your preferred connection type again the next time you start the server with the `npm run dev` command.
- `npm run dev:change` is useful for when you are not a first time user and want to change your connection set up type without restoring the automated development server to first time usage condition. It will prompt you to choose your connection setup type, but it will not install the db and server files for the chosen connection setup type.

## Testing with the demo setup
A demo setup (i.e. collection, endpoints etc) already exists to help you get started with using the node-mongo API boilerplate templates. Running the demo setup will help you understand how to create your own collection endpoints etc. The API design and API call requests and responses sections below will help you understand how the demo setup works.

## API design

|METHOD /endpoint|Description|Request body|
|--|--|:--:|
|GET /demo|Get all demo items in the database| No Request Body |
|POST /demo|Create/add new demo item to the database|name, age|
|GET /demo/:demoId|Get a demo item stored in the database by its ID|No Request Body|
|PATCH /demo/:demoId|Update the value of one property of an already existing demo item in the database, using the demo item's ID|propName, value|
|PUT /demo/:id|Update all properties of an existing demo item in the database, using the demo item's ID|name, age|
|DELETE /demo/:demoId|Delete a demo item from the database, using the demo item's ID|No request body|

## API call requests and responses

<details>
<summary>GET /demo</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "count": number,
    "items": [
        {
            "_id": "string",
            "name": "string",
            "age": number,
            "request": {
                "type": "string",
                "url": "string"
            }
        },
        // etc.
    ]
}
</pre>
</details>



<details>
<summary>POST /demo</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "name": "string",
    "age": number
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "newItem": {
        "_id": "string",
        "name": "string",
        "age": number,
        "request": {
            "type": "string",
            "url": "string"
        }
    }
}
</pre>
</details>



<details>
<summary>GET /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "_id": "string",
    "name": "string",
    "age": number,
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>PATCH /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
[
    { "propName": "string", "value": "string" }
]
</pre>

OR

<pre>
[
    { "propName": "string", "value": number }
]
</pre>
i.e. propName can be string "name" or "age". Value is a string when name is the propName, while value is a number when age is the propName.
<br/>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>PUT /demo/:id</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
{
    "name": "string",
    "age": number
}
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string"
    }
}
</pre>
</details>



<details>
<summary>DELETE /demo/:demoId</summary>
<br/>
    <b>Request body shape</b>
    <br/><br/>
<pre>
No request body
</pre>
<br/>
     <b>Successful response shape</b>
    <br/><br/>
<pre>
{
    "message": "string",
    "request": {
        "type": "string",
        "description": "string",
        "url": "string",
        "body": {
            "name": "string",
            "age": "string"
        }
    }
}
</pre>
</details>

## Documentation
See the links to the official documentation of the node-mongo project and community building it below:
- [Node Mongo documentation](https://code-collabo.gitbook.io/node-mongo-v2.0.0)
- [Code Collabo documentation](https://code-collabo.gitbook.io/community-doc-v1.0.0)
