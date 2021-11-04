import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
//returns the logoutbutton
function LogOutButton(props) {
  //define dispatch
  const dispatch = useDispatch();
  return (
    <Button  style={{backgroundColor: "#48BF84", height: '36px',width:'88px', marginTop:'auto', marginBottom: 'auto', marginLeft:"6px", color:"#14110F"}}
      // This button is, the className is passed to it from it's parents.
      className={props.className}
      onClick={() => dispatch({ type: 'LOGOUT' })}
    >
      Log Out
      </Button>
  );
} //end LogOutButton

export default LogOutButton;