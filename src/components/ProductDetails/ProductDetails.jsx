import React,{useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useParams} from 'react-router-dom';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import './ProductDetails.css';

function ProductDetails(){
    //useState
    let [productQuantity, setProductQuantity]=useState(0);
    //define dispatch
    const dispatch=useDispatch();
    //get id from params
    const id=useParams()
    //get product details from redux store
    const productDetails=useSelector((store)=>{return store.productDetails})
    const user= useSelector((store)=>{return store.user})
    const addCartItem=()=>{
        //this will make sure the user has selected a quantity
        if(productQuantity === ''){
          return alert('Please select qty')
        }//end if
        /*this will check if the user is logged in. If the user is not logged in. They
        will be alerted to either log in or register. They will not be able to add stuff to their shopping cart
        without logging in. */
        if(!user.username){
          alert('Please Log In or Register')
        }//end if
        //object to be sent in dispatch
        let newOrderItem={
            user_id: user.id,
            product_id: productDetails[0].id,
            product_name: productDetails[0].product_name,
            qty: productQuantity,
            price: productDetails[0].product_price,
            line_total: productDetails[0].product_price * productQuantity,
            photo: productDetails[0].photo,
        } //end newOrderItem object
            console.log('add to cart', newOrderItem)
            dispatch({type:'ADD_TO_CART',payload: newOrderItem})
            alert('Item Added to Cart')
      } //end addCartItem
    //this function changes the quantity of the item wanted
    const handleChange=(event)=>{
    setProductQuantity(event.target.value);
    } //end handleChange
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
                                <AddShoppingCartSharpIcon style={{marginTop: "auto", marginRight: "24px", fontSize:"48px", color:"#48BF84"}} onClick={addCartItem} />
                                <FormControl variant="outlined" >
                                <InputLabel id="demo-simple-select-outlined-label">Quantity</InputLabel>
                                    <Select
                                        style={{height:"50px", width:"120px"}}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value={productQuantity}
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={1}>1</MenuItem>
                                        <MenuItem value={2}>2</MenuItem>
                                        <MenuItem value={3}>3</MenuItem>
                                        <MenuItem value={4}>4</MenuItem>
                                        <MenuItem value={5}>5</MenuItem>
                                    </Select>
                                </FormControl>
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