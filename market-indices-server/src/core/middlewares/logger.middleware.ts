
import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  
  use(req: Request, res: Response, next: NextFunction) {
    const url = req.baseUrl;
    console.log(`${req.method} Request received for ${url}`);

    res.on('finish', () => {
      console.log(`${req.method} Request completed for ${url} `);
    });
    next();
  }
}
