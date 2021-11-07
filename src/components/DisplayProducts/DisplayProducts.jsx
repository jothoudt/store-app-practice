import React from 'react';
import {useSelector} from 'react-redux';
//material ui
import Grid from '@material-ui/core/Grid';
//component
import DisplayProductsEach from '../DisplayProductsEach/DisplayProductsEach';
function DisplayProducts(){

    const products=useSelector((store)=>{return store.products})
    return(
        <div>
            <Grid style={{marginLeft:"25px"}}>
            {products.length === 0 ? <h2>Loading</h2> :
                products.map((item,id)=>{
                    return(
                        <DisplayProductsEach product={item} key={id} />
                    )
                })
            }
            </Grid>
        </div>
    )
}

export default DisplayProducts;