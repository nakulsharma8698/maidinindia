import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

import Header from './Components/Common/header';
import Footer from './Components/Footer/footer';
//import Navbar from './Components/Footer/navbar';
import MaidReg from './Components/Maid/maidreg';
import MaidModel from './Components/Maid/maidmodal';
import OTP from './Components/Maid/otp';
import MaidLogin from './Components/Maid/maidlogin';
import Login from './Components/Login/login';
import Register from './Components/Login/register';
import UserReg from './Components/Login/registeruser';
import Bookings from './Components/MaidAccount/afterlogin';
import ProfileM from './Components/MaidAccount/profile';
import FindMaid from './Components/User/findMaid/findMaid';
import Address from './Components/Address/address';

function App() {
  return (
    <div className="App">
      
      <Router>
        {/*<Route exact path="/" component={()=> <Redirect to="/incompleteids" /> }/>
        <Route exact path="/incompleteids" component={Search}/>
  <Route exact path="/completeids" component={Page2}/>*/}
    <Route exact path="/" component={Header}/>
    
    {/*<Route exact path="/maids" component={Navbar}/>*/}
    <Route exact path="/registration/" component={MaidReg}/>
 
    <Route exact path="/registration/user" component={UserReg}/>
    <Route exact path="/modal" component={MaidModel}/>
    <Route exact path="/maid-login" component={MaidLogin}/>
    <Route exact path="/signup/otp" component={OTP}/>
    <Route exact path="/login" component={Login}/>
    <Route path="/mybookings" component={Bookings}/>
    <Route exact path="/signup" component={Register}/>
    <Route exact path="/myaccount-maid" component={ProfileM}/>
    <Route exact path="/maidlist" component={FindMaid}/>
    <Route exact path="/checkout" component={Address}/>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
