import { Injectable } from '@nestjs/common';
import { ItemType } from './dto/create-item.dto';
import { Item } from './interfaces/item.interface';
import { ItemInput } from './dto/input-items.input';

import { ItemsRepository } from './items.repository';

@Injectable()
export class ItemsService {
  constructor(private readonly itemRepository: ItemsRepository) {}

  async create(createItemDto: ItemInput): Promise<ItemType> {
    return this.itemRepository.create(createItemDto);
  }

  async findAll(): Promise<ItemType[]> {
    return this.itemRepository.findAll();
  }

  async findOne(id: string): Promise<ItemType> {
    return this.itemRepository.findOne(id);
  }

  async delete(id: string): Promise<ItemType> {
    return this.itemRepository.delete(id);
  }

  async update(id: string, item: Item): Promise<ItemType> {
    return this.itemRepository.update(id, item);
  }
}
