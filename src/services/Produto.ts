import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

class ProdutoService {
  public async getProdutos(req: Request, res: Response): Promise<void> {
    const produtos = await prisma.produto.findMany();
    res.json(produtos);
  }

  public async getProduto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const produto = await prisma.produto.findUnique({ where: { id: parseInt(id) } });
    if (produto) {
      res.json(produto);
    } else {
      res.status(404).json({ mensagem: 'Dado não encontrado' });
    }
  }

  public async criarProduto(req: Request, res: Response): Promise<void> {
    const novoProduto = req.body;
    const produto = await prisma.produto.create({ data: novoProduto });
    res.status(201).json(produto);
  }

  public async atualizarProduto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const { nome } = req.body;
    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: { nome },
    });
    res.json(produto);
  }

  public async deletarProduto(req: Request, res: Response): Promise<void> {
    const { id } = req.params;
    const produto = await prisma.produto.delete({ where: { id: parseInt(id) } });
    res.json(produto);
  }
}

export default ProdutoService;
