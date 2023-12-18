const express = require("express")
const app = express()

app.get('/' , (req,res)=>res.send(`Welcome to pirnce server`))

module.exports = app