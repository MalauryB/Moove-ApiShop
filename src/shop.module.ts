import { Module } from '@nestjs/common';
import { ShopController } from './shop.controller';

@Module({
  imports: [],
  controllers: [ShopController],
  providers: [],
})
export class ShopModule {}
