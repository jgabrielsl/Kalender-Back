import express from 'express';
import UserController from './src/controllers/UserController';
import ProdutoController from './src/services/Produto';

const app = express();
app.use(express.json());

const userController = new UserController();
const ProdutoService = new ProdutoController();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:3000');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Rotas para Usuário
app.post('/kalender/login', userController.login.bind(userController));
app.post('/kalender/user', userController.createUser.bind(userController));


// Rotas para Produto
app.get('/api/produto', ProdutoService.getProdutos.bind(ProdutoService));
app.get('/api/produto/:id', ProdutoService.getProduto.bind(ProdutoService));
app.post('/api/produto', ProdutoService.criarProduto.bind(ProdutoService));
app.put('/api/produto/:id', ProdutoService.atualizarProduto.bind(ProdutoService));
app.delete('/api/produto/:id', ProdutoService.deletarProduto.bind(ProdutoService));

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
