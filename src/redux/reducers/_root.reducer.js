import {combineReducers} from 'redux';
import errors from './errors.reducer';
import products from './products.reducer';
import user from './user.reducer';

const rootReducer = combineReducers({
    errors,
    products,
    user,
})

export default rootReducer;