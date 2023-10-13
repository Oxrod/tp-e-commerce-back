import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './schemas/product.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  create(createProductDto: CreateProductDto) {
    const createProduct = new this.productModel(createProductDto);

    return createProduct.save();
  }

  findAll() {
    return this.productModel.find().exec();
  }

  findOne(id: string) {
    return this.productModel.findById({ _id: id }).exec();
  }

  update(id: string, updateProductDto: UpdateProductDto) {
    return this.productModel.updateOne({ _id: id }, updateProductDto);
  }

  remove(id: string) {
    return this.productModel.findOneAndRemove({ _id: id });
  }
}
