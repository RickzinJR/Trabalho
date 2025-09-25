# API de tarefas

API REST em Node.js e Express para gerenciamento de tarefas.

## Executar localmente

1. descompacte a pasta e entre nela:

cd tarefas-api

2. instale dependências:

colocar comando no console: npm install

3. rodar em desenvolvimento:

colocar comando no console: npm run dev

4. rodar:

colocar comando no console: npm start

O servidor iniciará em `http://localhost:3000`.

## Exemplos (copiar)

GET

Copiar e colar: http://localhost:3000/tarefas

POST

Copiar e colar: -X POST http://localhost:3000/tarefas -H "Content-Type: application/json" -d '{ "titulo":"Estudar Node", "concluida": false }'

PUT

Copiar e colar: -X PUT http://localhost:3000/tarefas/1 -H "Content-Type: application/json" -d '{ "titulo":"Estudar Node.js", "concluida": true }'

DELETE:

Copiar e colar: -X DELETE http://localhost:3000/tarefas/1

