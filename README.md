# Sistema de Cadastro de Clientes

**Equipe:** 
- Antônio Davi
- Antônio Ricardo
- Diego Ribeiro
- Gerlando Prado
- Roniele Araujo
- José Wilian

**Professor:** 
Evandro de Lima Rodrigues

## Descrição
Projeto de uma API para o gerenciamento de clientes, desenvolvida utilizando o framework Express.js e um banco de dados SQLite como requisito para nota na etapa N2 da disciplina de Desenvolvimento WEB
A API permite realizar operações CRUD (Create, Read, Update, Delete) em clientes, como cadastrar, listar, atualizar e deletar registros de clientes.

## Linguagem Utilizada
- **JavaScript** (Node.js)

## Bibliotecas Utilizadas
- **Express**: Framework para criar o servidor e rotas.
- **Better-SQLite3**: Biblioteca para interagir com o banco de dados SQLite.

## Como Executar

    npm install
    node .
    

## O servidor estará disponível no endereço:
    
    http://localhost:3000/api/clientes
    

## URL da API

- **Cadastrar cliente**: `POST /clientes`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Gerlando Prado",
      "email": "gerlandoprado@gmail.com"
    }
    ```

- **Listar todos os clientes**: `GET /clientes`

- **Buscar cliente por ID**: `GET /clientes/:id`

- **Atualizar cliente**: `PUT /clientes/:id`
  - Exemplo de corpo da requisição:
    ```json
    {
      "nome": "Novo Nome",
      "email": "novoemail@gmail.com"
    }
    ```

- **Deletar cliente**: `DELETE /clientes/:id`