const Player = require('../models/players')

const getPlayers = (req, res) => {
    return res.json('API success')
}

const addPlayer = (req, res) => {
    let player = new Player({
        'firstName': req.body.firstName,
        'lastName': req.body.lastName,
        'emailAddress': req.body.emailAddress,
        'age': req.body.age,
        'playingPosition': req.body.playingPosition
    });
    if (!player) {
        res.status(400).send({
            message: 'A player cannot be empty'
        });
        return;
    }
    player.save(player)
        .then(data => {
            res.send(data)
        })
        .catch(error => {
            res.status(500).send({
                message: error.message
            })
        });
}

module.exports = {
    getPlayers,
    addPlayer
}