const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const col1 = ["ordersent","solditemsamount","solditemscount","date"]
const col2 = ["ordersent","Requests","date"]

const data1 = [
  {"ordersent":10,"solditemsamount":87,"solditemscount":12,"date":"2021-12-12"},
  {"ordersent":5,"solditemsamount":5,"solditemscount":5,"date":"2021-06-12"},
  {"ordersent":7,"solditemsamount":2,"solditemscount":17,"date":"2021-07-23"},
  {"ordersent":6,"solditemsamount":0,"solditemscount":13,"date":"2021-08-12"},
  {"ordersent":4,"solditemsamount":5,"solditemscount":19,"date":"2021-01-14"},
  {"ordersent":15,"solditemsamount":50,"solditemscount":22,"date":"2021-03-15"},
  {"ordersent":13,"solditemsamount":89,"solditemscount":02,"date":"2021-12-11"},
  {"ordersent":8,"solditemsamount":8,"solditemscount":42,"date":"2021-11-12"},
  {"ordersent":10,"solditemsamount":17,"solditemscount":56,"date":"2021-10-15"},
  {"ordersent":11,"solditemsamount":68,"solditemscount":92,"date":"2020-10-26"},
  {"ordersent":17,"solditemsamount":54,"solditemscount":42,"date":"2020-11-30"},
  {"ordersent":14,"solditemsamount":34,"solditemscount":12,"date":"2020-09-12"},
  {"ordersent":14,"solditemsamount":10,"solditemscount":12,"date":"2020-04-18"},
  {"ordersent":15,"solditemsamount":25,"solditemscount":12,"date":"2020-05-14"},
 
];

const data2 = [
  {"ordersent":12,"Requests":13,"date":"2021-12-26"},
  {"ordersent":11,"Requests":12,"date":"2021-06-12"},
  {"ordersent":13,"Requests":14,"date":"2021-07-23"},
  {"ordersent":20,"Requests":25,"date":"2021-08-12"},
  {"ordersent":17,"Requests":18,"date":"2021-01-27"},
  {"ordersent":23,"Requests":20,"date":"2021-03-15"},
  {"ordersent":43,"Requests":21,"date":"2020-05-14"},
  {"ordersent":62,"Requests":22,"date":"2020-04-18"},
  {"ordersent":12,"Requests":28,"date":"2021-12-11"},
  {"ordersent":19,"Requests":71,"date":"2021-12-28"},
  {"ordersent":14,"Requests":28,"date":"2021-11-12"},
  {"ordersent":27,"Requests":78,"date":"2019-08-12"},
  {"ordersent":89,"Requests":54,"date":"2019-07-15"},
  {"ordersent":14,"Requests":45,"date":"2020-11-12"},
  {"ordersent":67,"Requests":31,"date":"2021-09-14"},
  {"ordersent":56,"Requests":29,"date":"2022-11-12"},
  {"ordersent":43,"Requests":42,"date":"2020-08-16"},
  {"ordersent":27,"Requests":18,"date":"2021-11-12"},
  
];


const data4 = ["tab1","tab2"];
/*const data3 = [
  {"solditemsamount":10012,"dateCreate":"12/12/2021"},{"solditemsamount":25012,,"dateCreatd":"6/12/2021"},{"solditemsamount":12012,,"dateCreatd":"1/12/2021"},
  {"solditemsamount":90,12,dateCreated:"11/12/2021"},{"solditemsamount":75,12,"dateCreate":"9/11/2021"},{"solditemsamount":50,12,dateCreated:"5/11/2021"},
  {"solditemsamount":89,12,dateCreated:"3/11/2021"},{"solditemsamount":78,12,"dateCreate":"21/11/2021"},{"solditemsamount":10012,"dateCreate":"13/10/2021"},
  {"solditemsamount":68,12,dateCreated:"2/10/2021"},{"solditemsamount":56,12,"dateCreate":"21/10/2021"},{"solditemsamount":78,12,"dateCreate":"13/9/2021"},
  {"solditemsamount":10112,,"dateCreatd":"12/9/2021"},{"solditemsamount":25412,,"dateCreatd":"6/9/2021"},{"solditemsamount":12112,,"dateCreatd":"1/9/2021"},
  {"solditemsamount":91,12,"dateCreate":"11/8/2021"},{"solditemsamount":72,12,"dateCreate":"9/8/2021"},{"solditemsamount":51,12,"dateCreate":"5/8/2021"},
  {"solditemsamount":83,12,"dateCreate":"3/8/2021"},{"solditemsamount":71,12,"dateCreate":"21/7/2021"},{"solditemsamount":10212,,"dateCreatd":"13/7/2021"},
  {"solditemsamount":61,12,"dateCreate":"2/7/2021"},{"solditemsamount":50,12,"dateCreate":"21/7/2021"},{"solditemsamount":73,12,"dateCreate":"13/7/2021"}
]; */





assetRouter.route('/col1')
.post((req,res,next)=>{

   console.log(req.body);
   if(req!= null){
      const tabName = req.body.tabname;
      const table = String(tabName);
      if(table == "tab1"){
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        res.json({data:data1,cols:col1}); 
      }
      else if(table == "tab2"){
        res.statusCode = 200
        res.setHeader('Content-type','application/json');
        res.json({data:data2,cols:col2}); 
      }
      else{
        res.statusCode = 200
        res.setHeader('Content-type','application/json');
        res.json({data:data1,cols:col1}); 

      }
     return;

   }
   const errMessage = "Not available"
   res.statusCode = 404;
   res.setHeader('Content-type','application/json');
   res.json({msg:errMessage})
 
})

assetRouter.route('/col2')
.get((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(data4);
})

assetRouter.route('/col3')
.get((req,res,next)=>{
    var processed = data1.map(({ ordersent,solditemsamount}) => ({ ordersent,solditemsamount }));
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(processed);
   
})

assetRouter.route('/col4')
.get((req,res,next)=>{
  var columns = Object.keys(data1[0]);
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  var ret = columns.filter(obj=> obj != "dateCreated");
  console.log(ret);
  res.json(ret);
})


assetRouter.route('/col5')
.post((req,res,next)=>{
  console.log(req.body);
  res.statusCode = 200;
  res.setHeader('Content-type','application/json');
  const msg = "All good";
  res.json(msg);

})



module.exports = assetRouter;
