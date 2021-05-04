const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const rootRouter = require('./routes/index');
const sequelize = require("./helpers/database");
const User = require("./models/User");

app.use(express.json());
app.use(cors());

app.use('/', rootRouter);

// DB connect test
sequelize.authenticate({force:true})
    .then(result => console.log("CONNECT"))
    .catch(err => console.log("ERROR"))

sequelize.sync()
    .then(result => console.log("SYNC DATABASE"))
    .catch(err => console.log("SYNC ERR"))


app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});