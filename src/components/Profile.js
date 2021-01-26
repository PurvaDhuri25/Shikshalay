import React,{Component} from 'react' ;
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import './Profile.css';
import Forum from './Forum';
import myvideos from './myvideos'

class  Profile extends Component{

render() {
    
return (
  <div>
   
            <h4>My Profile</h4>
<center><img src="/img/teacher.png" height="500px" width="500px"/>

<h4>Name : Mrs Wilson</h4>
<h5>Phone no: +91 2154126321</h5></center>
<HashRouter>
        <div>
          <ul className="header">
            <li><NavLink to="/myvideos">My Videos</NavLink></li>
            <li><NavLink to="/Forum">Discussion Forum</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/myvideos" component={myvideos}/>
            <Route path="/forum" component={Forum}/>
          </div>
        </div>
      </HashRouter>
      <div className="row">
  
  
</div>
           





     </div>

);
        }
}

export default Profile ;