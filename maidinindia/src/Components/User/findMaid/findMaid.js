import React, { Component } from 'react';
import Filter from '../../Filter/sidefilter';
import Navbar from '../../Footer/navbar';
import MaidList from './maidlist';
import './style.scss';

export class FindMaid extends Component {
    render() {
        return (

            <div className="maidlist"> 
                
                <Navbar/>
                  <Filter/>
                  <MaidList/>
            </div>
        )
    }
}


export default FindMaid;
