import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';
import DisplayProducts from '../DisplayProducts/DisplayProducts';

function Home(){
    //define dispatch
    const dispatch=useDispatch();

    //to get products from the database
    useEffect(()=>
        dispatch({type:'FETCH_PRODUCTS'})
    ,[]);
    return(
        <div>
            <div>
                <h1>Fake Store Website</h1>
            </div>
            <div>
                <DisplayProducts />
            </div>
        </div>
    )
}

export default Home;