"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRubroFromEmpresa = exports.getRubrosByEmpresa = exports.addRubroToEmpresa = void 0;
const empresa_rubro_1 = require("../models/empresa_rubro");
const empresa_1 = require("../models/empresa");
const rubro_1 = require("../models/rubro");
const addRubroToEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresa_id, rubro_id } = req.body;
    try {
        yield empresa_rubro_1.EmpresaRubro.create({ empresa_id, rubro_id });
        res.status(200).json({
            status: "Success",
            message: "Rubro added to empresa successfully",
            payload: { empresa_id, rubro_id }
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened adding rubro to empresa",
            error
        });
    }
});
exports.addRubroToEmpresa = addRubroToEmpresa;
const getRubrosByEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const empresa = yield empresa_1.Empresa.findByPk(Number(id), {
            include: [rubro_1.Rubro]
        });
        res.status(200).json({
            status: "Success",
            message: "Rubros successfully retrieved",
            payload: empresa
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened retrieving rubros",
            error
        });
    }
});
exports.getRubrosByEmpresa = getRubrosByEmpresa;
// Eliminar un rubro de una empresa
const removeRubroFromEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { empresa_id, rubro_id } = req.body;
    try {
        yield empresa_rubro_1.EmpresaRubro.destroy({ where: { empresa_id, rubro_id } });
        res.status(200).json({
            status: "Success",
            message: "Rubro removed from empresa successfully"
        });
    }
    catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened removing rubro from empresa",
            error
        });
    }
});
exports.removeRubroFromEmpresa = removeRubroFromEmpresa;
