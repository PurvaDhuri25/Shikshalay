import React from 'react';
import Navbar,{ CustomFooter } from './components/Navbar' ;
import About from './components/About' ;
import Contact from './components/Contact' ;
import Home from './components/Home' ;
import Dashboard from './components/Dashboard' ;
import Signup from './components/Signup' ;
import Login from './components/Login' ;

import NotFound from './components/NotFound' ;
import { BrowserRouter,Route,Switch} from "react-router-dom";




function App() {
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
        <Route  component={NotFound} />
      </Switch>

      
      </div>
    </BrowserRouter>
  );
}

export default App;
