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
exports.deleteEmpresa = exports.modifyEmpresa = exports.getEmpresasById = exports.getAllEmpresas = exports.createEmpresa = void 0;
const empresa_1 = require("../models/empresa");
const createEmpresa = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const empresa = Object.assign({}, req.body);
    empresa_1.Empresa.create(empresa)
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Empresa successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened creating a empresa." + err.message,
            payload: null,
        });
    });
};
exports.createEmpresa = createEmpresa;
const getAllEmpresas = (req, res) => {
    empresa_1.Empresa.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Empresas successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened retrieving all empresas." + err.message,
            payload: null,
        });
    });
};
exports.getAllEmpresas = getAllEmpresas;
const getEmpresasById = (req, res) => {
    empresa_1.Empresa.findByPk(Number(req.params.id))
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Empresas successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened retrieving the empresa." + err.message,
            payload: null,
        });
    });
};
exports.getEmpresasById = getEmpresasById;
const modifyEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    empresa_1.Empresa.update(Object.assign({}, req.body), { where: { id_empresa: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "Success",
                message: "Empresa successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "Error",
                message: "Something happened updating the empresa",
                payload: null,
            });
        }
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened updating the empresa." + err.message,
            payload: null,
        });
    });
});
exports.modifyEmpresa = modifyEmpresa;
const deleteEmpresa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_empresa } = req.body;
    try {
        yield empresa_1.Empresa.destroy({ where: { id_empresa } });
        res.status(200).json({ message: "Empresa deleted " });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting empresa",
            error,
        });
    }
});
exports.deleteEmpresa = deleteEmpresa;
