const express = require("express")
const app = express()

app.get('/', (req, res) => {
    res.status(200).json({message : 'Welcome to express'});
})

app.get('/test', (req, res) => {
    res.status(200).json({message : 'Test'});
})
app.listen(3000, () => console.log("Listening at port 3000"))

module.exports = app;