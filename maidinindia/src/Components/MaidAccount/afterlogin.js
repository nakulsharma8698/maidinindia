import React, { Component } from 'react';
import './style.scss';
import Sidebar from './sidebar';

class Bookings extends Component {

    render() {
        return (
           
            <div className="contain">
                
                <div className="sidebar">
                <Sidebar/>
                </div>
                <div className="page">
                    <h2>My Bookings</h2>
                </div>
                
            </div>
        );
    }
}

export default Bookings;