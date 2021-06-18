import React, { useState } from 'react';
import logo from '../Common/maidinindialogo.jpg';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
  } from "react-pro-sidebar";
import {Link} from 'react-router-dom';
import { FaHistory } from "react-icons/fa";
import { FiLogOut, FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import { RiSettings5Fill } from "react-icons/ri";
import { FaCalendarCheck } from "react-icons/fa";
import { MdAccountCircle,MdPayment } from "react-icons/md";
import "react-pro-sidebar/dist/css/styles.css";
import "./style.scss";

const Sidebar=()=> {
    
    const [menuCollapse, setMenuCollapse] = useState(false);
    const menuIconClick = () => {
        menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
      };

        return (
            <div className="sidebar">
                <div id="header">
          {/* collapsed props to change menu size using menucollapse state */}
        <ProSidebar collapsed={menuCollapse}>
          <SidebarHeader>
          <div className="logotext">
              {/* small and big change using menucollapse state */}
              
              <div className="bglogo">{menuCollapse ? <img className="sidelogo" src={logo} alt="logo"  /> : <div><img className="sidelogo" src={logo} alt="logo"  /><p className="name"> MaidInIndia</p></div>}</div>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
                {/* changing menu collapse icon on click */}
              {menuCollapse ? (
                <FiArrowRightCircle/>
              ) : (
                <FiArrowLeftCircle/>
              )}
            </div>
          </SidebarHeader>
          <SidebarContent>
            <Menu iconShape="square" >
              <Link to="mybookings"><MenuItem active={true} icon={<FaCalendarCheck />}>My bookings</MenuItem></Link>
              <MenuItem icon={<FaHistory />}>History</MenuItem>
              <MenuItem icon={<MdAccountCircle />}>My Account</MenuItem>
              <MenuItem icon={<MdPayment />}>Payments</MenuItem>
              <MenuItem icon={<RiSettings5Fill />}>Settings</MenuItem>
            </Menu>
          </SidebarContent>
          <SidebarFooter>
            <Menu iconShape="square">
              <MenuItem icon={<FiLogOut />}>Logout</MenuItem>
            </Menu>
          </SidebarFooter>
        </ProSidebar>
      </div>
            </div>
        );
    
}

export default Sidebar;