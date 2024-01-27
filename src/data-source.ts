import { DataSource } from 'typeorm';
import { OrderBookDiff } from './entities/order-book-diff.entity';
import { OrderBookSnapshot } from './entities/order-book-snapshot.entity';

// "npx ts-node -r tsconfig-paths/register ./node_modules/typeorm/cli.js migration:generate src/migration/OrderBookSchema --dataSource src/data-source.ts"
export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '1373',
    database: 'orderBookDB',
    entities: [OrderBookDiff, OrderBookSnapshot],
    synchronize: true,
    migrations: ["src/migration/**/*.ts"],
    subscribers: [], // ここを修正
});