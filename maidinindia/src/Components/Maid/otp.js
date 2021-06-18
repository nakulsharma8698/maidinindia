import React from "react";
import { withRouter } from "react-router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

class OTP extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      code:'',
      phonenumber:''
      
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
      console.log(this.props.location.state.phonenumber);
      var phonenumber=this.props.location.state.phonenumber;
      var userpath=this.props.location.state.userpath;
      this.setState({
        phonenumber:this.props.location.state.phonenumber
      })
      const data={phonenumber:this.props.location.state.phonenumber, code: this.state.code};
      console.log(data);
      axios.get(`http://localhost:4000/otp/verifycode?phonenumber=${phonenumber}&code=${this.state.code}`, data)
      .then(res => { 
        if(res.data.valid){
          console.log(res.data);
          this.props.history.push({
            pathname:`/registration/${userpath}`,
            state:{phonenumber: this.state.phonenumber}
          });
        }       
        else
          alert("Failed to Get Code");
      }) 
    }
  render() {
    return (
        <div className="signup-wrapper">
        <form
          className='formmaid' style={{width:'35%'}}
          noValidate
          autoComplete="off"
          onSubmit={data => this.onSubmit(data)}
        >
             <span className="info-text">A 6 digit OTP is sent to your Mobile Number</span><br/><br/>
          <TextField
            classes={{ root: "login-input" }}
            label="Enter OTP"
            margin="normal"
            fullWidth
            required
            name="code"
            onChange={this.handleChange}
          />
         
          <Button
            variant="contained"
            className="login-btn button"
            type="submit"
            onClick={this.handleClick}
          >
            Enter OTP
          </Button>
        </form>
      </div>

      
    );
  }
}
export default withRouter(OTP);
