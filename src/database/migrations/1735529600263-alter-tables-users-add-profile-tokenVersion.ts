import { MigrationInterface, QueryRunner } from "typeorm";

export class Default1735529600263 implements MigrationInterface {
    name = 'Default1735529600263'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "tokenVersion" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users" ADD "profile" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "profile"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "tokenVersion"`);
    }

}
