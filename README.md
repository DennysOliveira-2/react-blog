# Simple React Blog app with JSON-Server

## Live Preview
Not available.

## How to run
### Installing dependencies
Run `npm install` on a CLI at the project root folder (the same folder where `package.json` is located).  


### Running the local JSON-Server as the database
JSON-server emulates an API so we can make fetch requests to a fake database without the need to build a proper API.  
Run it with the following command:
`npx json-server --watch data/db --port 8000`  
"data" refers to the directory that we store `db.json`, which is our emulation of a database collection storing all our blogs data.
We need to specify port as react already runs its server on localhost:3000.


### Running the react development server
Run `npm run start` on a CLI at the project root folder.  
It should automatically open http://localhost:3000 in your default browser.
