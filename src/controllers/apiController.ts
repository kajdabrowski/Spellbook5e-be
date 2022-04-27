import { RequestHandler } from "express";
import { Spell } from "../api/models";

export const getAllSpells: RequestHandler = async(req, res, next) => {
    console.log("In apiController");
    res.send("Success!")

}