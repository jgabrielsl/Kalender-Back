import { Request, Response } from 'express';
import UserService from '../services/UserService';

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const { nome, email, senha } = req.body;
      const userService = new UserService();

      const user = await userService.createUser(nome, email, senha);

      return res.status(201).json(user);
    } catch (error) {
      return res.status(500).json({ error: 'Erro ao criar usuário.' });
    }
  }

  public async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, senha } = req.body;
      const userService = new UserService();

      const token = await userService.login(email, senha);

      return res.status(200);
    } catch (error) {
      return res.status(401).json({ error: 'Login inválido.' });
    }
  }
}

export default UserController;
