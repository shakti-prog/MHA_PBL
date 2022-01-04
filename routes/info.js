const express = require('express');
const bodyParser = require('body-parser');
const Assets = require('../models/asset');

const assetRouter = express.Router();

const data1 = [
  {"ordersent":10,"solditemsamount":87,"solditemscount":12,"dateCreated":"12/12/2021"},{"ordersent":5,"solditemsamount":25,"solditemscount":12,"dateCreated":"6/12/2021"},{"ordersent":7,"solditemsamount":12,"solditemscount":12,"dateCreated":"1/12/2021"},
  {"ordersent":6,"solditemsamount":90,"solditemscount":12,"dateCreated":"11/12/2021"},{"ordersent":4,"solditemsamount":75,"solditemscount":12,"dateCreated":"9/11/2021"},{"ordersent":15,"solditemsamount":50,"solditemscount":12,"dateCreated":"5/11/2021"},
  {"ordersent":13,"solditemsamount":89,"solditemscount":12,"dateCreated":"3/11/2021"},{"ordersent":8,"solditemsamount":78,"solditemscount":12,"dateCreated":"1/11/2021"},{"ordersent":10,"solditemsamount":17,"solditemscount":12,"dateCreated":"17/10/2021"},
  {"ordersent":11,"solditemsamount":68,"solditemscount":12,"dateCreated":"2/10/2021"},{"ordersent":17,"solditemsamount":54,"solditemscount":12,"dateCreated":"21/10/2021"},{"ordersent":14,"solditemsamount":34,"solditemscount":12,"dateCreated":"13/10/2021"},
  {"ordersent":14,"solditemsamount":10,"solditemscount":12,"dateCreated":"12/9/2021"},{"ordersent":15,"solditemsamount":25,"solditemscount":12,"dateCreated":"6/9/2021"},{"ordersent":37,"solditemsamount":12,"solditemscount":12,"dateCreated":"1/9/2021"},
  {"ordersent":26,"solditemsamount":92,"solditemscount":12,"dateCreated":"11/9/2021"},{"ordersent":14,"solditemsamount":95,"solditemscount":12,"dateCreated":"9/8/2021"},{"ordersent":25,"solditemsamount":51,"solditemscount":12,"dateCreated":"5/8/2021"},
  {"ordersent":53,"solditemsamount":81,"solditemscount":12,"dateCreated":"3/8/2021"},{"ordersent":8,"solditemsamount":18,"solditemscount":12,"dateCreated":"1/8/2021"},{"ordersent":11,"solditemsamount":10,"solditemscount":12,"dateCreated":"17/7/2021"},
  {"ordersent":21,"solditemsamount":60,"solditemscount":12,"dateCreated":"2/7/2021"},{"ordersent":7,"solditemsamount":24,"solditemscount":12,"dateCreated":"21/7/2021"},{"ordersent":84,"solditemsamount":31,"solditemscount":12,"dateCreated":"13/7/2021"}

];

const data2 = [
  {"ordersent":10,"Requests":2,"dateCreated":"12/12/2021"},{"ordersent":5,"Requests":25,"dateCreated":"6/12/2021"},{"ordersent":7,"Requests":14,"dateCreated":"1/12/2021"},
  {"ordersent":6,"Requests":9,"dateCreated":"11/12/2021"},{"ordersent":4,"Requests":23,"dateCreated":"9/11/2021"}, {"ordersent":15,"Requests":1,"dateCreated":"5/11/2021"},
  {"ordersent":13,"Requests":3,"dateCreated":"3/11/2021"},{"ordersent":8,"Requests":11,"dateCreated":"21/11/2021"},{"ordersent":10,"Requests":4,"dateCreated":"13/10/2021"},
  {"ordersent":12,"Requests":14,"dateCreated":"2/10/2021"},{"ordersent":8,"Requests":9,"dateCreated":"21/10/2021"},{"ordersent":4,"Requests":19,"dateCreated":"13/10/2021"},
  {"ordersent":11,"Requests":22,"dateCreated":"12/9/2021"},{"ordersent":15,"Requests":15,"dateCreated":"6/9/2021"},{"ordersent":17,"Requests":13,"dateCreated":"1/9/2021"},
  {"ordersent":16,"Requests":4,"dateCreated":"11/9/2021"},{"ordersent":3,"Requests":23,"dateCreated":"9/8/2021"}, {"ordersent":12,"Requests":11,"dateCreated":"5/8/2021"},
  {"ordersent":23,"Requests":12,"dateCreated":"3/8/2021"},{"ordersent":2,"Requests":31,"dateCreated":"21/8/2021"},{"ordersent":13,"Requests":14,"dateCreated":"13/7/2021"},
  {"ordersent":32,"Requests":12,"dateCreated":"2/7/2021"},{"ordersent":9,"Requests":19,"dateCreated":"21/7/2021"},{"ordersent":24,"Requests":13,"dateCreated":"13/7/2021"}
];


