import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response, Request } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  serveStatic(@Req() req: Request, @Res() res: Response) {
    this.appService.serveStatic(req, res);
  }
}
