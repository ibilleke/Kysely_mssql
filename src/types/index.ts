import { Insertable, Selectable, Updateable } from "kysely"
import { Faxes } from "../models/Schema"

export type Fax = Selectable<Faxes>
export type NuevoFax = Insertable<Faxes>
export type ActualizaFax = Updateable<Faxes>