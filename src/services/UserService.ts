import express from 'express';
import { createUser, loginUser } from '../controllers/UserController';

const app = express();

app.use(express.json());

// Rotas do usuário
app.post('/kalender/userinsert', createUser);
app.post('/kalender/login', loginUser);

// Outras rotas...

export default app;

app.listen(3003, () => {
    console.log('API está rodando na porta 3003');
});