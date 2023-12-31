import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:root@localhost:27017'),
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
