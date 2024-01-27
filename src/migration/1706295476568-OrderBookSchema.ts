import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderBookSchema1706295476568 implements MigrationInterface {
    name = 'OrderBookSchema1706295476568'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_book_diffs" ("id" SERIAL NOT NULL, "pair" character varying NOT NULL, "asks" jsonb NOT NULL, "bids" jsonb NOT NULL, "timestamp" bigint NOT NULL, "sequence_id" bigint NOT NULL, CONSTRAINT "PK_2365b91295f5074a5699d024b5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_book_snapshots" ("id" SERIAL NOT NULL, "pair" character varying NOT NULL, "asks" jsonb NOT NULL, "bids" jsonb NOT NULL, "timestamp" bigint NOT NULL, "sequence_id" bigint NOT NULL, CONSTRAINT "PK_d98f31551f4a676bae066171358" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order_book_snapshots"`);
        await queryRunner.query(`DROP TABLE "order_book_diffs"`);
    }

}
