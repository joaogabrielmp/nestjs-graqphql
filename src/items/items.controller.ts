import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './dto/input-items.input';
import { Item } from './interfaces/item.interface';
import {
  Get,
  Patch,
  Delete,
  Post,
  Controller,
  Body,
  Param,
} from '@nestjs/common';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  async getItems(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async getItem(@Param('id') id: string): Promise<ItemType> {
    return this.itemsService.findOne(id);
  }

  @Post()
  async createItem(@Body() input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Patch(':id')
  async updateItem(@Param('id') id: string, @Body() input: ItemInput) {
    return this.itemsService.update(id, input as Item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string) {
    return this.itemsService.delete(id);
  }
}
