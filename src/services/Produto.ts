import express, { Request, Response } from 'express';

class ProdutoService {
  private dados = [
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

  public getProdutos(req: Request, res: Response): void {
    res.json(this.dados);
  }

  public getProduto(req: Request, res: Response): void {
    const dado = this.dados.find(d => d.id === parseInt(req.params.id));
    if (dado) {
      res.json(dado);
    } else {
      res.status(404).json({ mensagem: 'Dado não encontrado' });
    }
  }

  public criarProduto(req: Request, res: Response): void {
    const novoDado = req.body;
    this.dados.push(novoDado);
    res.status(201).json(novoDado);
  }

  public atualizarProduto(req: Request, res: Response): void {
    const dado = this.dados.find(d => d.id === parseInt(req.params.id));
    if (dado) {
      dado.nome = req.body.nome;
      res.json(dado);
    } else {
      res.status(404).json({ mensagem: 'Dado não encontrado' });
    }
  }

  public deletarProduto(req: Request, res: Response): void {
    const index = this.dados.findIndex(d => d.id === parseInt(req.params.id));
    if (index !== -1) {
      const dadoRemovido = this.dados.splice(index, 1)[0];
      res.json(dadoRemovido);
    } else {
      res.status(404).json({ mensagem: 'Dado não encontrado' });
    }
  }
}

export default ProdutoService;
