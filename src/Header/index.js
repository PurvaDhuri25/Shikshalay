import React,{Component} from 'react';
import './index.css';
class Header extends Component{
    render(){
        return(
            <div class="custom-select" >
            <select data-placeholder="Choose a Language...">
  <option value="EN">English</option>
  <option value="SQ">Albanian</option>
  <option value="AR">Arabic</option>
  <option value="HY">Armenian</option>
  <option value="EU">Basque</option>
  <option value="BN">Bengali</option>
 
  </select></div>
        )
    }
}
export default Header;