const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3000;

let livros = [
    {
        id: 1,
        titulo: "Orgulho e Preconceito",
        autor: "Jane Austen",
        ano: 1813
    },
    {
        id: 2,
        titulo: "Como Eu Era Antes de Você",
        autor: "Jojo Moyes",
        ano: 2012
    },
    {
        id: 3,
        titulo: "Um Dia",
        autor: "David Nicholls",
        ano: 2009
    },
    {
        id: 4,
        titulo: "A Culpa é das Estrelas",
        autor: "John Green",
        ano: 2012
    },
    {
        id: 5,
        titulo: "Diário de uma Paixão",
        autor: "Nicholas Sparks",
        ano: 1996
    }
];

app.get('/livros', (req, res) => {
    res.json(livros);
});


app.get('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const livro = livros.find(livro => livro.id === id);

    if (!livro) {
        return res.status(404).json({
            mensagem: 'Livro não encontrado'
        });
    }

    res.json(livro);
});


app.post('/livros', (req, res) => {
    const { titulo, autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
        return res.status(400).json({
            mensagem: 'Título, autor e ano são obrigatórios'
        });
    }

    const novoLivro = {
        id: livros.length > 0 ? livros[livros.length - 1].id + 1 : 1,
        titulo,
        autor,
        ano
    };

    livros.push(novoLivro);

    res.status(201).json(novoLivro);
});


app.put('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = livros.findIndex(livro => livro.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Livro não encontrado'
        });
    }

    const { titulo, autor, ano } = req.body;

    if (!titulo || !autor || !ano) {
        return res.status(400).json({
            mensagem: 'Título, autor e ano são obrigatórios'
        });
    }

    livros[indice] = {
        id,
        titulo,
        autor,
        ano
    };

    res.json(livros[indice]);
});


app.delete('/livros/:id', (req, res) => {
    const id = Number(req.params.id);

    const indice = livros.findIndex(livro => livro.id === id);

    if (indice === -1) {
        return res.status(404).json({
            mensagem: 'Livro não encontrado'
        });
    }

    const livroExcluido = livros.splice(indice, 1);

    res.json({
        mensagem: 'Livro excluído com sucesso',
        livro: livroExcluido[0]
    });
});

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});

