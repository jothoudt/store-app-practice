import React,{useEffect} from 'react';
import {useDispatch} from 'react-redux';

function Home(){
    //define dispatch
    const dispatch=useDispatch();

    //to get products from the database
    useEffect(()=>
        dispatch({type:'FETCH_PRODUCTS'})
    ,[])
    return(
        <div>
            <div>
                <h1>Fake Store Website</h1>
            </div>
        </div>
    )
}

export default Home;