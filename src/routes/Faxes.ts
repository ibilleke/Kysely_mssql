import { Router } from "express"
import { body, param } from "express-validator"
import { handleInputErrors } from "../middleware/validacion"
import { FaxesController } from "../controllers/FaxesController"
import { faxExiste } from "../middleware/fax"

const router = Router()

router.post("/create",
    body("nombre_fax")
        .notEmpty().withMessage("El nombre del fax es obligatorio"),
    handleInputErrors,
    FaxesController.createFax
)

router.get("/:id",
    faxExiste,
    handleInputErrors,
    FaxesController.mostrarFax
)

router.get("/",
    handleInputErrors,
    FaxesController.mostrarTodos
)

router.put("/actualiza/:id",
    body("nombre_fax")
        .notEmpty().withMessage("El nombre del fax es obligatorio"),
    faxExiste,
    handleInputErrors, 
    FaxesController.actualizaFax
)

router.delete("/eliminar/:id",
    faxExiste,
    handleInputErrors, 
    FaxesController.eliminarFax
)

export default router