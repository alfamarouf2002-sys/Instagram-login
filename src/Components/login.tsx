import instaImage from "../assets/insta.png";
import appleImage from "../assets/apple.png";
import facebookImage from "../assets/facebook.png";
import playstoreImage from "../assets/playstore.png";
import instalogoImage from "../assets/instalogo.png";

const Login = () => {
    return (
        <div className="login-container">
        <div className="box-1">
            <div className="box-1-logo">
                <img src={instaImage} alt="#" className="instagram-logo" /> 
                </div>
                <div className="input-box1">
                    <input type="text" placeholder="Phone Number, Username, or email address"/>
                </div>

        <div className="input-box2">
        <input type="password" placeholder="Enter password"/>
        </div>
        <div className="login-button-box">
            <button className="login-button">Login</button>
        </div>
        <div className="lines-box">
            <div className="line-1"></div>
            <div className="or-box">OR</div>
            <div className="line-2"></div>
        </div>
        <div className="fb-box">
            <div className="fb-login-row">
                <img src={facebookImage} alt="" className="fb-logo" />
                <p className="fb-link">Log in with facebook</p>
            </div>
            <p className="forgotten-passwd">Forgotten your password?</p>
        </div>
            </div>

        <div className="box-2">
            <p>Don't have an account? <span className="sign-up-span">Sign up</span></p>
        </div>
        <div className="get-app-box">
            <p>Get the app.</p>
        </div>
        <div className="downloadplayapp">
            <img src={appleImage} alt="#" className="apple-logo" /> 
            <img src={playstoreImage} alt="#" className="play-logo" /> 
        </div>
        
        
        
        
        
        
        
        
        
        </div>
    );
};

export default Login