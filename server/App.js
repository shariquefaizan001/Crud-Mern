require("dotenv").config();
const express = require('express')
const app = express()
const mongoose = require("mongoose")
const port = 8003
const cors = require("cors")
// const db = 'mongodb+srv://sharique:easypass@cluster0.ocn3r.mongodb.net/?retryWrites=true&w=majority'
const users = require('./models/userSchema')
// require('./DB/Conn')
require('./db/Conn')

const router= require('./routes/router')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})