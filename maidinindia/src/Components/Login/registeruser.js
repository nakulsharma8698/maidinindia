import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { FormControlLabel, Checkbox } from "@material-ui/core";
import Navbar from '../Footer/navbar';
//import { Link } from 'react-router-dom';

class UserReg extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      name: '',
      email:'',
      mobile: '',
      password:''
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
    async handleClick(e)
    {
      e.preventDefault();
      //console.log(this.state.phonenumber);
      await this.setState({
        mobile:this.props.location.state.phonenumber
      })
      const data={name:this.state.name, email: this.state.email, mobile:this.state.mobile, password: this.state.password}
      axios.post("http://localhost:4000/login", data)
      .then(res => { 
        if(!res.data.message){
          console.log(res.data);  
          this.props.history.push('/login');
        }       
        else
        console.log(res.data.message);
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
                <span className="details">Enter Your Details</span><br/>
              <TextField
                classes={{ root: "login-input" }}
                color='primary'
                label="Name"
                margin="normal"
                fullWidth
                required
                name="name"
                onChange={this.handleChange}
              />
              <TextField
                classes={{ root: "login-input" }}
                color='primary'
                label="Email"
                margin="normal"
                fullWidth
                required
                name="email"
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
                SIGN UP
              </Button>
            </form>
          </div></div>
        );
    }
}

export default UserReg;