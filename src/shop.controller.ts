import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response} from 'express';
import data = require('./shops.json');

@Controller('shop')
export class ShopController {
  constructor() {}

  @Get('shops')
  getAll(@Res() res : Response) {
    res.status(HttpStatus.OK).json(data);
  }
}
