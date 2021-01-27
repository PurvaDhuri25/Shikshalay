import React from 'react';
import Navbar,{ CustomFooter } from './components/Navbar' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Home from './components/Home' ;
import Dashboard from './components/Dashboard' ;
import Signup from './components/Signup' ;
import Login from './components/Login' ;
import Profile from './components/Profile' ;
import Footer from "./components/footer";
import useAlan from './components/useAlan' ;
import Forum from './components/Forum' ;
import myvideos from './components/myvideos' ;
import NotFound from './components/NotFound' ;
import { BrowserRouter,Route,Switch} from "react-router-dom";
import Header from './Header';


function App() {
  useAlan()
  
  return (
 
    <BrowserRouter>
      <div className="App">
      
      <Navbar brandname='Shikshalay'/>
    
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/about' component={About}/>
        <Route path='/contact' component={Contact}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/login' component={Login}/>
        <Route path='/signup' component={Signup}/>
        <Route path='/Profile' component={Profile}/>
        <Route path='/Forum' component={Forum}/>
        <Route path='/myvideos' component={myvideos}/>
        <Route  component={NotFound} />
      </Switch>
      
      < Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
