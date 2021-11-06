import {put, takeEvery} from 'redux-saga/effects';
import axios from 'axios';
//saga to get the products
function* productsSaga(){
    yield takeEvery('FETCH_PRODUCTS', getProducts());
};  //end productsSaga

function* getProducts(){
    try{
        console.log('in GET products')
        const response=yield axios.get('/api/products')
        yield put({type:'SET_PRODUCTS', payload:response.data});
    }   //end try
    catch(error){
        console.log('get products error:', error)
    }   //end catch
};  //end productsSaga

export default productsSaga;