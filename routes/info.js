const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const data1 = [
  {quantity:10,price:100,dateCreated:"12/12/2021"},{quantity:5,price:250,dateCreated:"6/12/2021"},{quantity:7,price:120,dateCreated:"1/12/2021"},
  {quantity:6,price:90,dateCreated:"11/12/2021"},{quantity:4,price:75,dateCreated:"9/11/2021"},{quantity:15,price:50,dateCreated:"5/11/2021"},
  {quantity:13,price:89,dateCreated:"3/11/2021"},{quantity:8,price:78,dateCreated:"1/11/2021"},{quantity:10,price:100,dateCreated:"17/10/2021"},
  {quantity:11,price:68,dateCreated:"2/10/2021"},{quantity:17,price:54,dateCreated:"21/10/2021"},{quantity:14,price:34,dateCreated:"13/10/2021"},
  {quantity:14,price:10,dateCreated:"12/9/2021"},{quantity:15,price:25,dateCreated:"6/9/2021"},{quantity:37,price:121,dateCreated:"1/9/2021"},
  {quantity:26,price:92,dateCreated:"11/9/2021"},{quantity:14,price:95,dateCreated:"9/8/2021"},{quantity:25,price:51,dateCreated:"5/8/2021"},
  {quantity:53,price:81,dateCreated:"3/8/2021"},{quantity:8,price:18,dateCreated:"1/8/2021"},{quantity:11,price:101,dateCreated:"17/7/2021"},
  {quantity:21,price:60,dateCreated:"2/7/2021"},{quantity:7,price:24,dateCreated:"21/7/2021"},{quantity:84,price:31,dateCreated:"13/7/2021"}

];

const data2 = [
  {quantity:10,Requests:2,dateCreated:"12/12/2021"},{quantity:5,Requests:25,dateCreated:"6/12/2021"},{quantity:7,Requests:14,dateCreated:"1/12/2021"},
  {quantity:6,Requests:9,dateCreated:"11/12/2021"},{quantity:4,Requests:23,dateCreated:"9/11/2021"}, {quantity:15,Requests:1,dateCreated:"5/11/2021"},
  {quantity:13,Requests:3,dateCreated:"3/11/2021"},{quantity:8,Requests:11,dateCreated:"21/11/2021"},{quantity:10,Requests:4,dateCreated:"13/10/2021"},
  {quantity:12,Requests:14,dateCreated:"2/10/2021"},{quantity:8,Requests:9,dateCreated:"21/10/2021"},{quantity:4,Requests:19,dateCreated:"13/10/2021"},
  {quantity:11,Requests:22,dateCreated:"12/9/2021"},{quantity:15,Requests:15,dateCreated:"6/9/2021"},{quantity:17,Requests:13,dateCreated:"1/9/2021"},
  {quantity:16,Requests:4,dateCreated:"11/9/2021"},{quantity:3,Requests:23,dateCreated:"9/8/2021"}, {quantity:12,Requests:11,dateCreated:"5/8/2021"},
  {quantity:23,Requests:12,dateCreated:"3/8/2021"},{quantity:2,Requests:31,dateCreated:"21/8/2021"},{quantity:13,Requests:14,dateCreated:"13/7/2021"},
  {quantity:32,Requests:12,dateCreated:"2/7/2021"},{quantity:9,Requests:19,dateCreated:"21/7/2021"},{quantity:24,Requests:13,dateCreated:"13/7/2021"}
];

const data3 = [
  {price:100,Requests:2,dateCreated:"12/12/2021"},{price:250,Requests:25,dateCreated:"6/12/2021"},{price:120,Requests:14,dateCreated:"1/12/2021"},
  {price:90,Requests:9,dateCreated:"11/12/2021"},{price:75,Requests:23,dateCreated:"9/11/2021"},{price:50,Requests:1,dateCreated:"5/11/2021"},
  {price:89,Requests:3,dateCreated:"3/11/2021"},{price:78,Requests:11,dateCreated:"21/11/2021"},{price:100,Requests:4,dateCreated:"13/10/2021"},
  {price:68,Requests:3,dateCreated:"2/10/2021"},{price:56,Requests:14,dateCreated:"21/10/2021"},{price:78,Requests:18,dateCreated:"13/9/2021"},
  {price:101,Requests:12,dateCreated:"12/9/2021"},{price:254,Requests:22,dateCreated:"6/9/2021"},{price:121,Requests:13,dateCreated:"1/9/2021"},
  {price:91,Requests:19,dateCreated:"11/8/2021"},{price:72,Requests:21,dateCreated:"9/8/2021"},{price:51,Requests:12,dateCreated:"5/8/2021"},
  {price:83,Requests:23,dateCreated:"3/8/2021"},{price:71,Requests:14,dateCreated:"21/7/2021"},{price:102,Requests:41,dateCreated:"13/7/2021"},
  {price:61,Requests:13,dateCreated:"2/7/2021"},{price:50,Requests:10,dateCreated:"21/7/2021"},{price:73,Requests:10,dateCreated:"13/7/2021"}
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
