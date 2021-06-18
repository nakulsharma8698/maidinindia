import React, { Component } from 'react';
import logo from '../Common/maidinindialogo.jpg';
import './style.scss'
import axios from 'axios';
import Navbar from '../Footer/navbar';
import {IoIosAddCircle} from 'react-icons/io'
require("dotenv").config();

class Address extends Component {
    constructor(props) {
        super(props);
        this.state={
            address:[],
            hire:false,
            address_id:'',
            amt:1,
            message:''
        }
        this.check = this.check.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    check()
    {
        this.setState({hire:!this.state.hire, amt:9999});
    }
    handleChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        })
         this.setState({message:''});
      }

     handleSubmit(event) {
       event.preventDefault();
       const data={address_id:this.state.address_id, amt:this.state.amt};
        axios.post("http://localhost:4000/book", data)
         .then(res => { 
           if(res.data){
                console.log(res.data);
                this.setState({message:res.data.message});
                if(this.state.message==='')
                    this.openCheckout();
           }
                     
           else
            alert('Failed to Book')
         }) 
       }
        openCheckout() {
        let options = {
          "key": process.env.REACT_APP_RAZORPAY_KEY,
          "amount": 599*100, // 2000 paise = INR 20, amount in paisa
          "name": "Maid-in-India",
          "description": "Purchase Description",
          "image": logo,
          "handler": function (response){
            alert("Order Successful "+ "Payment Id: "+response.razorpay_payment_id);
            console.log(response);
          },
          
          "notes": {
            "address": "Hello World"
          },
          "theme": {
            "color": "#DC143C"
          }
        };
     
        let rzp = new window.Razorpay(options);
        rzp.open();
      }
    componentDidMount()
    {
        axios.get('http://localhost:4000/address')
            .then(res => {
              this.setState({ address: res.data});
              console.log(res.data);
          })
          .catch(function (error){
              console.log(error);
          })
    }

    render() {
        return (
            <div>
                <Navbar/>

                <div className="addressheader"> Choose ServiceType</div>
                <div className="booktype">
                    <label><b>I want to hire : </b></label><input type="checkbox" onClick={this.check} className="checkbox"/><br/>
                    {this.state.hire?<p></p>: <select className="hiring" name="amt" defaultValue="1" onChange={this.handleChange}>
                        <option value="0.5">Hourly</option>
                        <option value="1" defaultValue>1 day</option>
                        <option value="2">2 days</option>
                        <option value="3"> 3 days</option>
                        <option value="4">4 days</option>
                        <option value="5">5 days</option>
                        <option value="5">6 days</option>
                        <option value="5"> 1 week</option>
                        <option value="10">2 weeks</option>
                        <option value="30">Monthly</option>
                        
                    </select>}
                   
                </div>
                <div className="addressheader">Select Address</div>
               {this.state.address.map(add=>
                <div key={add._id}>

                    {add.address.map((a,i)=>
                    
                    <label className="addressbox" onChange={this.handleChange}>
                        <input type='radio' className="radiobut" name="address_id" value={add.address[i]._id}/>&nbsp;
                        <p  className= "address" key={a._id}>{a.street1}, {a.street2}, {a.city}, {a.state}-<span style={{fontWeight:'600'}}>{a.pincode}</span></p>
                    </label>
                    )}
                </div>
                )}
                <div className="addressbox"><IoIosAddCircle className="addcircle"/></div>

                <p style={{color:'red', fontSize:'15px'}}>{this.state.message}</p><br/>
                <div className="addressheader"> Payment</div>
                <div className="paymentbox" style={{margin:'auto', marginBottom:'10px'}}>
                    <p className="payment">Total Amount: <span style={{color:'green',fontWeight:'600'}}>₹ {this.state.hire?this.state.amt:this.state.amt*600-1}</span> </p><br/>
                    <label><b>Apply Promocode: </b></label><input type="text" className="promocode" placeholder="Enter Code"/><br/>
                    <button className="button" style={{margin:'10px'}}type="submit" onClick={this.handleSubmit}>Book Now</button><br/>
                </div>

            </div>
        );
    }
}

export default Address;