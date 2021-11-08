//this stores details of a specified product
const productDetailsReducer=(state=[], action)=>{
    switch(action.type){
        case 'SET_PRODUCT_DETAILS':
            return action.payload
        default:
            return state;
    }   //end switch
}; //end productDetailsReducer

//product details will be located at store.productDetails
export default productDetailsReducer;