import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';

function ProductDetails(){
    //define dispatch
    const dispatch=useDispatch();
    //get id from params
    const id=useParams()
    //get product details from redux store
    const productDetails=useSelector((store)=>{return store.productDetails})

    useEffect(()=>
        dispatch({type:'FETCH_PRODUCT_DETAILS',payload:id})
    ,[])
    return(
        <div>
            {!productDetails.length ? 
            <div>
                <h2>Loading</h2>
            </div>  :
            <div>
                <h2>{productDetails[0].product_name}</h2>
            </div>
            } 
        </div>
    )
}

export default ProductDetails;