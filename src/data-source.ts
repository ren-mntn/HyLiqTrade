import { TypeOrmModuleOptions } from "@nestjs/typeorm";

// npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/migration/Test --dataSource src / data - source.ts
export const AppDataSource: TypeOrmModuleOptions = {
    type: 'postgres', // データベースの種類
    host: 'localhost', // データベースのホスト
    port: 5432, // データベースのポート
    username: 'postgres', // ユーザー名
    password: '1373', // パスワード
    database: 'orderBookDB', // データベース名
    entities: ["src/entities/*.ts"], // エンティティソースコード
    synchronize: true, // 開発中は true （実稼働環境では false 推奨）
    migrations: ["migrations/*.ts"], // マイグレーションスクリプトの格納場所
    subscribers: [], // ここを修正
};