import React, { useState } from 'react';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Divider } from 'antd';
import loginback from '../assets/loginback.png';
import { FiSun, FiMoon } from "react-icons/fi"; // Import FiMoon icon for dark mode
import logo from '../assets/logo.png';
import { GoogleLogin } from 'react-google-login';

function Login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for tracking dark mode

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const responseGoogle = (response) => {
    console.log(response);
    // Handle Google sign-in response
  };

  return (
    <div className={`imageandform ${darkMode ? 'dark-mode' : ''}`}>
      <div className='loginform'>
        <div className='signin'>Sign In</div>
        <div style={{color:'#A3AED0'}}>Enter your email and password to sign in!</div>

        <div className='loginfield'>Email*</div>
        <div><input type="text" placeholder='mail@simmmple.com' className='logininput'/></div>

        <div className='loginfield'>Password*</div>
        <div className='password-container'>
          <input
            type={passwordVisible ? "text" : "password"}
            placeholder='Min. 8 characters'
            className='logininput'
          />
          <span className='toggle-password' onClick={togglePasswordVisibility}>
            <i className={`fas ${passwordVisible ? 'fa-eye-slash' : 'fa-eye'}`} style={{color:'#A3AED0'}}></i>
          </span>
        </div>

        <div className='keeploggedin'>
          <div ><input type="checkbox"  className='checkbox'/> </div>
          <div className='keepmelogged'>Keep me logged in</div>
          <div className='forgot'>Forgot Password?</div>
        </div>

        <div><button className='signinbutton'>Sign In</button></div>

        <div style={{display:'flex', padding:'20px 0px'}}>
          <div  className='notregisteredyeat'>Not registered yet?</div>
          <div  className='createaccountlog'>Create an Account</div>
        </div>

        <div style={{marginRight:'170px'}}>
          <Divider style={{ borderTopWidth: '3px', fontWeight:'700', borderColor: '#A3AED0' }}>or</Divider>
        </div>

        <div>
          <GoogleLogin
            clientId="YOUR_GOOGLE_CLIENT_ID"
            buttonText="Sign in with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            className="googlebutton" 
          />
        </div>
      </div>

      <div  className='bg'>
        <div className='background'>
        
          <img src={logo} alt="" height={"300px"} width={'330px'} className='logo' />
          <div style={{display:'flex', justifyContent:'center', justifySelf:'center', justifyItems:'center', justifyContent:'center', alignItems:'center', alignSelf:'center'}}>
            <div className='learnmorelogin'>
              <div style={{color:'#ffffff'}}>Learn more</div>
              <div ><a href="https://www.bitsathy.ac.in/"   target="_blank">bitsathy.ac.in</a></div>
            </div>
          </div>
        
        
         <div className='loginmodecontainer'>
           <button className='loginmode' onClick={toggleDarkMode}>{darkMode ? <FiMoon /> : <FiSun />}</button>
         </div>
        </div>
      </div>

    </div>
  );
}

export default Login;
