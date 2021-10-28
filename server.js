const express = require('express');
const cors = require('cors')
const app = express()

const PORT = process.env.PORT || 3000;

var corsOptions = {
    origin: PORT
  };

app.use(cors(corsOptions));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

//Database Setup
const database = require('./services/dbConnection')
database.connect()

const PlayerRoute = require('./routes/playerRoute')
app.use(PlayerRoute)



app.listen(PORT, () => console.log(`Server running at port ${PORT}`))