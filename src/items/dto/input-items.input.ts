import { InputType, Field } from '@nestjs/graphql';

@InputType('ItemInput')
export class ItemInput {
  @Field(() => String)
  readonly title: string;

  @Field(() => Number)
  readonly price: number;

  @Field(() => String)
  readonly description: string;
}
