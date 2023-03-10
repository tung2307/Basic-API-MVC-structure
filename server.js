var express = require('express');
var app = express();
const path = require('path');

require('dotenv').config()
const port = process.env.PORT;

app.use(express.json())
// Global Error Handler. Important function params must start with err
app.use((err, req, res, next) => {
    console.log(err.stack);
    console.log(err.name);
    console.log(err.code);

    res.status(500).json({
        message: "Something went wrong",
    });
})

app.use("/", require("./route/userRoute"));

app.use("/public", express.static(path.join(__dirname, 'public')));


app.listen(port, () => {
    console.log(`App listening to port ${port}`);
});