import React from 'react' ;

const Login = () => {
return (
  <div className="contact-page-container">
    <div className="row">
      <div className="col s12 m6 l6"> </div>
      <div className="col s12 m4 l4">
        <h2 className="center"> Login </h2>
        <form className=" Contact-form">
          <label>Email</label>
          <input type="email" />
          <label>Password</label>
          <input type="password" />
        <center> <input className="center" type="submit" placeholder="Submit" /></center> 
        </form>




      
    </div></div>
  </div>
);
}

export default Login ;