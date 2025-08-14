const { DataTypes } = require('sequelize');
const sequelize = require('../database/db');

const Livro = sequelize.define('Livro', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    autor: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ano_publicacao: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    genero: {
        type: DataTypes.STRING,
        allowNull: false
    },
    resumo: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    imagem: {
        type: DataTypes.STRING,
        allowNull: true
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    tableName: 'livros',
    timestamps: false
});

module.exports = Livro;