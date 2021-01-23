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




        <ul class="social-media-list center">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-facebook" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-instagram" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fab fa-youtube" aria-hidden="true"></i></a>
          </li>
        </ul>
    </div></div>
  </div>
);
}

export default Login ;