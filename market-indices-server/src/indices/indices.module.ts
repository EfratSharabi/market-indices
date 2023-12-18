import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FileReaderService } from '../shared/file-reader/file-reader.service';
import { IndicesController } from './indices.controller';
import { IndicesService } from './indices.service';

@Module({
  controllers: [IndicesController],
  providers: [
    IndicesService,
    FileReaderService,
    {
      provide: 'INDICES_DATA_PATH',
      useFactory: (configService: ConfigService) => {
        return `${configService.get('ASSETS_ROOT')}/IndicesData.json`
      },
      inject: [ConfigService]
    }
  ]
})
export class IndicesModule { }
