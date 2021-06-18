import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { Link } from 'react-router-dom';
import Navbar from '../Footer/navbar';
import Footer from '../Footer/footer';

class MaidLogin extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      phonenumber: '',
      password:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    handleClick(e)
    {
      e.preventDefault();
      console.log(this.state.phonenumber);
      const data={phonenumber:this.state.phonenumber, password: this.state.password}
      axios.post("http://localhost:4000/", data)
      .then(res => { 
        if(!res.data.message){
          console.log(res.data);  
          this.props.history.push('/mybookings');
        }       
        else
        console.log(res.data); 
        //alert("Failed to Get Code");
      }) 
    }
   

    render() {
        return (
            <div>
              <Navbar/>
            <div className="signup-wrapper">
                
            <form
              className='formmaid' style={{width:'35%'}}
              noValidate
              autoComplete="off"
              onSubmit={data => this.onSubmit(data)}
            >
                <span className="reglog active ">Login</span><Link to='/modal'><span className="reglog">Signup</span></Link><br/><br/><br/>
                <span className="info-text">Your number is safe with us. We won't share your details with anyone.</span>
              <TextField
                classes={{ root: "login-input" }}
                color='primary'
                label="Mobile Number"
                margin="normal"
                fullWidth
                required
                name="phonenumber"
                onChange={this.handleChange}
              />
              <TextField
                classes={{ root: "login-input" }}
                color='primary'
                label="Password"
                margin="normal"
                fullWidth
                required
                name="password"
                type="password"
                onChange={this.handleChange}
              />
              <FormControlLabel
                control={<Checkbox />}
                className="subscribe_text"
                label="I want to subscribe for promotional text and emails with exciting offers on maidinindia.co.in"
              />
              <Button
                variant="contained"
                className="login-btn button"
                type="submit"
                id="recaptcha"
                onClick={this.handleClick}
              >
                <b>LOGIN</b>
              </Button>
            </form>
            {/*<div>
            <div className='formmaid' style={{width:'35%'}}>
                <ul>
                <li className="reglog active">Login</li>
                <li className="reglog">Register</li>
                </ul><br/>
                <form className="mobile">
                <label  className="_label">
                <span className="_label">Name:&emsp;</span>
                <input type="input" className="forminput" placeholder="Name" name="name" onChange={this.handleChange}  required /><br/><br/>
                </label>
                </form>
               
            </div>
             <br/>
                <br/>
            </div>*/}
          </div>
          <Footer/></div>
        );
    }
}

export default MaidLogin;