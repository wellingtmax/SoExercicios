const gameService = require('../service/gameService');


const getGameById = (req, res) => {
    const gameId = req.params.id;
    gameService.getGameById(gameId, (err, game) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao buscar jogo' });
        }
        if (!game) {
            return res.status(404).json({ error: 'Jogo não encontrado' });
        }
        res.json(game);
    });
};


const getGames = (req, res) => {
    gameService.getALLGames((err, games) => {
        if (err){
            return res.status(500).json({ error: 'Erro ao buscar jogos' });
        }
        res.json(games);
    });
};


const postGames = (req, res) => {
    const newGame = req.body;
    gameService.addGame(newGame, (err, gameId) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao adicionar jogo' });
        }
        res.status(201).json({ id: gameId });
    });
};


const putGames = (req, res) => {
    const updatedGame = req.body;
    const gameId = req.params.id;
    gameService.updateGame(gameId, updatedGame, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao atualizar jogo' });
        }
        res.status(204).send();
    });
};

const deleteGames = (req, res) => {
    const gameId = req.params.id;
    gameService.deleteGame(gameId, (err) => {
        if (err) {
            return res.status(500).json({ error: 'Erro ao deletar jogo' });
        }
        res.status(204).send();
    });
};

module.exports = {
    getGames,
    postGames,
    putGames,
    deleteGames,
    getGameById
};

