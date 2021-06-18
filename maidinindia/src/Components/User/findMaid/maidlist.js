import axios from 'axios';
import React, { Component } from 'react';
import './style.scss';

export class MaidList extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            lat: '',
            long:'',
            details:[]
        }
        //this.geolocation = this.geolocation.bind(this)
    }

    
    calculateDist(lat1, lon1) {
      var R = 6371; // Radius of the earth in km
      //var lat1=  28.52166312323684;
      //var lon1=   77.03789321044043;
      console.log(lat1);
      //var lat2=  28.6359551;
      var lat2=this.state.lat;
      //var lon2=77.2308992;
      var lon2=this.state.long;
      //console.log(lat2);
      var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
      var dLon = this.deg2rad(lon2-lon1); 
      var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos( this.deg2rad(lat1)) * Math.cos( this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
    }
   
    
    deg2rad(deg) {
      return deg * (Math.PI/180)
    }
      componentDidMount()
      {
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


          axios.get('http://localhost:4000/getmaidlist')
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
            <div>
                <div className="gridlist">
                {this.state.details?
                this.state.details.map(s=>
                <div key={s._id}>
                <div className="content">
                  <div className="card">
                    <div className="firstinfo"><img className="imgg" src={s.pic} alt ="dp"/>
                      <div className="profileinfo">
                        <h1 className="maidname">{s.name}</h1><br/>
                        <p className="infoo">{s.email}</p>
                        {s.expert==="I'm Maid"?<h3>I Serve as Maid</h3>:<h3>I Serve as Nanny</h3>}
                        
                        <ul className="list">
                          <li className="listt">{s.experience}+ Yrs<br/>of Experience</li>
                          <li className="listt">4.2 / 5 <br/> Rating</li>
                        </ul>
                          {/*<h3>{this.calculateDist(s.location.latitude, s.location.longitude)} KMs</h3>
                      <p class="bio">Lived all my life on the top of mount Fuji, learning the way to be a Ninja Dev.</p>*/}
                      </div>
                      
                    </div>
                    
                  </div>
                  <div className="scroll">
                    <button className="button" style={{float: 'left', margin: '10px'}}>Wishlist</button> <button className="button" style={{ margin: '10px', float: 'right'}}>Book Now</button>
                  </div>
                </div>
               
                </div>
                ):<h2 className="empty">No maids Available in your Area</h2>}
                <br></br>
                </div>
            </div>
        )
    }
}


export default MaidList;
