import { EntityRepository, Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password: plain } = authCredentialDto;
    const password = await bcrypt.hash(plain, 13);
    const user = this.create({ username, password });
    try {
      await this.save(user);
    } catch (e) {
      if (e.code === '23505')
        throw new ConflictException('Username already exists');
      throw new InternalServerErrorException();
    }
  }
}
