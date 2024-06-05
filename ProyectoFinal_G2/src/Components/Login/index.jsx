import React from "react"
import './index.css'
import PasswordInput from "../Inputs/PasswordInput"
import EmailInput from "../Inputs/EmailInput"
import { Button } from "../Buttons"
import facebookIcon from '../../assets/icons/facebookIcon.svg';
import twitterIcon from '../../assets/icons/facebookIcon.svg';
import googleIcon from '../../assets/icons/facebookIcon.svg';



export function Login(){
    return(
        <div className="login-screen">
            <div className="conteiner-login">

                <div className="children-conteiner-login">
                    
                    <h1>Welcome! Log in or register</h1>
                    <p>Log in to find the games you´re looking for</p>

                    <EmailInput/>
                    <PasswordInput/>
                    <Button text="Login" className="login-button" />
                    
                    <div className="forgot-password-link">
                        <a href="#">Forgot password?</a>
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