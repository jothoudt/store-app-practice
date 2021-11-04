import React from 'react';
import {useSelector} from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './UserStatus.css'
//this component conditionally renders a login/register button if the user Is Not signed in and displays user name and a Log out button if the user IS signed in.
//this component will go into the Header component
function UserStatus (){
    //define history
    const history=useHistory();
    //import user from the store
    const user=useSelector((store)=>{return store.user})
    const goLogin=()=>{
      history.push('/login')
    } //end goLogin
    const goRegister=()=>{
      history.push('/registration')
    } //end goRegister
    //conditionally render user or buttons
    const getDisplay=()=>{
      //define display
        let display= ''
        //if there is a username display Hello user and log out button
        if(user.username){
            display= 
            <div className="message-container">
              <div className="hello-message">
                <h5>Hello, {user.username}</h5>
              </div>
              <div className="logout-button">
                <LogOutButton />
              </div>
            </div>
        } //end if 
        //else display the login and register buttons
        else{
            display=
            <div className="button-container">
              <div className="login-button"><Button onClick={goLogin} style={{backgroundColor: "#48BF84", height: '36px',width:'88px', marginTop:'auto', marginBottom: 'auto', marginRight:"6px", color:"#14110F"}}>Login</Button></div><div className="register-button"><Button onClick={goRegister} style={{backgroundColor: "#48BF84", height:'36px', width: '88px', marginTop:'auto', marginBottom: 'auto', marginLeft:"6px", color: "#14110F"}}>Register</Button></div>
            </div>
        } //end else
        return display
    }
    //return will conditionally render login buttons or hello message
    return(
        <>
        {getDisplay()}
        </>
    )
}

export default UserStatus;