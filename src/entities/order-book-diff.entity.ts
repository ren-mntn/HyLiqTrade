import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('order_book_diffs')
export class OrderBookDiff {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    pair: string;

    @Column('jsonb')
    asks: any; // JSONBデータ型を使用して、すべてのasksを保存

    @Column('jsonb')
    bids: any; // JSONBデータ型を使用して、すべてのbidsを保存

    @CreateDateColumn({ type: 'timestamp with time zone' })
    timestamp: Date;

    @Column('bigint')
    sequence_id: string;
}
