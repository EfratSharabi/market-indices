import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IndicesModule } from './indices/indices.module';
import { LoggerMiddleware } from './core/middlewares/logger.middleware';

@Module({
  imports: [
    IndicesModule,
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [
    AppController
  ],
  providers: [
    AppService
  ],
  exports: [
    ConfigModule
  ]
})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes('*');
  }
}
