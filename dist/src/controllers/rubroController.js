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
exports.deleteRubro = exports.modifyRubro = exports.getRubrosById = exports.getAllRubros = exports.createRubro = void 0;
const rubro_1 = require("../models/rubro");
const createRubro = (req, res) => {
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    const rubro = Object.assign({}, req.body);
    rubro_1.Rubro.create(rubro)
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Rubro successfully created",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened creating a rubro." + err.message,
            payload: null,
        });
    });
};
exports.createRubro = createRubro;
const getAllRubros = (req, res) => {
    rubro_1.Rubro.findAll()
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Rubros successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened retrieving all rubros." + err.message,
            payload: null,
        });
    });
};
exports.getAllRubros = getAllRubros;
const getRubrosById = (req, res) => {
    rubro_1.Rubro.findByPk(Number(req.params.id))
        .then((data) => {
        return res.status(200).json({
            status: "Success",
            message: "Rubros Successfully retrieved",
            payload: data,
        });
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened retrieving the rubro." + err.message,
            payload: null,
        });
    });
};
exports.getRubrosById = getRubrosById;
const modifyRubro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body) {
        return res.status(400).json({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    rubro_1.Rubro.update(Object.assign({}, req.body), { where: { id_rubro: req.params.id } })
        .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json({
                status: "Success",
                message: "Rubro successfully updated",
                payload: Object.assign({}, req.body),
            });
        }
        else {
            return res.status(500).json({
                status: "Error",
                message: "Something happened updating the rubro",
                payload: null,
            });
        }
    })
        .catch((err) => {
        return res.status(500).json({
            status: "Error",
            message: "Something happened updating the rubro." + err.message,
            payload: null,
        });
    });
});
exports.modifyRubro = modifyRubro;
const deleteRubro = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_rubro } = req.body;
    try {
        yield rubro_1.Rubro.destroy({ where: { id_rubro } });
        res.status(200).json({ message: "Rubro deleted " });
    }
    catch (error) {
        res.status(500).json({
            message: "Error deleting rubro",
            error,
        });
    }
});
exports.deleteRubro = deleteRubro;
