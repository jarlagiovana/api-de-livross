
# API de Livros

API REST desenvolvida utilizando **Node.js** e **Express.js** para praticar a criação de APIs, rotas, métodos HTTP e parâmetros.

Os dados dos livros são armazenados em memória utilizando um **array**, portanto não é necessário utilizar banco de dados.

## Tecnologias utilizadas

* Node.js
* Express.js
* JavaScript
* Git e GitHub

## Requisitos

Antes de executar o projeto, é necessário ter instalado:

* [Node.js](https://nodejs.org/)
* npm (instalado junto com o Node.js)

Para verificar se estão instalados:

```bash
node -v
npm -v
```

## Instalação

Clone o repositório:

```bash
git clone https://github.com/jarlagiovana/api-de-livross.git
```

Entre na pasta do projeto:

```bash
cd api-de-livross
```

Instale as dependências:

```bash
npm install
```

## Executando a API

Para iniciar o servidor:

```bash
node index.js
```

A API estará disponível em:

```text
http://localhost:3000
```

## Rotas

### Listar todos os livros

```http
GET /livros
```

Exemplo:

```text
GET http://localhost:3000/livros
```

### Buscar um livro pelo ID

```http
GET /livros/:id
```

Exemplo:

```text
GET http://localhost:3000/livros/1
```

### Cadastrar um livro

```http
POST /livros
```

Exemplo de JSON:

```json
{
  "titulo": "O Senhor dos Anéis",
  "autor": "J.R.R. Tolkien"
}
```

### Atualizar um livro

```http
PUT /livros/:id
```

Exemplo:

```text
PUT http://localhost:3000/livros/1
```

Exemplo de JSON:

```json
{
  "titulo": "O Senhor dos Anéis - Edição Especial",
  "autor": "J.R.R. Tolkien"
}
```

### Excluir um livro

```http
DELETE /livros/:id
```

Exemplo:

```text
DELETE http://localhost:3000/livros/1
```

## Observação

Este projeto **não utiliza banco de dados**.

Os livros são armazenados em um array na memória da aplicação. Isso significa que os dados serão perdidos quando o servidor for encerrado ou reiniciado.

## Objetivo do projeto

Este projeto foi desenvolvido com o objetivo de praticar:

* Criação de APIs REST;
* Express.js;
* Rotas;
* Métodos HTTP;
* Parâmetros de rota;
* Requisições e respostas HTTP;
* Manipulação de dados em memória;
* Estrutura básica de uma API utilizando Node.js.

## Autor

**Jarlagiovana**

Projeto desenvolvido para fins acadêmicos e de aprendizado.
