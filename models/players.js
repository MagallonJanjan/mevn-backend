const mongoose = require('mongoose')

const Player =  mongoose.model('Player',{
    firstName : { type : String , required : true },
    lastName : { type : String , required : true },
    emailAddress : { type : String , required : true },
    age : { type : Number , required : true },
    playingPosition : { type : String , required : true }, 
})



module.exports = Player;
    

