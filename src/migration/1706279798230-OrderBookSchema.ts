import { MigrationInterface, QueryRunner } from "typeorm";

export class OrderBookSchema1706279798230 implements MigrationInterface {
    name = 'OrderBookSchema1706279798230'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "order_book_snapshots" ("id" SERIAL NOT NULL, "pair" character varying NOT NULL, "asks" jsonb NOT NULL, "bids" jsonb NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "sequence_id" bigint NOT NULL, CONSTRAINT "PK_d98f31551f4a676bae066171358" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "order_book_diffs" ("id" SERIAL NOT NULL, "pair" character varying NOT NULL, "asks" jsonb NOT NULL, "bids" jsonb NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "sequence_id" bigint NOT NULL, CONSTRAINT "PK_2365b91295f5074a5699d024b5b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_order_book_snapshots_timestamp" ON "order_book_snapshots" ("timestamp")`);
        await queryRunner.query(`CREATE INDEX "IDX_order_book_diffs_timestamp" ON "order_book_diffs" ("timestamp")`);    
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "order_book_diffs"`);
        await queryRunner.query(`DROP TABLE "order_book_snapshots"`);
        await queryRunner.query(`DROP INDEX "IDX_order_book_snapshots_timestamp"`);
        await queryRunner.query(`DROP INDEX "IDX_order_book_diffs_timestamp"`);
    }

}
