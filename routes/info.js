const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const data1 = [
  {quantity:10,price:100,date:"12/12/2021"},{quantity:5,price:250,date:"6/12/2021"},{quantity:7,price:120,date:"1/12/2021"},
  {quantity:6,price:90,date:"11/11/2021"},{quantity:4,price:75,date:"9/11/2021"},{quantity:15,price:50,date:"5/11/2021"},
  {quantity:13,price:89,date:"3/10/2021"},{quantity:8,price:78,date:"1/10/2021"},{quantity:10,price:100,date:"17/10/2021"},
  {quantity:11,price:68,date:"2/9/2021"},{quantity:17,price:54,date:"21/9/2021"},{quantity:14,price:34,date:"13/9/2021"}
];

const data2 = [
  {quantity:10,Requests:2,date:"12/12/2021"},{quantity:5,Requests:25,date:"6/12/2021"},{quantity:7,Requests:14,date:"1/12/2021"},
  {quantity:6,Requests:9,date:"11/11/2021"},{quantity:4,Requests:23,date:"9/11/2021"}, {quantity:15,Requests:1,date:"5/11/2021"},
  {quantity:13,Requests:3,date:"3/10/2021"},{quantity:8,Requests:11,date:"21/9/2021"},{quantity:10,Requests:4,date:"13/9/2021"},
  {quantity:12,Requests:4,date:"2/9/2021"},{quantity:8,Requests:9,date:"21/9/2021"},{quantity:4,Requests:19,date:"13/9/2021"}
];

const data3 = [
  {price:100,Requests:2,date:"12/12/2021"},{price:250,Requests:25,date:"6/12/2021"},{price:120,Requests:14,date:"1/12/2021"},
  {price:90,Requests:9,date:"11/11/2021"},{price:75,Requests:23,date:"9/11/2021"},{price:50,Requests:1,date:"5/11/2021"},
  {price:89,Requests:3,date:"3/10/2021"},{price:78,Requests:11,date:"21/9/2021"},{price:100,Requests:4,date:"13/9/2021"},
  {price:68,Requests:3,date:"2/9/2021"},{price:56,Requests:14,date:"21/9/2021"},{price:78,Requests:18,date:"13/9/2021"}
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
