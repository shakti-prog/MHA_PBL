const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

assetRouter.route('/')
.
get((req,res,next)=>{
    Assets.find({}).
    then((assets)=>{
      res.statusCode = 200;
      res.setHeader('Content-type','application/json');
      res.json(assets);
      console.log(assets);
    },(err)=>
      next(err)
    ).catch((err)=>console.log(err))
   })


   module.exports = assetRouter;
