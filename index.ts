const express = require('express');

import UserController from './src/controllers/UserController';

const app = express();
const PORT = 3003;

app.use(express.json());

const userController = new UserController();

app.post('/seuprojeto/userinsert', userController.createUser);
app.post('/seuprojeto/login', userController.login);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
