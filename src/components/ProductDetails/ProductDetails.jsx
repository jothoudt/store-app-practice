import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import './ProductDetails.css';

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
                <div>
                    <h2>{productDetails[0].product_name}</h2>
                </div>
                <div className="product-description-container">
                    <div>
                        <img className="product-image" src={productDetails[0].photo} height='500px' width='500px'/>
                    </div>
                    <div>
                        <div className="product-photo-area">
                            <h4>{productDetails[0].price}</h4>
                        </div>
                        <div className="product-information-area">
                            <div>
                                <h4>Description:</h4>
                            </div>
                            <div>
                                <p>{productDetails[0].description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            } 
        </div>
    )
}

export default ProductDetails;