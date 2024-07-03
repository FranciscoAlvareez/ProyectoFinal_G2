import React from "react";
import './index.css';
import PasswordInput from "../Inputs/PasswordInput";
import EmailInput from "../Inputs/EmailInput";
import { Button } from "../Buttons";
import facebookIconDark from '../../assets/icons/facebookIconDark.svg';
import twitterIconDark from '../../assets/icons/twitterIconDark.svg';
import googleIconDark from '../../assets/icons/googleIconDark.svg';
import facebookIconLight from '../../assets/icons/facebookIconLight.svg';
import twitterIconLight from '../../assets/icons/twitterIconLight.svg';
import googleIconLight from '../../assets/icons/googleIconLight.svg';
import CheckBox from "../CheckBoxs/checkBox";
import { Switch } from "../Switch";

export function Login({ theme, toggleTheme }){

    const facebookIcon = theme === 'dark' ? facebookIconDark : facebookIconLight;
    const twitterIcon = theme === 'dark' ? twitterIconDark : twitterIconLight;
    const googleIcon = theme === 'dark' ? googleIconDark : googleIconLight;
    
    return(
        <div className={`login-screen ${theme}`}>
            <div className="switch-wrapper-login">
                <Switch onToggle={toggleTheme} />
            </div>
            <div className="conteiner-login">
                <div className="children-conteiner-login">
                    
                    <h1>Welcome! Log in or register</h1>
                    <p>Log in to find the games you´re looking for</p>

                    <EmailInput className="input" />
                    <PasswordInput/>
                    <div className="or-container">
                        <CheckBox label="Remember me" theme={theme} />
                        <a href="#" style={{ color: "#5FE19B"}}>Forgot password?</a>   
                    </div>
                    <Button text="Login" className="login-button" />
                    <div className="not-registered-link">
                        <p>Not registered?<a href="#" style={{ color: "#5FE19B"}}>Register now</a></p>
                    </div>

                    <div className="or-container">
                        <div className="line"></div>
                            <p className="or-text">or</p>
                        <div className="line"></div>
                    </div>

                    <Button text="Login with Facebook" className="icon-button" icon={<img src={facebookIcon} alt="Facebook" />} />
                    <Button text="Login with Twitter" className="icon-button" icon={<img src={twitterIcon} alt="Twitter" />} />
                    <Button text="Login with Google" className="icon-button" icon={<img src={googleIcon} alt="Google" />} />  
                </div>
            </div>   
        </div>
    )
}