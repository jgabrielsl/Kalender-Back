import express from 'express';
import UserController from './src/controllers/UserController';
import ProdutoController from './src/services/Produto';

const app = express();
app.use(express.json());

const userController = new UserController();
const produtoController = new ProdutoController();

// Rotas para Usuário
app.post('/kalender/login', userController.login.bind(userController));
app.post('/kalender/user', userController.createUser.bind(userController));


// Rotas para Produto
app.get('/api/produto', produtoController.getProdutos.bind(produtoController));
app.get('/api/produto/:id', produtoController.getProduto.bind(produtoController));
app.post('/api/produto', produtoController.criarProduto.bind(produtoController));
app.put('/api/produto/:id', produtoController.atualizarProduto.bind(produtoController));
app.delete('/api/produto/:id', produtoController.deletarProduto.bind(produtoController));

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
