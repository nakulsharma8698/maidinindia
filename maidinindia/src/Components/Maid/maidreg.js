import React, { Component } from 'react';
import axios from 'axios';
//import { Geolocation } from "react-geolocation";
import {MdLocationOn} from 'react-icons/md';
import {FaUpload} from 'react-icons/fa';
//import MaidNav from '../MaidNav/maidnav.js'
import './style.scss';
import Navbar from '../Footer/navbar';

class MaidReg extends Component {
    constructor(props) {
        super(props);
        this.state={
          name:'',
          email:'',
          mobile:'',
          selectedFile: null,
          dob:'',
          gender:'',
          stree1:'',
          street2:'',
          city:'',
          state:'',
          pincode:'',
          lat:'',
          long:'',
          password:'',
          experience:'',
          expert:''

        }
        this.handleSubmit = this.handleSubmit.bind(this)
        //this.getLocation = this.getLocation.bind(this)
        

    }
    getLocation=()=>{
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition((position)=> {
            console.log(position);
            this.setState({
              lat:position.coords.latitude,
              long:position.coords.longitude
            })
            console.log(this.state.lat);
            console.log(this.state.long);

          });
        }
      }
      onChangeHandler=event=>{
        this.setState({
          selectedFile: event.target.files[0],
          loaded: 0,
        })
      
    
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
    
      async handleSubmit(event) {
       // alert("Registered Successfully!")
        //this.props.history.push('/');
      event.preventDefault();
       const data = new FormData()
       var phone=this.props.location.state.phonenumber;
       console.log(phone);
       await this.setState({
         mobile:this.props.location.state.phonenumber
       })
       console.log(this.state.mobile);
       data.append('name',this.state.name);
       data.append('email',this.state.email); 
       data.append('mobile',this.state.mobile);
       data.append('dob',this.state.dob);
       data.append('gender',this.state.gender);
       data.append('pic',this.state.selectedFile);
       data.append('street1',this.state.street1);
       data.append('street2',this.state.street2);
       data.append('city',this.state.city);
       data.append('state',this.state.state);
       data.append('pincode',this.state.pincode);
       data.append('long',this.state.long);
       data.append('lat',this.state.lat);
       data.append('password',this.state.password);
       data.append('experience',this.state.experience);
       data.append('expert',this.state.expert);
        console.log(data);
        axios.post("http://localhost:4000/signup", data)
        .then(res => { 
         
          if(res.data){
            console.log(res.data);
            this.props.history.push("/")
          }
                    
          else
            alert("Failed to Upload");
        })               
      }

    render() {
        return (
            <div>
              <Navbar/>
               <meta name="viewport" content="width=device-width, initial-scale=1" />
                <br/>
                <form className="formmaid" encType="multipart/form-data">
                    <h2>Personal Info</h2>
                   < div>
                <label  className="_label">
                <span className="_label">Name:&emsp;</span>
                <input type="input" className="forminput" placeholder="Name" name="name" onChange={this.handleChange}  required /><br/><br/>
                </label>
                <label  className="_label">
                <span className="_label">Email:&emsp; </span>
                <input type="input" className="forminput" placeholder="Email" name="email" onChange={this.handleChange}  required /><br/><br/>
                </label>
                 
                <label  className="_label">
                <span className="_label" >Upload your Photo: <FaUpload className="fas" />&emsp; </span>
                <input type="file" name="pic"  onChange={this.onChangeHandler} required ></input>
                </label><br/><br/>

               {/* <label  className="_label">
                <span className="_label">Mobile:&emsp; </span>
                <input type="input" className="forminput" placeholder="Name" name="mobile" onChange={this.handleChange}  required /><br/>
                </label><br/><br/>*/}
                <label  className="_label">
                <span className="_label">Date of Birth: &emsp; </span>
                <input type="date" className="forminput" placeholder="Name" name="dob" onChange={this.handleChange}  required /><br/>
                </label><br/>


                <div className="gender">
                <label className="_label" style={{float:'left'}}>Please select your gender:&emsp; </label>
                <input type="radio" name="gender" style={{float:'left'}} id="male" value="male" onChange={this.handleChange}/>
                <label  style={{float:'left'}}>Male</label>
                <input type="radio" name="gender" style={{float:'left'}} id="female" value="female" onChange={this.handleChange}/>
                <label style={{float:'left'}}>Female</label>
                <input type="radio" name="gender" id="other" style={{float:'left'}} value="other" onChange={this.handleChange}/>
                <label   style={{float:'left'}}>Other</label><br/>
                </div>
                
                
                <h2>Location Info</h2>
                <div className="address">
                <label  className="_label">
                <span className="_label first" style={{float:'left'}}>Street Line 1: </span>
                <input type="input" className="forminput" placeholder="Name" name="street1" onChange={this.handleChange} style={{float:'left'}} required />
                </label>

                <label  className="_label">
                <span className="_label">Street Line 2: </span>
                <input type="input" className="forminput" placeholder="Name" name="street2" onChange={this.handleChange}  />
                </label><br/><br/>

                <label  className="_label">
                <span className="_label first" style={{float:'left'}}>City:&emsp;&emsp; </span>
                <input type="input" className="forminput" placeholder="Name" name="city" onChange={this.handleChange} style={{float:'left'}} required />
                </label>

                <label  className="_label">
                <span className="_label">State / UT: </span>&emsp;&emsp;
                <input type="input" className="forminput" placeholder="Name" name="state" onChange={this.handleChange}  required />
                </label><br/><br/>

                <label  className="_label">
                <span className="_label first" style={{float:'left'}}>Pincode:&emsp; </span>
                <input type="input" className="forminput" placeholder="Name" name="pincode" onChange={this.handleChange} style={{float:'left'}} required />
                </label>

                <label  className="_label">
                <span className="_label" name="loc">Locate Me: &emsp;</span>
                <MdLocationOn className= "fas"onClick={this.getLocation}/>
               
                </label>
                
                </div>
                </div><br/>

                <h2>Other Info</h2>
                <label  className="_label">
                <span className="_label first" >Create Password:&emsp; </span>
                <input type="password"  className="forminput" placeholder="Name" name="password" onChange={this.handleChange}  required />
                </label><br/><br/>
               {/*} <label  className="_label">
                <span className="_label">Upload Aadhar:&emsp;<i className="fas fa-upload" name="aadhar"></i> &emsp;</span>
                <input type="file" name="aadhar"  onChange={this.onChangeHandler} required ></input>
        </label><br/><br/>*/}
                <label  className="_label">
                <span className="_label">Enter Your Year of Experience:&emsp; </span>
                <input type="number" className="forminput" placeholder="Name" name="experience" onChange={this.handleChange}  required /><br/><br/><br/>
                </label>

                <label  className="_label" onChange={this.handleChange}>
                <span className="_label">Select Your Expertise: &emsp;</span>
                <select className="exp" name="expert">
                  <option>Select One</option>
                  <option>I'm Maid</option>
                  <option>I'm Nanny</option>
                </select><br/><br/>
                </label>

                
                <button type="submit" className="button" onClick={this.handleSubmit}> Submit</button><br/><br/>
                
                </form>
                <br/>
            </div>
        );
    }
}

export default MaidReg;