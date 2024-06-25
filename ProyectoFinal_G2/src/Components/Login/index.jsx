import React from "react"
import './index.css'
import PasswordInput from "../Inputs/PasswordInput"
import EmailInput from "../Inputs/EmailInput"
import { Button } from "../Buttons"
import facebookIcon from '../../assets/icons/facebookIcon.svg';
import twitterIcon from '../../assets/icons/facebookIcon.svg';
import googleIcon from '../../assets/icons/facebookIcon.svg';
import CheckBox from "../CheckBoxs/checkBox"
import { useNavigate } from "react-router-dom"


export function Login(){
    const navigate = useNavigate();

    const handleLogin = () => {
        navigate('/principal');
    };
    return(
        <div className="login-screen">
            <div className="conteiner-login">

                <div className="children-conteiner-login">
                    
                    <h1 className="texto-blanco">Welcome! Log in or register</h1>
                    <p className="texto-blanco">Log in to find the games you´re looking for</p>

                    <EmailInput className="input"/>
                    <PasswordInput />

                    <div className="or-container">
                        <CheckBox label="Remember me"/>
                        <div className="forgot-password-link">
                            <a href="#" style={{ color: "#5FE19B"}}>Forgot password?</a>
                        </div>

                    </div>
                    <Button text="Login" className="login-button" onClick={handleLogin} />

                    <div className="or-container">
                    <p className="texto-blanco">Not registered yet?</p>
                    <div className="remember-me">
                        <a href="#" style={{ color: "#5FE19B"}}>Remember me</a>
                    </div>

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