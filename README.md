# BCGGetReq
The get request sent to BCG.

A very simple method was followed to get the JSON result back from the BCG Server using the API Key.     
Several slightly complex programming methods could've been used for the get and post request using several programming languages. HTTP REST Clients such as Postman and/or Insomnia could have easily done the job too.
  
For this particular case a simple get and post request to the BCG server using "axios", a promise based HTTP client for javascript was used. This particular code available in "register.js" has been tested in NodeJS.
 
 1. Please make sure to run a simple "yarn install" or "npm install" to install axios.
 2. "node register.js" runs the register.js file which gets an API key and sends a post request to register my name and email.
