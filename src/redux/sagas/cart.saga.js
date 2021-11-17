import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';

function* cartSaga(){
    yield takeEvery('ADD_TO_CART', addToCart);
    yield takeEvery('FETCH_CART_LIST', fetchCartList)
};  //end cartSaga
//POST---To add items to the cart
function* addToCart(action){
    try{
        const response=yield axios.post('/api/cart/', action.payload)
    }   //end try
    catch(error){
        console.log('error in Adding Item to Cart', error)
    }   //end catch
};  //end addToCart
//GET---To fetch the items that are in the cart
function* fetchCartList(action){
    try{
        const response=yield axios.get('/api/cart/' + action.payload)
        yield put({type:'SET_SHOPPING_CART_LIST', payload:response.data})
    }   //end try
    catch(error){
        console.log('error in fetching cart items', error)
    }   //end catch
}   //end fetchCartList

export default cartSaga;

