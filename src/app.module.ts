import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ConfigModule } from '@nestjs/config';

import { mongooseConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
      load: [mongooseConfig],
    }),
    ItemsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot(mongooseConfig().uri, mongooseConfig().config),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
