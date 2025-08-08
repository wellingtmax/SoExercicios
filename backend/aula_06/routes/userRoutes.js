const express = require('express');

const router = express.Router();

// Importe seus controllers aqui
const userController = require('../controller/userController');

// Defina suas rotas aqui
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;