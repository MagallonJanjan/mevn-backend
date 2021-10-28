const PLAYER = require('../controller/playerController')
const express = require('express')
const router = express.Router()

router.get('/api/players' , PLAYER.getPlayers)
router.post('/api/players/create' , PLAYER.addPlayer)

module.exports = router