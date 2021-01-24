import React from 'react' ;

const Contact = () => {
return (
  <div className="contact-page-container">
    <div className="row">
      <div className="col s12 m6 l6"> </div>
      <div className="col s12 m4 l4">
        <h2 className="center"> Contact Us </h2>
        
        <h5 className="center">
          
          Hey, Drop us a Message ! We would love to listen from you !
        </h5>
        <form className=" Contact-form">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="email" />
          <label>Message</label>
          <input type="text" />
          <input className="center" type="submit" placeholder="Submit" />
        </form>

      
      </div>
    </div>
  </div>
);
}

export default Contact ;