import React, { Component } from 'react';
import './stylee.scss';
import invert from'./invert.png';

class Footer extends Component {
    

    render() {
        return (
            <div className="footer">
            <ul className="cen">
            <li className="foli folii">About Us</li>
            <li  className="foli folii">Privacy & Policies</li>
            <li  className="foli folii">Terms & conditions</li>
            <li  className="foli folii">Blogs</li>
            <li  className="foli folii">Reviews</li>
            <li  className="foli folii">Near Me</li>
            <li  className="foli folii">Gift Cards</li>
            <li  className="foli folii">Careers</li>
            </ul>
            <hr/>
            <p className="disclaimer"><b>Disclaimer: </b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Quisque eu nibh ac arcu porttitor consectetur et sit amet nisi. Phasellussed justo vel nulla vestibulum dapibus. Curabitur consequat lacus risus, ac tempus metus porttitor a. Quisquelobortis faucibus mauris, et consequat eros vehicula a. Quisque hendrerit pharetra augue sed fermentum. Orci varius natoquepenatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur quis tellus interdum, rutrum mi id, consectetur est.</p>
            <hr/>
            <ul>
                <li className="folii"><img className="invert" src={invert} alt="logo"/></li>
                <li className=" foli folii">Made In India</li>
                
                <li className=" foli folii">© 2014-20 Made In India Pvt. Ltd.</li>
            </ul>
            </div>
        );
    }
}

export default Footer;