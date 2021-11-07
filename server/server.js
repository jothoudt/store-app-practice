const express = require('express');
const bodyParser= require('body-parser');
const app=express();
const pool=require('./modules/pool');
const sessionMiddleware=require('./modules/session-middleware');
const passport=require('./strategies/user.strategy');
//------ROUTES INCLUDES----
//this router returns the products from the database to display them
const productRouter=require('./routes/product.router');
const userRouter = require('./routes/user.router');
//-------------------------

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(sessionMiddleware);

app.use(passport.initialize());
app.use(passport.session());
//---------ROUTES---------------//
//this route is to get the products
app.use('/api/products', productRouter);
//this route is to get the user
app.use('/api/user', userRouter);
//-----------------------------//

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>{
    console.log(`Listening on port: ${PORT}`)
});