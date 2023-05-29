import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createUser(req: Request, res: Response) {
  try {
    const { nome, email, senha } = req.body;
    const user = await prisma.user.create({
      data: {
        nome,
        email,
        senha,
      },
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao criar usuário' });
  }
}

export async function loginUser(req: Request, res: Response) {
  try {
    const { email, senha } = req.body;
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || user.senha !== senha) {
      res.status(401).json({ error: 'Credenciais inválidas' });
      return;
    }
    res.json({ message: 'Login bem-sucedido' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao fazer login' });
  }
}