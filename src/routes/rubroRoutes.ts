import { Router } from "express";
import { getAllRubros, getRubrosById, createRubro, deleteRubro, modifyRubro } from "../controllers/rubroController";

const rubroRouter : Router = Router();

rubroRouter.get('/', getAllRubros);
rubroRouter.get('/:id', getRubrosById);
rubroRouter.post('/', createRubro);
rubroRouter.patch('/:id', modifyRubro);
rubroRouter.delete('/', deleteRubro);

export default rubroRouter;