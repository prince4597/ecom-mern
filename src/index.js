require('dotenv').config()
const db = require("./db")
const app = require('./app')
const port = process.env.PORT || 1254

db()
    .then(() => {
        app.listen(port, () => {
            console.log(`server is running at port : ${port}`)
        })
    })
    .catch((error) => {
        console.log("MONGODB conntion Faild error", error)
        process.exit(1)
    })

