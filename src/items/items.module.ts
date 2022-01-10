import { Module } from '@nestjs/common';
import { ItemsService } from './items.service';
import { ItemsResolver } from './items.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema, Item } from './item.schema';
import { ItemsRepository } from './items.repository';
import { ItemsController } from './items.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }]),
  ],
  controllers: [ItemsController],
  providers: [ItemsService, ItemsResolver, ItemsRepository],
})
export class ItemsModule {}
