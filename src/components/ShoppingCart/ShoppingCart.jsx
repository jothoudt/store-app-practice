//import dependencies
import React,{useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
//import Material UI
import Box from '@material-ui/core/Box';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import TableFooter from '@material-ui/core/TableFooter'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import CheckoutStepper from '../CheckoutStepper/CheckoutStepper';
//import css
import './ShoppingCart.css';
//function returns Shopping Cart info
function ShoppingCart(){
  //define usehistory
  const history=useHistory();
  //define useDispatch
  const dispatch=useDispatch();
  //get data from the store. This will bring the users order from the store
  const orderDetails = useSelector((store)=>{return store.cart})
  //get user from the store
  const user= useSelector((store)=>{return store.user})
  //define totalCost variables
  let totalCost=0;
  //this function will conditionally render a detailed list of itmes in the cart
  const getReceiptDetails=()=>{
    //define display
    let display='';
    //if order details don't exist, display that the cart is empty
    if(!orderDetails.length){
      display= 
      <>
      <h2>Cart is Empty</h2>
      </>
    }//end if
    //if orders do exist display the details of the items in the order
    else{
      //function moves user to the next page
      const proceedToCheckout=()=>{
          console.log('add a destination')
      }; //end proceedToCheckout
      //define display
      display=
        <>
          <Box border={2} borderColor="#ff4500" boxShadow={12} width="80%" margin="auto" marginBottom="40px">
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell style={{fontSize:"20px",borderColor: "#ff4500"}}>Photo</TableCell>
                  <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">Product Name</TableCell>
                  <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">Quantity</TableCell>
                  <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">Price</TableCell>
                  <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">Remove Item</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orderDetails.map((item, id)=>{
                  totalCost += Number(item.line_total)
                  //this function removes an itme from the shopping cart
                  const removeItem=()=>{
                    //define item to remove from the list
                    let removeItem= {
                      itemId: item.id,
                      user_id: user.id}

                    dispatch({type:'REMOVE_CART_ITEM', payload:removeItem});
                  }; //end removeItem
                  return(
                    <TableRow key={id}>
                      <TableCell style={{borderColor: "#ff4500"}}><img src={item.photo} style={{height: "100px", width: "100px"}}></img></TableCell>
                      <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">{item.product_name}</TableCell>
                      <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">{item.qty}</TableCell>
                      <TableCell style={{fontSize:"20px", borderColor: "#ff4500"}} align="right">${item.line_total}</TableCell>
                      <TableCell align="right" style={{borderColor: "#ff4500"}}><DeleteForeverIcon onClick={removeItem} style={{fontSize:"44px", color:"#48BF84"}}/></TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
              <TableFooter>
                <TableCell></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"></TableCell>
                <TableCell align="right"style={{fontSize: "28px", fontWeight:"600", color:"black",padding:"10px"}}align="right">Total Cost:</TableCell>
                <TableCell style={{fontSize: "28px", fontWeight:"600", color:"black",padding:"10px"}}align="right"> ${totalCost}</TableCell>
              </TableFooter>
            </Table>
          </Box>
          <div className="action-buttons">
            {/* <Button  style={{backgroundColor:"blue", color:"white", margin:"25px"}}>Edit Cart</Button> */}
            <Button onClick={proceedToCheckout} margin="25px" style={{padding:'8px', margin: "auto", backgroundColor: "#48BF84",color:"#14110F"}}>Check Out</Button>  
          </div>
        </>
    }
    return display;
  }; //end getReceiptDetails
  //useffect to get information on load
  useEffect(()=>
  dispatch({type:'FETCH_CART_LIST', payload: user.id})
,[]);

    //returns all items selected to purchase
    return(
      <div className="shopping-cart-container">
        <div className="table-title">
          {/* <CheckoutStepper stepIndex={0} /> */}
          <h1>Shopping Cart</h1>
        </div>
        <div>
          {getReceiptDetails()}
        </div>
      </div>
    )
} //end ShoppingCart

export default ShoppingCart;