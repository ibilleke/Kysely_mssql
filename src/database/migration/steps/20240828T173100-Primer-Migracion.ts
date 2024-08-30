import { Kysely} from "kysely"

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
            .createTable("faxes")
            .addColumn("id", "varchar(20)", col => col.primaryKey().notNull())
            .addColumn("numero_fax", "varchar(250)", col => col.notNull())
            .addColumn("creado_el", "varchar(250)", col => col.notNull())
            .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable("faxes").execute()
}