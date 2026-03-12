import { Router } from "express";
import { createEmpresa, getAllEmpresas, getEmpresasById, modifyEmpresa, deleteEmpresa } from "../controllers/empresaController";

const empresaRouter : Router = Router();

empresaRouter.get('/', getAllEmpresas);
empresaRouter.get('/:id', getEmpresasById);
empresaRouter.post('/', createEmpresa);
empresaRouter.patch('/:id', modifyEmpresa);
empresaRouter.delete('/', deleteEmpresa);

export default empresaRouter;