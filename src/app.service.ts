import { Injectable } from '@nestjs/common';
import { Response, Request } from 'express';
import { join } from 'path';

@Injectable()
export class AppService {
  serveStatic(req: Request, res: Response) {
    const { url } = req;
    return res.sendFile(join(__dirname, '..', `assets${url}`));
  }
}
