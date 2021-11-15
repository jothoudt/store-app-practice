//this stores all the items that are in the users shopping cart
const cartReducer=(state=[], action)=>{
    switch(action.type){
        case 'SET_SHOPPING_CART_LIST':
            return action.payload;
        default:
            return state;
    }   //end switch
};  //end cartReducer

//shopping cart items will be on the redux state at store.cart
export default cartReducer;