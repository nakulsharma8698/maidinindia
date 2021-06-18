import axios from 'axios';
import React, { Component } from 'react';
import Sidebar from './sidebar';
import './profilestyle.scss';
class ProfileM extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:[]
          };

    }
    getAge(d1, d2){
        d2 = d2 || new Date();
        var diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    componentDidMount()
    {
        axios.get('http://localhost:4000/signup')
        .then(res => {
            this.setState({ details: res.data});
            console.log(res.data);
        })
        .catch(function (error){
            console.log(error);
        })
    }

    render() {
        return (
            <div className="contain">
             <div className="sidebar">
                    <Sidebar/>
            </div>
                
                <div className="page">
                    {/*<h2> My Profile</h2>*/}
                    <div className="profile">
                        <header/>
                        {this.state.details.map(s=>
                            <div key={s._id}>
                                
                                <img src={s.pic} className="profilepic" alt="Profile DP"/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                                <div className="">
                                    <p className="namee">{s.name} (24 Yrs)</p>
                                    {s.expert==="I'm Maid"?<p className="info">I Serve as Maid</p>:<p className="info"> I serve as Nanny</p>}
                                    <p className="info">{s.email}</p>
                                    <ul className="classul">
                                    <li className="classli">
                                        <p className="number-stat">200+</p>
                                        <p className="desc-stat">Service Served</p>
                                    </li>
                                    <li  className="classli">
                                        <p className="number-stat">{s.experience}+</p>
                                        <p className="desc-stat">Year of Experience</p>
                                    </li>
                                    <li className="classli">
                                        <p className="number-stat">4.2 / 5</p>
                                        <p className="desc-stat">Rating</p>
                                    </li>
                                    </ul>
                                    <h4 className="address">Address: </h4><br/>
                                    <p className="info">{s.address.street1} {s.address.street2} {s.address.city} <br/>{s.address.state}-{s.address.pincode}  <b>Contact No.: </b>{s.mobile}</p>
                                    <p>{s.gender}</p>
                                    
                                    
                                
                                    
                                </div>
                            </div>
                            
                        )}
                    </div>
                </div>
                
            </div>
            
        );
    }
}

export default ProfileM;