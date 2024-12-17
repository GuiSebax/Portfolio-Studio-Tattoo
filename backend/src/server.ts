import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5000;

app.use(cors());

app.use('/images', express.static(path.join(__dirname, '../images')));

app.get('/api/images', (req, res) => {
    const fs = require('fs');
    const imagesDir = path.join(__dirname, '../images');

    // Ler os arquivos na pasta imagens
    fs.readdir(imagesDir, (err: Error, files: string[]) => {
        if (err) {
            res.status(500).send("Erro ao listar imagens.");
        } else {
            const imageURls = files.map((file) => `http://localhost:${PORT}/images/${file}`);
            res.json(imageURls);
        }
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})