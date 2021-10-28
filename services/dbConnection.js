const mongoose = require('mongoose')

const connectToDatabase = () => {
    mongoose.connect('mongodb://localhost:27017/playersdb',
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    })
    .then(() => console.log('Database is connected successfully'))
    .catch((error) => console.log(`Something went wrong ${error}`))
}

  module.exports = {
      connect : connectToDatabase
  }