import { PrismaClient, User } from '@prisma/client';
import bcrypt from 'bcrypt';

class UserService {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  public async createUser(nome: string, email: string, senha: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(senha, 10);

    const user = await this.prisma.user.create({
      data: {
        nome,
        email,
        senha: hashedPassword,
      },
    });

    return user;
  }

  public async login(email: string, senha: string): Promise<string> {
    const user = await this.prisma.user.findUnique({ where: { email } });

    if (!user) {
      throw new Error('Usuário não encontrado.');
    }

    const passwordMatch = await bcrypt.compare(senha, user.senha);

    if (!passwordMatch) {
      throw new Error('Senha incorreta.');
    }

    // Aqui você pode gerar e retornar um token de autenticação

    return 'Autenticado com sucesso';
  }
}

export default UserService;
