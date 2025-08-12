const db = require('../db/gameDB');

const getGameById = (gameId, callback) => {
    const sql = 'SELECT * FROM game WHERE id = ?';
    db.query(sql, [gameId], (err, results) => {
        if (err) {
            callback(err, null);
            return;
        }
        callback(null, results[0]);
    });
};


const getALLGames = (callback) => {
    const sql = 'SELECT * FROM game';
    db.query(sql, (err, resultado) => {
        if (err) {
            console.error('❌ Erro ao buscar jogos:', err);
            callback(err, null);
            return;
        }
        callback(null, resultado);
    });
}

const updateGame = (gameId, updatedGame, callback) => {
    const sql = 'UPDATE game SET ? WHERE id = ?';
    db.query(sql, [updatedGame, gameId], (err) => {
        if (err) {
            console.error('❌ Erro ao atualizar jogo:', err);
            callback(err);
            return;
        }
        callback(null);
    });
}

const addGame = (newGame, callback) => {
    const sql = 'INSERT INTO game SET ?';
    db.query(sql, newGame, (err, resultado) => {
        if (err) {
            console.error('❌ Erro ao adicionar jogo:', err);
            callback(err, null);
            return;
        }
        callback(null, resultado.insertId);
    });
}

const deleteGame = (gameId, callback) => {
    const sql = 'DELETE FROM game WHERE id = ?';
    db.query(sql, [gameId], (err) => {
        if (err) {
            console.error('❌ Erro ao deletar jogo:', err);
            callback(err);
            return;
        }
        callback(null);
    });
}

module.exports = {
    getALLGames,
    updateGame,
    addGame,
    deleteGame,
    getGameById
};