const express = require('express');
const pool=require('../modules/pool')
const productRouter= express.Router();

//GET--GET ROUTE FOR ALL PRODUCTS
productRouter.get('/', (req,res)=>{
    //SQL DATABASE STATEMENT
    const getProductsQuery=`SELECT * FROM products;`
    //execute database query
    pool.query(getProductsQuery).then(result=>res.send(result.rows)).catch((err)=>{console.log(err), res.sendStatus(500)});
});  //end GET ROUTE for all products

//GET--GET ROUTE FOR A SPECIFIC PRODUCT
productRouter.get('/:id', (req,res)=>{
    console.log('in router for product details', req.params.id)
    //SQL DATABASE STATEMENT
    const getProductDetailsQuery=`SELECT * FROM products WHERE id=$1;`
    //execute database query
    pool.query(getProductDetailsQuery,[req.params.id]).then(result=>{res.send(result.rows)}).catch((err)=>{console.log(err), res.sendStatus(500)});
}); //end GET ROUTE for specific product

module.exports= productRouter;