import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType('Item')
export class ItemType {
  @Field(() => ID, { name: 'id' })
  readonly _id?: string;

  @Field(() => String)
  readonly title: string;

  @Field(() => Int)
  readonly price: number;

  @Field(() => String)
  readonly description: string;
}
