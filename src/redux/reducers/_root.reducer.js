import {combineReducers} from 'redux';
import cart from './cart.reducer';
import errors from './errors.reducer';
import productDetails from './productDetails.reducer';
import products from './products.reducer';
import user from './user.reducer';

//the rootReducer is the primary reducer for the entire project
const rootReducer = combineReducers({
    cart,
    errors,
    productDetails,
    products,
    user,
}); //end rootReducer

export default rootReducer;