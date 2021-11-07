const express = require('express');
const pool=require('../modules/pool')
const productRouter= express.Router();

//GET--GET ROUTE FOR ALL PRODUCTS
productRouter.get('/', (req,res)=>{
    //SQL DATABASE STATEMENT
    const getProductsQuery=`SELECT * FROM products`
    //execute database query
    pool.query(getProductsQuery).then(result=>res.send(result.rows)).catch((err)=>{console.log(err), res.sendStatus(500)});
});  //end GET ROUTE for all products

module.exports= productRouter;