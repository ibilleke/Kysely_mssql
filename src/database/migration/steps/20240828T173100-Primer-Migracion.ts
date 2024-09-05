import { Kysely} from "kysely"

export async function up(db: Kysely<any>): Promise<void> {
    await db.schema
            .createTable("faxes")
            .addColumn("codigo_fax", "integer", col => col.primaryKey().notNull().identity())
            .addColumn("nombre_fax", "varchar(250)", col => col.notNull())
            .addColumn("creado_el", "datetime", col => col.notNull())
            .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
    await db.schema.dropTable("faxes").execute()
}