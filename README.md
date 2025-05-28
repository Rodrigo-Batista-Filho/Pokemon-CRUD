# Pokémons CRUD - Sistema de Cadastro de Pokémons

Sistema web para cadastro, listagem, edição e exclusão de Pokémons, usando React no frontend e Node.js/Express no backend com MongoDB.

---

## Funcionalidades

- Listar Pokémons cadastrados
- Cadastrar novo Pokémon (código, nome, tipo primário, tipo secundário, data de captura)
- Editar Pokémons existentes
- Excluir Pokémons
- Interface simples em React com React Router
- Comunicação via API REST

---

## Tecnologias

- **Frontend:** React, React Router, Axios, Bootstrap  
- **Backend:** Node.js, Express  
- **Banco de dados:** MongoDB  

---

## Como executar

### Backend

git clone <URL-backend>
cd backend
npm install
# configurar arquivo .env com MONGO_URI e PORT
npm start

### Frontend

git clone <URL-frontend>
npm install
npm start
Acesse http://localhost:3000 no navegador.

## Uso

- A lista inicial mostra os Pokémons cadastrados.
- Clique em **Cadastrar Novo Pokémon** para adicionar um novo.
- Use **edit** para modificar um Pokémon.
- Use **delete** para remover um Pokémon.
- Campos obrigatórios: código (único), nome, tipo primário.