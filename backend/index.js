const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const rootRouter = require('./routes/index');

app.use(express.json());
app.use(cors());

app.use('/', rootRouter);

app.listen(PORT, () => {
    console.log(`Running on port: ${PORT}`)
});