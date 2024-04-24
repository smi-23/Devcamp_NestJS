import { Module } from '@nestjs/common';
import { UserService } from './services';
import { AuthController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities';
import { UserRepository } from './repositories';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule, TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [UserService, UserRepository],
  exports: [UserService, UserRepository],
})
export class AuthModule {}
