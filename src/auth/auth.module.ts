import { Module } from '@nestjs/common';
import { AuthService, UserService } from './services';
import { AuthController } from './controllers';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AccessLog, AccessToken, RefreshToken, User } from './entities';
import {
  AccessTokenRepository,
  RefreshTokenRepository,
  UserRepository,
  AccessLogRepository,
} from './repositories';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    HttpModule,
    ConfigModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('ACCESS_TOKEN_EXPIRY'),
        },
      }),
    }),
    TypeOrmModule.forFeature([User, AccessToken, RefreshToken, AccessLog]),
  ],
  controllers: [AuthController],
  providers: [
    UserService,
    AuthService,
    UserRepository,
    RefreshTokenRepository,
    AccessTokenRepository,
    AccessLogRepository,
  ],
  exports: [
    UserService,
    AuthService,
    UserRepository,
    RefreshTokenRepository,
    AccessTokenRepository,
    AccessLogRepository,
  ],
})
export class AuthModule {}
