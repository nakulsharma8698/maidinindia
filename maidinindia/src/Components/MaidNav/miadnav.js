import React, { Component } from 'react';
import logo from '../Common/maidinindialogo.jpg';
import {Link} from 'react-router-dom';

class MaidNav extends Component {
    render() {
        return (
            <div>
                <div className='nav'>
                    <img className="smlogo" src={logo} alt="logo"  /><p className="name"> MaidInIndia</p>
                    <form>
                    <input className="search" type="search" placeholder="Search..." autoFocus required />
                    <button className="go" type="submit">Go</button> 
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRD_yW2Mz5wVuSjE1j4JFJ-6TUc12GkWLLm3_dKoJf6wPbEASq6" className="flag" alt="india"/>   
                    </form>
                    
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

export default MaidNav;