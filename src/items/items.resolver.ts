import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ItemsService } from './items.service';
import { ItemType } from './dto/create-item.dto';
import { ItemInput } from './input-items.input';
import { Item } from './interfaces/item.interface';

@Resolver(() => ItemType)
export class ItemsResolver {
  constructor(private readonly itemsService: ItemsService) {}

  @Query(() => [ItemType])
  async getItems(): Promise<ItemType[]> {
    return this.itemsService.findAll();
  }

  @Query(() => ItemType)
  async getItem(@Args('id') id: string): Promise<ItemType> {
    return this.itemsService.findOne(id);
  }

  @Mutation(() => ItemType)
  async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
    return this.itemsService.create(input);
  }

  @Mutation(() => ItemType)
  async updateItem(@Args('id') id: string, @Args('input') input: ItemInput) {
    return this.itemsService.update(id, input as Item);
  }

  @Mutation(() => ItemType)
  async deleteItem(@Args('id') id: string) {
    return this.itemsService.delete(id);
  }
}
