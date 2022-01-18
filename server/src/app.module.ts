import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';
import { FileService } from './file/file.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
  imports: [
    TrackModule,
    FileService,
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.pn9cq.mongodb.net/music-platform?retryWrites=true&w=majority',
    ),
  ],
})
export class AppModule {}
