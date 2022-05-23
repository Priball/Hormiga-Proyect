import { Request, Response } from "express";

export const getCategories = (_req: Request, res: Response)=>{
    return res.send("Obteniendo");
}

