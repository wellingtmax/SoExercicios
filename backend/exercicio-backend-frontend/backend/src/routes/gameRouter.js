const express = require('express');
const router = express.Router();
const gameController = require('../controller/gamerController');

router.get('/games', gameController.getGames);
router.get('/games/:id', gameController.getGameById);
router.post('/games', gameController.postGames);
router.put('/games/:id', gameController.putGames);
router.delete('/games/:id', gameController.deleteGames);


module.exports = router;