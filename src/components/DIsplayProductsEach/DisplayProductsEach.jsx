import React from 'react';
//material ui
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { CardMedia } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import {Link} from 'react-router-dom';

//this component is a child of DisplayProducts this is to map out an individual product onto a card as part of a grid of many cards
function DisplayProductsEach({product, id}){
    //link for product details
    let productDetails = '/product_details/' + product.id
    return(
        // <div key={id}>
            <Grid container item xs={12} spacing={1} >
                <Box border={2} borderColor="#ff4500" boxShadow={12} style={{height: '360px', width:'280px', margin: '12px'}}>
                    {/* <Card style={{height:'100%', padding:'10px'}}> */}
                        <div className="product-title">
                          <h3>{product.product_name}</h3>
                        </div>
                        <CardMedia image={product.photo} style={{width:'150px', height:'150px', margin:'auto'}} />
                        <div className="product-price">
                          <h4>${product.price}</h4>
                        </div>
                        <CardActions>
                            <Link to={productDetails} params={product.id} style={{marginRight:"auto", marginLeft:"auto"}}>
                              <Button style={{backgroundColor: '#48BF84'}}>View Details</Button>
                            </Link>
                        </CardActions>
                    {/* </Card> */}
                </Box>
            </Grid>
        // </div>
    )
};  //end DisplayProductsEach

export default DisplayProductsEach;