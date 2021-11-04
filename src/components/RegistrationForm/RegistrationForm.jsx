import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useHistory} from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import MuiPhoneNumber from "material-ui-phone-number";
import Button from '@material-ui/core/Button';
//-----This style is used on the add birthdate input
const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));
//function that renders the registration form to gather the users data
function RegistrationForm() {
  //define classes
  const classes = useStyles();
  //define navigate
  const history=useHistory();
  //------------useState for form inputs-------------------//
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm]= useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [birthday, setBirthday] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  //--------------------------------------------------------//
  //used for errors with login
  const errors = useSelector((store) => store.errors);
  //used to get the user
  const user= useSelector(store => store.user)
  //define dispatch
  const dispatch = useDispatch();
  //this function is to register the user
  const registerUser = (event) => {
    event.preventDefault();
    //used to make sure the passwords entered match
    if(password !== passwordConfirm){
      alert('Passwords do not match')
    } // end if
    //to ensure a phone number is added
    if(phoneNumber === ''){
      alert('Please add phone number')
    } //end if
    else{
    dispatch({
      type: 'REGISTER',
      payload: {
        username: username,
        password: password,
        first_name: firstName,
        middle_name: middleName,
        last_name: lastName,
        email: email,
        birth_date: birthday,
        address_line_1: address1,
        address_line_2: address2,
        city: city,
        state: state,
        zip_code: zip,
        phone_number: phoneNumber
      },
    }); //end dispatch
  } //end else
  }; // end registerUser
  //if user logged in it will push them back to the main page
  const ifLoggedIn=()=>{
    if(user.username){
      history.push('/')
    }
  } //end isLoggedIn
  //This function handles the phone number input
  const handleOnChange=(value)=>{
    setPhoneNumber(value)
  }
  //returns a registration form for the user to register
  return (
    <form className="formPanel" onSubmit={registerUser}>
      {ifLoggedIn()}
      <h2>Register User</h2>
      {errors.registrationMessage && (
        <h3 className="alert" role="alert">
          {errors.registrationMessage}
        </h3>
      )}
      <div>
        <label htmlFor="username">
          Username:
          <input type="text" name="username" value={username} required onChange={(event) => setUsername(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Password:
          <input type="password" name="password" value={password} required onChange={(event) => setPassword(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="password">
          Confirm Password:
          <input type="password" name="password" value={passwordConfirm} required onChange={(event) => setPasswordConfirm(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="firstName">
          First Name:
          <input type="text" name="firstname" value={firstName} required onChange={(event) => setFirstName(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="middleName">
          Middle Name:
          <input type="text" name="middlename" value={middleName} onChange={(event) => setMiddleName(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="lastName">
          Last Name:
          <input type="text" name="lastname" value={lastName} required onChange={(event) => setLastName(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="email">
          Email:
          <input type="text" name="email" value={email} required onChange={(event) => setEmail(event.target.value)} />
        </label>
      </div>
      <MuiPhoneNumber required defaultCountry={'us'} onChange={handleOnChange}/>,
      <div>
        <label htmlFor="address1">
          Address Line 1:
          <input type="text" name="email" value={address1} required onChange={(event) => setAddress1(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="address1">
          Address Line 2 (optional):
          <input type="text" name="email" value={address2} onChange={(event) => setAddress2(event.target.value)} />
        </label>
      </div>
      <div>
        <label htmlFor="city">
          City:
          <input type="text" name="email" value={city} required onChange={(event) => setCity(event.target.value)} />
        </label>
      </div>
      <div>
        <select value={state} onChange={(event) => setState(event.target.value)}>
	        <option value="AL">Alabama</option>
	        <option value="AK">Alaska</option>
	        <option value="AZ">Arizona</option>
	        <option value="AR">Arkansas</option>
	        <option value="CA">California</option>
	        <option value="CO">Colorado</option>
	        <option value="CT">Connecticut</option>
	        <option value="DE">Delaware</option>
	        <option value="DC">District Of Columbia</option>
	        <option value="FL">Florida</option>
	        <option value="GA">Georgia</option>
	        <option value="HI">Hawaii</option>
	        <option value="ID">Idaho</option>
	        <option value="IL">Illinois</option>
	        <option value="IN">Indiana</option>
	        <option value="IA">Iowa</option>
	        <option value="KS">Kansas</option>
	        <option value="KY">Kentucky</option>
	        <option value="LA">Louisiana</option>
	        <option value="ME">Maine</option>
	        <option value="MD">Maryland</option>
	        <option value="MA">Massachusetts</option>
	        <option value="MI">Michigan</option>
	        <option value="MN">Minnesota</option>
	        <option value="MS">Mississippi</option>
	        <option value="MO">Missouri</option>
	        <option value="MT">Montana</option>
	        <option value="NE">Nebraska</option>
	        <option value="NV">Nevada</option>
	        <option value="NH">New Hampshire</option>
	        <option value="NJ">New Jersey</option>
	        <option value="NM">New Mexico</option>
	        <option value="NY">New York</option>
	        <option value="NC">North Carolina</option>
	        <option value="ND">North Dakota</option>
	        <option value="OH">Ohio</option>
	        <option value="OK">Oklahoma</option>
	        <option value="OR">Oregon</option>
	        <option value="PA">Pennsylvania</option>
	        <option value="RI">Rhode Island</option>
	        <option value="SC">South Carolina</option>
	        <option value="SD">South Dakota</option>
	        <option value="TN">Tennessee</option>
	        <option value="TX">Texas</option>
	        <option value="UT">Utah</option>
	        <option value="VT">Vermont</option>
	        <option value="VA">Virginia</option>
	        <option value="WA">Washington</option>
	        <option value="WV">West Virginia</option>
	        <option value="WI">Wisconsin</option>
	        <option value="WY">Wyoming</option>
        </select>
      </div>
      <div>
        <label htmlFor="city">
          Zip Code:
          <input type="text" name="email" value={zip} required onChange={(event) => setZip(event.target.value)} />
        </label>
      </div>
      <div>
        <TextField
        id="date"
        label="Birthday"
        type="date"
        defaultValue="2017-05-24"
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        required onChange={(event) => setBirthday(event.target.value)}
      />
      </div>
      <div>
        <Button style={{padding:'8px', marginTop:'20px', backgroundColor: '#48BF84', width: "88px"}} className="btn" type="submit" name="submit" value="Register">Register</Button>
      </div>
    </form>
  );
} //end RegisterForm

export default RegistrationForm;
