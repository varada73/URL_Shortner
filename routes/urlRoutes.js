import express from "express";
import { nanoid } from "nanoid";

import Url from "../models/urlModel.js"
 const urlRouter=express.Router();
urlRouter.use(express.json());
urlRouter.use(express.urlencoded({extended:false}));
 urlRouter.post("/",async(req,res)=>{
    console.log('Within post request');
    const redirecturl= req.body.url;
    if(!redirecturl){
        return res.status(400).json({message: "You need to give a url"});
    }
    const shortiD= nanoid(8);
    console.log(`id: ${shortiD}`);
    const u = await Url.create({
        shortId: shortiD,
        redirectURL: redirecturl,
        visitHistory:[]
    });
    console.log(u);
    return res.status(200).json({id: shortiD});



 });
 urlRouter.get("/analytics/:id",async(req,res)=>{
    const shortid = req.params.id;
    const u = await Url.findOne({
        shortId: shortid
    });
    if(!u){
        return res.status(400).json({error:"Not a valid id"});
    }
    console.log(u);
    const data = {
        totalClicks: u.visitHistory.length,
        analysis: u.visitHistory
    }
return res.status(200).json(data);

 });
export default urlRouter;