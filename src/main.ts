import { NestFactory } from '@nestjs/core';
import { ShopModule } from './shop.module';
const cors = require('cors');
import {createConnection} from "typeorm";

async function bootstrap() {
  const app = await NestFactory.create(ShopModule);
  app.use(cors());
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
