require('dotenv').config();
const express = require('express'),
      session = require('express-session'),
      app = express(),
      {SESSION_SECRET} = process.env;

app.use(express.json());

app.use(session({
    resave: false,
    saveUninitialized:true,
    secret: SESSION_SECRET
}))

app.listen(3333, () => console.log(`Listening on port ${3333}`));