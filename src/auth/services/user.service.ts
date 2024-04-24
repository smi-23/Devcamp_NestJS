import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { UserRepository } from '../repositories';
import { SignupReqDto } from '../dto';
import { User } from '../entities';
import * as argon2 from 'argon2';
import { BusinessException } from 'src/exception';

@Injectable()
export class UserService {
  private readonly logger = new Logger(UserService.name);

  constructor(private readonly userRepository: UserRepository) {}

  testHello(): string {
    return 'test Hello';
  }

  async signup(singupReqDto: SignupReqDto): Promise<User> {
    const user = await this.userRepository.findOneByEmail(singupReqDto.email);
    if (user) {
      throw new BusinessException(
        'user',
        `${singupReqDto.email} already exist`,
        // `${singupReqDto.email} already exist, this message for users`,
        HttpStatus.BAD_REQUEST,
      );
    }
    const hashedPassword = await argon2.hash(singupReqDto.password);
    return this.userRepository.signup(singupReqDto, hashedPassword);
  }
}
