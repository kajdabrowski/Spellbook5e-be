import { RequestHandler } from "express";
import { app } from "firebase-admin";
import { Spell } from "../api/models";
import axios, { AxiosResponse } from "axios"

export const getAllSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/`)
    let spells: Spell[] = result.data;    
    return res.status(200).json({
        message: spells//Kan ta bort message och bara returnera spells
    })
}

export const getBardSpells: RequestHandler = async(req, res, next) => {
    let response: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=bard&document__slug__iexact=&document__slug=&document__slug__in=`)
    let bardspells: Spell[] = response.data
    console.log("BARD SPELLS", bardspells);
    console.log(response.data.results.length);
    
    return res.json(response.data.results)
}

export const getClericSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=cleric&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    return res.json({spells})
}

export const getDruidSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=druid&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    return res.json({spells})
}

export const getPaladinSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=paladin&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    return res.json({spells})
}

export const getSorcererSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=sorcerer&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    return res.json({spells})
}

export const getWizardSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=wizard&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    return res.json({spells})
}

export const getWarlockSpells: RequestHandler = async(req, res, next) => {
    let result: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?slug__in=&slug__iexact=&slug=&name__iexact=&name=&level__iexact=&level=&level__in=&level_int__iexact=&level_int=&level_int__range=&school__iexact=&school=&school__in=&duration__iexact=&duration=&duration__in=&components__iexact=&components=&components__in=&concentration__iexact=&concentration=&concentration__in=&casting_time__iexact=&casting_time=&casting_time__in=&dnd_class__iexact=&dnd_class=&dnd_class__in=&dnd_class__icontains=warlock&document__slug__iexact=&document__slug=&document__slug__in=`)
    let spells: Spell[] = result.data;
    console.log(spells);
    return res.json({spells})
}

export const getSpellsByClass: RequestHandler = async(req, res, next) => {
    console.log(req.params.level);
    let response: AxiosResponse = await axios.get(`https://api.open5e.com/spells/?dnd_class__icontains=${req.params.dnd_class}&level_int=${req.params.level}`) 
    // let spells: Spell[] = response.data
    return res.json(response.data.results)
}
