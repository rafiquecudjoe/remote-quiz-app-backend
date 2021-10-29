const express = require('express')
const DBConnection = require('./dbConnection')
const Router = require('./Routes/Router')
const cors = require("cors")

const app = express()

const Port = 5000

DBConnection()

app.use(express.json())
app.use(cors())
app.use(Router)


app.listen(Port, () => {
    console.log(`Server is running at port ${Port}`)
})