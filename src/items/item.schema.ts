import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({
  autoCreate: true,
  autoIndex: true,
  timestamps: true,
})
export class Item {
  @Prop({
    type: String,
    required: true,
  })
  title: string;

  @Prop({
    type: Number,
    required: true,
  })
  price: number;

  @Prop({
    type: String,
    required: true,
  })
  description: string;
}

export type ItemDocument = Document & Item;
export const ItemSchema = SchemaFactory.createForClass(Item);
