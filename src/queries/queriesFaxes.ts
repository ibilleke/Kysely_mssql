import { db } from "../database/config/db"
import { ActualizaFax, Fax, NuevoFax } from "../types"

export async function creaFax(datos: NuevoFax) {
    datos.creado_el = new Date()
    await db
        .insertInto("faxes")
        .values(datos)
        .executeTakeFirstOrThrow()
}

export async function buscarFaxPorId(id: Fax["codigo_fax"]): Promise<Fax|undefined> {
    return await db
        .selectFrom("faxes")
        .where("codigo_fax", "=", id)
        .selectAll()
        .executeTakeFirst()
}

export async function buscarTodosFax(): Promise<Fax[]|undefined> {
    return await db
        .selectFrom("faxes")
        .selectAll("faxes")
        .execute()
}

export async function actualizarFax(id: ActualizaFax["codigo_fax"], actualizaFax: ActualizaFax) {
    await db
        .updateTable("faxes")
        .set(actualizaFax)
        .where("codigo_fax", "=", id!)
        .execute()
}

export async function eliminarFax(id: Fax["codigo_fax"]) {
    await db.deleteFrom("faxes")
        .where("codigo_fax", "=", id)
        .execute()
    }