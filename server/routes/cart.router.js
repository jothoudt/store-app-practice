const express = require('express');
const pool=require('../modules/pool')
const cartRouter= express.Router();

//GET--GET ROUTE FOR ALL PRODUCTS IN USER'S SHOPPING CART
cartRouter.get('/', (req,res)=>{
    //SQL DATABASE QUERY
    const getProductsQuery=`SELECT * FROM shopping_cart WHERE user_id=$1;`
    //execute database query
    pool.query(getProductsQuery,[req.params]).then(result=>res.send(result.rows)).catch((err)=>{console.log(err), res.sendStatus(500)});
});  //end GET ROUTE for all products in user's shopping cart

//POST---ADD AN ITEM TO USER'S SHOPPING CART
cartRouter.post('/', (req,res)=>{
    //SQL DATABASE QUERY
    const addItemQuery=`INSERT INTO shopping_cart (user_id, product_id, product_name, qty, price, line_total, photo)
        VALUES ($1, $2, $3, $4, $5, $6, $7);`
    //execute database query
    pool.query(addItemQuery,[req.body.user_id, req.body.product_id, req.body.product_name, req.body.qty, req.body.price, req.body.line_total, req.body.photo])
        .then(res.sendStatus(200)).catch((err)=>{console.log(err), res.sendStatus(500)})
});  //end POST 



module.exports= cartRouter;