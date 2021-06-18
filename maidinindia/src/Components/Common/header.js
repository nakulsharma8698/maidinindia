import React, { Component } from 'react';
import logo from './maidinindialogo.jpg';
import mom from './tiredmom.jpg';
import maid from './maid.jpg';
import { FaFacebook,FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';

import { Link } from "react-router-dom";
import './style.scss'
class Header extends Component {
    handleLogout()
    {
        localStorage.clear();
    }
    render() {
        var token=localStorage.getItem('token');
        var name=localStorage.getItem('name');
        return (
            <div>
                <img className ="logo" src={logo} alt="logo"/>
                <div className="header">
                <ul className="ull">
                    <Link to='/modal'><li className='lii'>Register as Proffessional</li></Link>
                    
                    <Link to='/post'><li className='lii'>Contact</li></Link>
                    {token?<li className='lii' style ={{float: 'right'}} onClick={this.handleLogout}>Logout</li>:<Link to="/login"><li className='lii' style ={{float: 'right'}}>Login/Register</li></Link>}
                
                </ul><br/><br/><br/><br/><br/>
                <div><h1 className="welname">WELCOME {name}</h1><br/><br/><br/><br/>
                <p className="para">Quality serive on demand. Experience hand-picked professionals to serve you at your doorstep. Since our opening, we have become masters of our serices. Our commitment to provide best and reliable services and 
                    incomparable customer care keep our communitiy coming back again and again.</p></div><br/><br/>
                    <div className="contact">www.maidinindia.com/support</div>
                    <div className="contact">+91 256-793-74</div><br/><br/><br/>
                    <div className="social">
                        <span className="follow">Follow Us on:</span>&nbsp;&nbsp;
                        <FaFacebook/>&nbsp;&nbsp;&nbsp;&nbsp;<FaTwitter/>&nbsp;&nbsp;&nbsp;&nbsp;<FaInstagram/>&nbsp;&nbsp;&nbsp;&nbsp;
                        <FaLinkedin/>&nbsp;&nbsp;&nbsp;&nbsp;<FaYoutube/>&nbsp;&nbsp;&nbsp;&nbsp;<FaGithub/>
                    </div>
                   </div>
                   <div className="tired">
                       <div><img className="mom" src={mom} alt="mom"></img><div><h2 className="book">Tired of Work? Still more to do?</h2></div>
                       <div className="wrap">
                       <Link to='/maidlist'><button className="button">Search Your Maid</button></Link>
                        </div>
                       </div>
                   </div>
                   
                   <div className="tired">
                       <div><img className="momm" src={maid} alt="mom"></img><div><h2 className="book">Looking for Work? Register Now</h2></div>
                       <div className="wrap">
                       <Link to='/modal'><button className="button">Join us as Maid</button></Link>
                        </div>
                       </div><br/><br/>
                   </div><br/>
                
            </div>
        );
    }
}

export default Header;