import type { Request, Response } from "express"
import { creaFax, buscarFaxPorId, buscarTodosFax, actualizarFax, eliminarFax } from "../queries/queriesFaxes"

export class FaxesController {
    static createFax = async (req: Request, res: Response) => {
        try {
            await creaFax(req.body)
            res.send("Fax creado correctamente")
        } catch(error) {
            res.status(500).json({error: "Hubo un error al crear el fax"})
        }
    }

    static mostrarFax = async (req: Request, res: Response) => {
        try {
            const fax = await buscarFaxPorId(req.fax.codigo_fax)
            res.send(fax)
        } catch(error) {
            res.status(500).json({error: "Hubo un error al crear el fax"})
        }
    }

    static mostrarTodos = async (req: Request, res: Response) => {
        try {
            const fax = await buscarTodosFax()
            res.send(fax)
        } catch(error) {
            res.status(500).json({error: "Hubo un error al crear el fax"})
        }
    }

    static actualizaFax = async (req: Request, res: Response) => {
        try {
            await actualizarFax(req.fax.codigo_fax, req.body)
            res.send("Fax actualizado correctamente")
        } catch (error) {
            res.status(500).json({error: "Hubo un error al actualizar el fax"})
        }
    }

    static eliminarFax = async (req: Request, res: Response) => {
        try {
            await eliminarFax(req.fax.codigo_fax)
            res.send("Fax eliminado correctamente")
        } catch (error) {
            res.status(500).json({error: "Hubo un error al eliminar el fax"})
        }
    }
}