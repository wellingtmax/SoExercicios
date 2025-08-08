const multer = require('multer');
const path = require('path');

// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/') // Pasta onde as imagens serão salvas
    },
    filename: function (req, file, cb) {
        // Gera um nome único para o arquivo
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

// Filtro para aceitar apenas imagens
const fileFilter = (req, file, cb) => {
    // Verifica se o arquivo é uma imagem
    if (file.mimetype.startsWith('image/')) {
        cb(null, true);
    } else {
        cb(new Error('Apenas arquivos de imagem são permitidos!'), false);
    }
};

// Configuração do multer
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 5 * 1024 * 1024 // Limite de 5MB
    },
    fileFilter: fileFilter
});

module.exports = upload;