const data4 = ["tab1","tab2"];
/*const data3 = [
  {"solditemsamount":100"solditemscount":12,,"Requests":2,"dateCreated":"12/12/2021"},{"solditemsamount":250"solditemscount":12,,"Requests":25,"dateCreated":"6/12/2021"},{"solditemsamount":120"solditemscount":12,,"Requests":14,"dateCreated":"1/12/2021"},
  {"solditemsamount":90,"solditemscount":12,"Requests":9,"dateCreated":"11/12/2021"},{"solditemsamount":75,"solditemscount":12,"Requests":23,"dateCreated":"9/11/2021"},{"solditemsamount":50,"solditemscount":12,"Requests":1,"dateCreated":"5/11/2021"},
  {"solditemsamount":89,"solditemscount":12,"Requests":3,"dateCreated":"3/11/2021"},{"solditemsamount":78,"solditemscount":12,"Requests":11,"dateCreated":"21/11/2021"},{"solditemsamount":100"solditemscount":12,,"Requests":4,"dateCreated":"13/10/2021"},
  {"solditemsamount":68,"solditemscount":12,"Requests":3,"dateCreated":"2/10/2021"},{"solditemsamount":56,"solditemscount":12,"Requests":14,"dateCreated":"21/10/2021"},{"solditemsamount":78,"solditemscount":12,"Requests":18,"dateCreated":"13/9/2021"},
  {"solditemsamount":101"solditemscount":12,,"Requests":12,"dateCreated":"12/9/2021"},{"solditemsamount":254"solditemscount":12,,"Requests":22,"dateCreated":"6/9/2021"},{"solditemsamount":121"solditemscount":12,,"Requests":13,"dateCreated":"1/9/2021"},
  {"solditemsamount":91,"solditemscount":12,"Requests":19,"dateCreated":"11/8/2021"},{"solditemsamount":72,"solditemscount":12,"Requests":21,"dateCreated":"9/8/2021"},{"solditemsamount":51,"solditemscount":12,"Requests":12,"dateCreated":"5/8/2021"},
  {"solditemsamount":83,"solditemscount":12,"Requests":23,"dateCreated":"3/8/2021"},{"solditemsamount":71,"solditemscount":12,"Requests":14,"dateCreated":"21/7/2021"},{"solditemsamount":102"solditemscount":12,,"Requests":41,"dateCreated":"13/7/2021"},
  {"solditemsamount":61,"solditemscount":12,"Requests":13,"dateCreated":"2/7/2021"},{"solditemsamount":50,"solditemscount":12,"Requests":10,"dateCreated":"21/7/2021"},{"solditemsamount":73,"solditemscount":12,"Requests":10,"dateCreated":"13/7/2021"}
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
      if(tabName == 'tab1'){
        res.statusCode = 200;
        res.setHeader('Content-type','application/json');
        res.json(data1); 
      }
      else if(tabName == 'tab2'){
        res.statusCode = 200
        res.setHeader('Content-type','application/json');
        res.json(data2);
      }
      else{
        res.statusCode = 200
        res.setHeader('Content-type','application/json');
        res.json(data2);

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
