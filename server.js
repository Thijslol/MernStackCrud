const express = require('express')
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();


const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


const uri = process.env.ATLAS_URI;
console.log('MongoDB Connection URI:', uri);
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

;

const examplesRouter = require('./routes/example')


app.use('/examples', examplesRouter);

;