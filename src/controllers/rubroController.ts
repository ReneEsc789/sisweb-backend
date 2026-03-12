import { RequestHandler, Request, Response } from "express";
import { Rubro } from "../models/rubro";

export const createRubro : RequestHandler = (req:Request, res:Response) => {
    if(!req.body) {
        return res.status(400).json ({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        })
    }

    const rubro = {...req.body};
    Rubro.create(rubro)
    .then((data : Rubro | null) => {
        return res.status(200).json ({
            status: "Success",
            message: "Rubro successfully created",
            payload: data,
        })
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened creating a rubro." + err.message,
            payload: null,
        });
    });
};

export const getAllRubros : RequestHandler = (req:Request, res:Response) => {
    Rubro.findAll()
    .then((data : Rubro[]) => {
        return res.status(200).json ({
            status: "Success",
            message: "Rubros successfully retrieved",
            payload: data,
        });
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened retrieving all rubros." + err.message,
            payload: null,
        });
    });
};

export const getRubrosById : RequestHandler = (req:Request, res:Response) => {
    Rubro.findByPk(Number(req.params.id))
    .then((data : Rubro | null) => {
        return res.status(200).json ({
            status: "Success",
            message: "Rubros Successfully retrieved",
            payload: data,
        })
    })
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened retrieving the rubro." + err.message,
            payload: null,
        });
    });
};

export const modifyRubro : RequestHandler = async (req:Request, res:Response) => {
    if(!req.body) {
        return res.status(400).json ({
            status: "Error",
            message: "Content can not be empty",
            payload: null,
        });
    } 
    Rubro.update({...req.body}, {where : {id_rubro : req.params.id} })
    .then((isUpdated) => {
        if(isUpdated) {
            return res.status(200).json ({
                status: "Success",
                message: "Rubro successfully updated",
                payload: {...req.body},
            });
        } else {
            return res.status(500).json ({
                status: "Error",
                message: "Something happened updating the rubro",
                payload: null,
            });
        }
    }) 
    .catch((err) => {
        return res.status(500).json ({
            status: "Error",
            message: "Something happened updating the rubro." + err.message,
            payload: null,
        });
    });
};

export const deleteRubro : RequestHandler = async (req:Request, res:Response) : Promise<void>  => {
    const { id_rubro } = req.body;
    try {
        await Rubro.destroy({where: {id_rubro} });
        res.status(200).json ({message: "Rubro deleted "});
    } catch (error) {
        res.status(500).json ({
            message: "Error deleting rubro",
            error,
        });
    }
};