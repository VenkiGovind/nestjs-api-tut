import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PhotoModule } from './photo/photo.module';
import { MemberModule } from './member/member.module';

@Module({
  imports: [UserModule, PhotoModule, MemberModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
