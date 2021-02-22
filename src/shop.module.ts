import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OpenShop } from './entity/OpenShop.entity';
import { Picture } from './entity/Picture.entity';
import { Shop } from './entity/Shop.entity';
import { ShopService } from './service/shop.service';
import { ShopController } from './shop.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'shop-moove',
    entities: [OpenShop, Picture, Shop],
    synchronize: true,
  }),
  TypeOrmModule.forFeature([Shop])
 ],
  controllers: [ShopController],
  providers: [ShopService],
  exports:[TypeOrmModule]
})
export class ShopModule {}
