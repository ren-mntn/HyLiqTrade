import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderBookSnapshot } from './entities/order-book-snapshot.entity'; //まだ存在しないが仮
import { OrderBookUpdate } from './entities/order-book-update.entity'; //まだ存在しないが仮

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres', // データベースの種類
      host: 'localhost', // データベースのホスト
      port: 5432, // データベースのポート
      username: 'postgres', // ユーザー名
      password: '1373', // パスワード
      database: 'orderBookDB', // データベース名
      entities: [OrderBookSnapshot, OrderBookUpdate],
      synchronize: true, // 開発中は true に設定すると便利です（実稼働環境では false 推奨）
    }),
  ],
  controllers: [AppController],
  providers: [AppService],

})
export class AppModule { }
