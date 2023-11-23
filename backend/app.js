const express = require('express');
const connectToDb = require('./config/connectDb');
const User = require('./models/User.model')
const app = express();
const PORT = 8000;
const bodyParser = require('body-parser');
const cors = require('cors')

const adminRoutes = require('./routes/index.routes')

// parse application/x-www-form-urlencoded


connectToDb();


app.use(cors("*"))
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use("/",adminRoutes)

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});