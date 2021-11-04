import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import './LoginForm.css';
//This component is the form for the login
function LoginForm() {
  //------------------useState-----------------------------//
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //------------------------------------------------------//
  //define navigate
  const history=useHistory()
  //define errors for login errors
  const errors = useSelector(store => store.errors);
  //get user from reducer
  const user= useSelector(store => store.user)
  //define dispatch
  const dispatch = useDispatch();
  //this function is to handle user login
  const login = (event) => {
    event.preventDefault();

    if (username && password) {
      dispatch({
        type: 'LOGIN',
        payload: {
          username: username,
          password: password,
        },
      });
    } else {
      dispatch({ type: 'LOGIN_INPUT_ERROR' });
    } //end else
  }; // end login
  //if user logged in bring to the home page
  const ifLoggedIn=()=>{
    if(user.username){
      history.push('/')
    } //end if
  } //end ifLoggedIn
  //returns form for login
  return (
    <form className="formPanel" onSubmit={login}>
      {ifLoggedIn()}
      <h2>Login</h2>
      {errors.loginMessage && (
        <h3 className="alert" role="alert">
          {errors.loginMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            name="username"
            required
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </label>
      </div>
      <div>
        <Button style={{padding:'8px', marginTop:'20px', backgroundColor: '#48BF84', width: "88px"}} className="btn" type="submit" name="submit" value="Log In">Log In</Button>
      </div>
    </form>
  );
} //end LoginForm

export default LoginForm;