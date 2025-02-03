import express from "express";
import mongoose from "mongoose";
import urlRouter from "./routes/urlRoutes.js"
import Url from "./models/urlModel.js"
const app= express();

const PORT=8000;

mongoose.connect('mongodb+srv://varadadhapre:xDXEbwBHPyMreuuk@backenddb.jupz0.mongodb.net/Node-api?retryWrites=true&w=majority&appName=BackendDB')
.then(()=>{
    console.log('Connected to database');
})
.catch(()=>{
    console.log('Connection to database failed');
});
app.listen(PORT,()=>{
console.log(`Server running on ${PORT}`);
}
);
app.use('/url',urlRouter);
app.get("/:shortid",async (req,res)=>{
    const shortiD = req.params.shortid;
    console.log(shortiD);
    const u =await Url.findOneAndUpdate({shortId : shortiD},{$push : {
        visitHistory: {timestamp: Date.now()}

    }});
    
    if(!u){
        return res.status(400).json({error: "Not a valid id"});
    }
    console.log(u.redirectURL);
    
    return res.redirect(u.redirectURL);
});