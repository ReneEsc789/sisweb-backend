import { Router } from "express";
import { addRubroToEmpresa, getRubrosByEmpresa, removeRubroFromEmpresa } from "../controllers/empresa_rubroController";

const empresaRubroRouter: Router = Router();

empresaRubroRouter.post('/', addRubroToEmpresa);
empresaRubroRouter.get('/:id', getRubrosByEmpresa);
empresaRubroRouter.delete('/', removeRubroFromEmpresa);

export default empresaRubroRouter;