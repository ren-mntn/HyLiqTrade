import { Module } from '@nestjs/common';
import { OrderBookClient } from './order-book/websocket.client';
import { OrderBookService } from './order-book/order-book.service';
import { DataSourceModule } from './data-source.module';
import { OrderBookDiff } from './entities/order-book-diff.entity';
import { OrderBookSnapshot } from './entities/order-book-snapshot.entity';

import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [DataSourceModule,
    TypeOrmModule.forFeature([OrderBookDiff]),
    TypeOrmModule.forFeature([OrderBookSnapshot]),
  ],
  controllers: [],
  providers: [OrderBookClient, OrderBookService],

})
export class AppModule { }
