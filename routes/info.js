const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const col1 = ["ordersent","solditemsamount","/solditemscount","dataCreated"]
const col2 = ["ordersent","Requests","dataCreated"]

const data1 = [
  [10,87,12,"12/12/2021"],
  [5,5,12,"6/12/2021"],
  [7,,2,12,"1/12/2021"],
  [6,0,12,"11/12/2021"],
  [4,5,12,"9/11/2021"],
  [15,50,12,"5/11/2021"],
  [13,89,12,"3/11/2021"],
  [8,,8,12,"1/11/2021"],
  [10,17,12,"17/10/2021"],
  [11,68,12,"2/10/2021"],
  [17,54,12,"21/10/2021"],
  [14,34,12,"13/10/2021"],
  [14,10,12,"12/9/2021"],
  [15,25,12,"6/9/2021"],
  [37,12,12,"1/9/2021"],
  [26,92,12,"11/9/2021"]
  ,[14,95,12,"9/8/2021"],
  [25,51,12,"5/8/2021"],
  [53,81,12,"3/8/2021"],
  [8,,8,12,"1/8/2021"],
  [11,10,12,"17/7/2021"],
  [21,60,12,"2/7/2021"],
  [7,,4,12,"21/7/2021"],
  [84,31,12,"13/7/2021"]
];

const data2 = [
  [12,13,"12/12/2021"],
  [11,12,"11/6/2021"],
  [13,14,"2/2/2021"],
  [20,25,"13/4/2022"],
  [17,18,"1/6/2021"],
  [23,20,"17/1/2020"],
  [43,21,"14/1/2022"],
  [62,22,"24/8/2022"],
  [12,28,"3/9/2022"],
  [19,71,"5/10/2022"],
  [14,28,"7/12/2022"],
  [27,78,"9/8/2022"],
  [89,54,"25/7/2022"],
  [14,45,"17/9/2022"],
  [67,31,"13/2/2022"],
  [56,29,"25/3/2022"],
  [43,42,"5/7/2021"],
  [27,18,"4/9/2021"],
  [29,67,"8/12/2021"],
  [67,18,"9/10/2021"],
  [51,21,"14/11/2021"],
  [91,30,"13/2/2021"],
  [31,21,"12/3/2021"],
  [67,74,"17/8/2021"],
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
.get((req,res,next)=>{  
    res.statusCode = 200;
    res.setHeader('Content-type','application/json');
    res.json(data1);
})

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
        res.json({data:data2,cols:col2}); 

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
