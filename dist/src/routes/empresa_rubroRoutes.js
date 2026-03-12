"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const empresa_rubroController_1 = require("../controllers/empresa_rubroController");
const empresaRubroRouter = (0, express_1.Router)();
empresaRubroRouter.post('/', empresa_rubroController_1.addRubroToEmpresa);
empresaRubroRouter.get('/:id', empresa_rubroController_1.getRubrosByEmpresa);
empresaRubroRouter.delete('/', empresa_rubroController_1.removeRubroFromEmpresa);
exports.default = empresaRubroRouter;
