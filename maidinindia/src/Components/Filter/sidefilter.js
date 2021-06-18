import React, { Component } from 'react';
import './style.scss';

class Filter extends Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            <div className="filterbody">
                <h2> Filter </h2>
                <br/>
                <label className="distance">Distance Range in Kms<br/><br/>
                1 <input className="range" type="range" min="1" max="10"></input> 10
                </label>
               <h3 className="service">Choose Service</h3><br/>
               <div className="chooseserve">
               <button className="servicetype">Maid</button>
                <button className="servicetype">Nanny</button>
                <button className="servicetype">Driver</button>
                <button className="servicetype">HouseKeeper</button>
                <button className="servicetype">Security</button>
                <button className="servicetype">Plumber</button>
                <button className="servicetype">Electrician</button>
                <button className="servicetype">Painter</button>
                <button className="servicetype">Cleaning</button>
                <button className="servicetype">Builder</button>
               </div>
                
            </div>
        );
    }
}

export default Filter;