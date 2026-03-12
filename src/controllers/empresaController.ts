import { RequestHandler, Request, Response } from "express";
import { Empresa } from "../models/empresa";

export const createEmpresa : RequestHandler = (req:Request, res:Response) => {
    if(!req.body) {
        return res.status(400).json ({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        })
    }

    const empresa = {...req.body};
    Empresa.create(empresa)
    .then((data : Empresa | null) => {
        return res.status(200).json ({
            status: "Success",
            message: "Empresa successfully created",
            payload: data,
        })
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened creating a empresa." + err.message,
            payload: null,
        });
    });
};

export const getAllEmpresas : RequestHandler = (req:Request, res:Response) => {
    Empresa.findAll()
    .then((data : Empresa[]) => {
        return res.status(200).json ({
            status: "Success",
            message: "Empresas successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened retrieving all empresas." + err.message,
            payload: null,
        });
    });
};

export const getEmpresasById : RequestHandler = (req:Request, res:Response) => {
    Empresa.findByPk(Number(req.params.id))
    .then((data : Empresa | null) => {
        return res.status(200).json ({
            status: "Success",
            message: "Empresas successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened retrieving the empresa." + err.message,
            payload: null,
        });
    });
};

export const modifyEmpresa : RequestHandler = async (req:Request, res:Response) => {
    if(!req.body) {
        return res.status(400).json ({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    }
    Empresa.update({...req.body} , {where: {id_empresa: req.params.id} })
    .then((isUpdated) => {
        if (isUpdated) {
            return res.status(200).json ({
                status: "Success",
                message: "Empresa successfully updated",
                payload: {...req.body},
            });
        } else {
            return res.status(500).json ({
                status: "Error",
                message: "Something happened updating the empresa",
                payload: null,
            });
        }
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened updating the empresa." + err.message,
            payload: null,
        });
    }); 
};

export const deleteEmpresa : RequestHandler = async (req:Request, res:Response) : Promise<void> => {
    const { id_empresa } = req.body;
    try {
        await Empresa.destroy({where : {id_empresa} });
        res.status(200).json ({message: "Empresa deleted "});
    } catch (error) {
        res.status(500).json ({
            message: "Error deleting empresa",
            error,
        });
    }
};