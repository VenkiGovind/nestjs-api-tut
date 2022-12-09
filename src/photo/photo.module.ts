import { Module } from '@nestjs/common';
import { PhotoService } from '../photo/entities/photo.service';
import { PhotoController } from './photo.controller';
import { DatabaseModule } from '../db/db.module';
import { photoProviders } from './entities/photo.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [PhotoController],
  providers: [...photoProviders, PhotoService],
})
export class PhotoModule {}
