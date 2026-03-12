import { RequestHandler, Request, Response } from "express";
import { EmpresaRubro } from "../models/empresa_rubro";
import { Empresa } from "../models/empresa";
import { Rubro } from "../models/rubro";

export const addRubroToEmpresa: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { empresa_id, rubro_id } = req.body;
    try {
        await EmpresaRubro.create({ empresa_id, rubro_id });
        res.status(200).json({
            status: "Success",
            message: "Rubro added to empresa successfully",
            payload: { empresa_id, rubro_id }
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened adding rubro to empresa",
            error
        });
    }
};

export const getRubrosByEmpresa: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    try {
        const empresa = await Empresa.findByPk(Number(id), {
            include: [Rubro]
        });
        res.status(200).json({
            status: "Success",
            message: "Rubros successfully retrieved",
            payload: empresa
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened retrieving rubros",
            error
        });
    }
};

// Eliminar un rubro de una empresa
export const removeRubroFromEmpresa: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    const { empresa_id, rubro_id } = req.body;
    try {
        await EmpresaRubro.destroy({ where: { empresa_id, rubro_id } });
        res.status(200).json({
            status: "Success",
            message: "Rubro removed from empresa successfully"
        });
    } catch (error) {
        res.status(500).json({
            status: "Error",
            message: "Something happened removing rubro from empresa",
            error
        });
    }
};