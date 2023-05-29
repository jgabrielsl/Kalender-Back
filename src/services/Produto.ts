import express from 'express'
const app = express();
app.use(express.json());


let dados = [
  { id: 1, nome: 'Airmax 97', cor: 'vermelho', tamanho: '42', preco: 'R$829,99' },
  { id: 2, nome: 'Adidas', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 3, nome: 'Dunk', cor: 'azul', tamanho: '40', preco: 'R$829,99' },
  { id: 4, nome: 'Jordan', cor: 'laranja', tamanho: '43', preco: 'R$829,99' },
  { id: 5, nome: 'Yeezzy', cor: 'vermelho', tamanho: '41', preco: 'R$829,99' },
  { id: 6, nome: 'AirForce', cor: 'preto', tamanho: '39', preco: 'R$829,99' },
  { id: 7, nome: 'Jordan', cor: 'branco', tamanho: '40', preco: 'R$829,99' },
  { id: 8, nome: 'Airmax 97', cor: 'verde', tamanho: '42', preco: 'R$829,99' },
  { id: 9, nome: 'Airmax 97', cor: 'preto', tamanho: '42', preco: 'R$829,99' },
  { id: 10, nome: 'Airmax 97', cor: 'branco', tamanho: '42', preco: 'R$829,99' }
];

app.get('/api/produto', (req, res) => {
  res.json(dados);
});

app.get('/api/produto/:id', (req, res) => {
  const dado = dados.find(d => d.id === parseInt(req.params.id));
  if (dado) {
    res.json(dado);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

app.post('/api/produto', (req, res) => {
  const novoDado = req.body;
  dados.push(novoDado);
  res.status(201).json(novoDado);
});

app.put('/api/produto/:id', (req, res) => {
  const dado = dados.find(d => d.id === parseInt(req.params.id));
  if (dado) {
    dado.nome = req.body.nome;
    res.json(dado);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

app.delete('/api/produto/:id', (req, res) => {
  const index = dados.findIndex(d => d.id === parseInt(req.params.id));
  if (index !== -1) {
    const dadoRemovido = dados.splice(index, 1)[0];
    res.json(dadoRemovido);
  } else {
    res.status(404).json({ mensagem: 'Dado não encontrado' });
  }
});

export default app;