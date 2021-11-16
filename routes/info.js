const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const data1 = [
  {quantity:10,price:100},{quantity:5,price:250},{quantity:7,price:120},{quantity:6,price:90},{quantity:4,price:75},
  {quantity:15,price:50},{quantity:13,price:89},{quantity:8,price:78},{quantity:10,price:100},{quantity:11,price:68}
];

const data2 = [
  {quantity:10,Requests:2},{quantity:5,Requests:25},{quantity:7,Requests:14},{quantity:6,Requests:9},{quantity:4,Requests:23},
  {quantity:15,Requests:1},{quantity:13,Requests:3},{quantity:8,Requests:11},{quantity:10,Requests:4},{quantity:11,Requests:3}
];

const data3 = [
  {price:100,Requests:2},{price:250,Requests:25},{price:120,Requests:14},{price:90,Requests:9},{price:75,Requests:23},
  {price:50,Requests:1},{price:89,Requests:3},{price:78,Requests:11},{price:100,Requests:4},{price:68,Requests:3}
];

assetRouter.route('/').
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

assetRouter.route('/col1')
.get((req,res,next)=>{
   
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(data1);
})

assetRouter.route('/col2')
.get((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(data2);
})

assetRouter.route('/col3')
.get((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(data3);
})




module.exports = assetRouter;
