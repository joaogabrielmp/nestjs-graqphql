import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemInput } from './dto/input-items.input';
import { ItemDocument } from './item.schema';

@Injectable()
export class ItemsRepository {
  constructor(
    @InjectModel('Item')
    private itemModel: Model<ItemDocument>,
  ) {}

  async create(createItemDto: ItemInput): Promise<ItemType> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll(): Promise<ItemType[]> {
    const items = await this.itemModel.find({}, null, { lean: true });
    return items;
  }

  async findOne(id: string): Promise<ItemType> {
    return await this.itemModel.findOne({ _id: id }, null, { lean: true });
  }

  async delete(id: string): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, {
      new: true,
      lean: true,
    });
  }
}
