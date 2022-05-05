import { RequestHandler } from "express";
import { app } from "firebase-admin";
import { Spell } from "../api/models";
import axios, { AxiosResponse } from "axios"

export const getAllSpells: RequestHandler = async(req, res, nest) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/`)
    console.log("HÄR KOMMER SPELLS");
    let spells: Spell[] = result.data;
    return res.status(200).json({
        message: spells
    })
}
