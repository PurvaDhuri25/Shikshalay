import React from 'react' ;

const Signup = () => {
return (
  <div className="contact-page-container">
    <div className="row">
      <div className="col s12 m6 l6"> </div>
      <div className="col s12 m4 l4">
        <h2 className="center"> Sign Up </h2>

        <form className=" Contact-form">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Mobile Number</label>
          <input type="text" />
            <label>Password</label>
          <input type="password" />
            <label>Confirm Password</label>
          <input type="password" />
          <input className="center" type="submit" placeholder="Submit" />
          
        </form>

      
       
        


      </div>
    </div>
  </div>
);
}

export default Signup;