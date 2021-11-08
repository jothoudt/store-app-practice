import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
//saga to get the products
function* productsSaga(){
    yield takeEvery('FETCH_PRODUCTS', getProducts);
    yield takeEvery('FETCH_PRODUCT_DETAILS', getProductDetails)
};  //end productsSaga
//GET route to return all products to display
function* getProducts(){
    try{
        console.log('in GET products');
        const response=yield axios.get('/api/products');
        yield put({type:'SET_PRODUCTS', payload:response.data});
    }   //end try
    catch(error){
        console.log('get products error:', error);
    }   //end catch
};  //end getProducts
//GET route to return a specified product
function* getProductDetails(action){
    try{
        console.log('in GET product details', action.payload);
        const response=yield axios.get('/api/products/' + action.payload.id )
        yield put({type:'SET_PRODUCT_DETAILS', payload: response.data});
    }   //end try
    catch(error){
        console.log('get product details error', error)
    }   //end catch
}; //end getProductDetails

export default productsSaga;