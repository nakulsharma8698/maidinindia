import React, { Component } from 'react';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';
import { Link
} from "react-router-dom";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import Navbar from '../Footer/navbar';

class Register extends Component {
  constructor(props)
  {
    super(props);
    this.state={
      phonenumber: '',
      channel:'sms'
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
      const data={phonenumber:this.state.phonenumber, channel: this.state.channel}
      axios.get(`http://localhost:4000/otp/getcode?phonenumber=${this.state.phonenumber}&channel=sms`, data)
      .then(res => { 
        if(res.data){
          console.log(res.data);  
          this.props.history.push({
            pathname:'/signup/otp',
            state:{phonenumber: this.state.phonenumber,
            userpath:'user'
          }
          })
        }       
        else
          alert("Failed to Get Code");
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
                <Link to='/login'><span className="reglog ">Login</span></Link><span className="reglog active">Signup</span><br/><br/><br/>
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
          </div>
          </div>
        );
    }
}

export default Register;