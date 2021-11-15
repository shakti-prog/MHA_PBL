const mongoose = require('mongoose');
const Schema = mongoose.Schema;


    
    const assetSchema = new Schema(
     {
     name:{
        type:String,
        required:true,
     },
     description:{
       type:String,
       required:true,
     },
     price:{
        type:Number,
        required:true
     },
     amountavailbale:{
        type:Number,
        required:true
     },
     Noofrequests:{
        type:Number,
        default:0
     },
     forrepair:{
        type:Number,
        default:0
     },
    
     },
    );
    
    
    var assets = mongoose.model('Dish',assetSchema);
    
    module.exports = assets;