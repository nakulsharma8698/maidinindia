import React from "react";
import TextField from "@material-ui/core/TextField";
import { Fab, FormControlLabel, Checkbox } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./style.scss";
import axios from 'axios';
require("dotenv").config();
//import axios from 'axios';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import Navbar from "../Footer/navbar";
import {FaFacebookF, FaGoogle} from 'react-icons/fa'




class Login extends React.Component {
  constructor(props)
  {
    super(props)
    this.state={
      phonenumber: '',
      password:''
    }
  this.handleLogin = this.handleLogin.bind(this);
}

handleChange = (e) => {
  this.setState({
    [e.target.name]: e.target.value
  })
}


handleLogin(e)
{
  e.preventDefault();
      console.log(this.state.phonenumber);
      const data={phonenumber:this.state.phonenumber, password: this.state.password}
      axios.post("http://localhost:4000/login/user", data)
      .then(res => { 
        if(!res.data.message){
          console.log(res.data);  
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('name',res.data.name);
          localStorage.setItem('mobile',res.data.mobile);
          this.props.history.push('/');
        }       
        else
        console.log(res.data); 
        //alert("Failed to Get Code");
      }) 
}
/*async signup(res) {
      const googleresponse = {
        Name: res.profileObj.name,
        email: res.profileObj.email,
        token: res.googleId,
        Image: res.profileObj.imageUrl,
        ProviderId: 'Google'
      };
      //debugger;
      console.log(res.accessToken);
      alert("Login SuccessFul");
      localStorage.setItem('token', res.accessToken);
      localStorage.setItem('Name', res.profileObj.name);
      const token = localStorage.getItem('token');
      this.props.history.push("/");
      await axios.post('http://localhost:4000/userlogin', googleresponse)

      .then(res => {
        
        console.log(res);
    })
    .catch(function (error){
        console.log(error);
    })
  }

   
  onSubmit = async e => {
    e.preventDefault();
    const data = {};
    const formData = new FormData(e.target);
    data.mobile = formData.get("mobile");
    // data.password = formData.get("password");

    const response = await API.POST(apis.login, data);
    if (response.success) {
      Cookie.set("token", response.data.token);
      this.props.history.push("http://localhost:3000/acc/");
      window.location.reload();
    }
  };*/
  render() {
    const responseGoogle = (response) => {
            console.log(response.accessToken);
            //var res = response.profileObj;
            //console.log(res.googleId);
            //debugger;
            //
           // this.signup(response);
          }
    return (
      <div>
        <Navbar/>
      <div className="login-wrapper formmaid" style={{width:'30%'}}>
        <form
          className="login-form"
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
             <span className="reglog active ">Login</span><Link to='/signup'><span className="reglog">Signup</span></Link><br/><br/><br/>
          <TextField
            classes={{ root: "login-input" }}
            label="Mobile Number"
            margin="normal"
            fullWidth
            required
            name="phonenumber"
            onChange={this.handleChange}
          />
          <TextField
            type={this.state.showPassword ? "text" : "password"}
            classes={{ root: "login-input" }}
            label='Password'
            margin="normal"
            fullWidth
            name="password"
            required
            InputProps={{
              endAdornment: (
                <Fab
                  variant="extended"
                  size="small"
                  color="primary"
                  className="otp-btn button-red"
                >
                  Login via OTP
                </Fab>
              )
            }}
            onChange={this.handleChange}
          />
          <div className="forgot-wrapper">
            <FormControlLabel
              control={
                <Checkbox
                  onChange={event =>
                    this.setState({ showPassword: event.target.checked })
                  }
                />
              }
              label="Show Password"
            />
            <Button>Forgot Password?</Button>
          </div>

          <Button
            variant="contained"
            className="login-btn button"
            type="submit"
            onClick={this.handleLogin}
          >
            Login
          </Button>
        </form>
        <div>
          <div className="or">
            <span>OR</span>
          </div>
          <span className="continue-text">Continue with</span>
          <div className="social-btn-wrapper">
            <Button
              variant="outlined"
              className="facebook-btn"
              startIcon={<FaFacebookF />}
            >
              
              Facebook
            </Button>
            {/*<Button
              variant="outlined"
              className="google-btn"
              startIcon={<Icon className="fa fa-google-plus" />}
              onClick={this.googleLogin}
            >
              Google
            </Button>*/}
            <GoogleLogin
              clientId={process.env.CLIENT_ID}
              buttonText="Google"
              render={renderProps => (
                <Button onClick={renderProps.onClick} startIcon={<FaGoogle />} className="google-btn" variant="outlined"> Google</Button>
              )}
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={'single_host_origin'}
            />
          </div>
          <div className="terms-text">By logging in you agree to our T&C</div>
        </div>
      </div>
      </div>
    );
  }
}
export default Login;
