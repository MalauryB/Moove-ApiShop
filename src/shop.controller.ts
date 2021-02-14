import { Controller, Get, HttpStatus, Res } from '@nestjs/common';
import { Response} from 'express';
import dataShops = require('./shops.json');
import dataShopId = require('./shopId.json');

@Controller('shop')
export class ShopController {
  constructor() {}

  @Get('shops')
  getAll(@Res() res : Response) {
    res.status(HttpStatus.OK).json(dataShops);
  }

  @Get('shop/:id')
  getShopById(@Res() res : Response) {
    res.status(HttpStatus.OK).json(dataShopId);
  }
}
