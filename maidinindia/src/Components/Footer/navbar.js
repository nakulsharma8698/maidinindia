import React, { Component } from 'react';
import './stylee.scss';
import logo from '../Common/maidinindialogo.jpg';
import {Link} from 'react-router-dom'
import {IoIosArrowDown,IoIosArrowUp,IoMdLogOut} from 'react-icons/io'
import {FaUserAlt,FaHeart, FaHistory, FaBell} from 'react-icons/fa'
import {MdAccountCircle, MdDateRange} from 'react-icons/md'
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            up:false
          };
    }
    handleLogout()
    {
        localStorage.clear();
    }
    handleButtonClick = () => {
        this.setState((state) => {
          return {
            open: !this.state.open,
            up: !this.state.up
          };
        });
      };

    render() {
        if (window.location.pathname === '/') return null;
        const token=localStorage.getItem('token');
        const name=localStorage.getItem('name');
        return (
            <div>
                <div className='nav'>
                    <img className="smlogo" src={logo} alt="logo" /><p className="name"> MaidInIndia</p>
                    <form>
                    <input className="search" type="search" placeholder="Search..." autoFocus required />
                    <button className="go" type="submit">Go</button> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD_yW2Mz5wVuSjE1j4JFJ-6TUc12GkWLLm3_dKoJf6wPbEASq6" className="flag" alt="india"/>   
                    </form>
                    {token?<ul>
                    <li className="acclist dropbutton" onClick={this.handleButtonClick}><FaUserAlt style={{fontSize:'20px'}} /> {name} {this.state.up?<IoIosArrowUp />:<IoIosArrowDown/>} {this.state.open && (
                                <div className="dropdown">
                                <ul >
                                    <li className="da"><MdAccountCircle style={{float:'left'}}/>&nbsp;&nbsp;&nbsp;&nbsp;Account</li>
                                    <li className="da"><MdDateRange style={{float:'left'}}/>&nbsp;&nbsp;&nbsp;&nbsp;My Bookings</li>
                                    <li className="da"><FaHistory style={{float:'left'}}/>&nbsp;&nbsp;&nbsp;&nbsp;History</li>
                                    <li className="da" onClick={this.handleLogout}><IoMdLogOut style={{float:'left'}}/>&nbsp;&nbsp;&nbsp;&nbsp;Logout</li>
                                </ul>
                                </div>
                            )}</li>
                    <li className="acclist"><FaHeart style={{fontSize:'20px'}}/></li>
                    <li className="acclist" style={{float:'right'}}><FaBell style={{fontSize:'25px'}}/></li>
                    </ul>:<Link to="/login"><p className="acclist2" >Login/Register</p></Link>}
                </div>
                <div className="belownav">
                    <ul>
                    <Link to='/'><li className='navlist'>Home</li></Link>
                    <Link to='/blogs'><li className='navlist'>Our Services</li></Link>
                    <Link to='/blogs'><li className='navlist'>About</li></Link>
                    <Link to='/blogs'><li className='navlist'>Blogs</li></Link>
                    <Link to='/blogs'><li className='navlist'>Contact Us</li></Link>
                    </ul>
                </div>
                
            </div>
        );
    }
}

export default Navbar;