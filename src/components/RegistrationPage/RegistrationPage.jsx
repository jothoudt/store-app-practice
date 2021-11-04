import React from 'react';
import { useHistory } from 'react-router-dom';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
//This component is the container for the register form
function RegistrationPage() {
  //define navigate
  const history=useHistory();
  return (
    <div>
      <Box border={1} borderColor="#ff4500" boxShadow={12} style={{width:'500px', margin: 'auto', padding:'50px', fontSize: '20px', marginTop: '100px'}}>
      <RegistrationForm />
      {/* <center> */}
        <Button style={{padding:'8px', marginTop:'12px', backgroundColor: '#48BF84', width: "88px"}}
          onClick={() => {
            history.push('/login');
          }}
        >
          Login
        </Button>
      {/* </center> */}
      </Box>
    </div>
  );
}

export default RegistrationPage;