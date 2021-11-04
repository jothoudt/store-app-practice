import React from 'react';
import UserStatus from '../UserStatus/UserStatus';
import './Header.css';

function Header(){

    //header for the website will contain the company name, logo and either a 
    //login drop down or user name and option to log out
    return(
        <div className="wrapper">
          <div className="logo">
            <h1>FakeStore</h1>
          </div>
          <div className="search-area">
          </div>
          <div className="user-info">
              <UserStatus />
          </div>
        </div>
    )
} //end Header

export default Header;