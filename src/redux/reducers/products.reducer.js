//this stores all of the products in the database to display
const productsReducer=(state=[], action)=>{
    switch(action.type){
        case 'SET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }   //end switch
};  //end productsReducer

//products will be on the redux state at store.products
export default productsReducer;