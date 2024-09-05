import type { Request, Response, NextFunction } from "express"
import { Fax } from "../types"
import { buscarFaxPorId } from "../queries/queriesFaxes"

declare global {
    namespace Express {
        interface Request {
            fax: Fax
        }
    }
}

export async function faxExiste(req: Request, res: Response, next: NextFunction) {
    try {
        const { id } = req.params
        const fax = await buscarFaxPorId(+id)
        if(!fax) {
            const error = new Error("Fax no Encontrado")
            return res.status(404).json({error: error.message})
        }
        req.fax = fax
        next()
    } catch (error) {
        res.status(500).json({error: "Hubo error al acceder al fax"})
    }
}