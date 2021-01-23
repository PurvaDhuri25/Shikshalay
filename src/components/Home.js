import React,{Component} from 'react' ;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
class Home extends Component{




render() {
    
return (
  <div>
    <div className="row" >
      <div className="col s12 m12 l12 main-column ">
        <div className="col s12 m12 l12  ">
          <div className=" col s12 m6 l6 brand-text">
            <h1 className="center main-heading">Shikshalay</h1>
            <h5 className="center slogan">
            "Anyone who keeps learning stays young." <br /><b>Education at your fingertips</b>{" "}
            </h5>
         
          </div>
        </div>
      </div>
    </div>
    
      <Carousel autoPlay infiniteLoop showThumbs={false} transitionTime={400} interval={4000}>
                <div>
                <img src="/img/img1.jpg" height="500" />
      
                </div>
                <div>
                    <img src="img/img2.jpg" height="500"/>
              
                </div>
                <div>
                    <img src="img/img3.jpg" height="500" />
                  
                </div>
            </Carousel>
            <h4>Our Features</h4>

            <div className="row">
       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/1400/0*v-2G45CpWvbFUgX1" />
                </div>
                <span className="card-title">
                  <h5>How To Learn Something Every Day Easily</h5>
                </span>
                <p>
                A 4-step process for practical, daily learning to help you learn any skill Easily.
                Without much efforts
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
            
       </div>

       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/700/0*H05DN-vpwlujdFpm" />
                </div>
                <span className="card-title">
                  <h5>How To Follow Your Boss Even When Things Are Uncertain</h5>
                </span>
                <p>
                Learning to become indispensable in your business despite the chaos.
                Learn How to be more patient
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>


       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://miro.medium.com/max/1000/1*b-Q3_isR-6iVYOlIOMsbAQ.jpeg" />
                </div>
                <span className="card-title">
                  <h5>Being in Lockdown Showed Me How Selfish I Can Be</h5>
                </span>
                <p>
                Winning the fight against unmet expectations.This quarantine learn how to 
                imporve for better
                </p>
                <a className="waves-effect waves-light btn card-btn">
                Read More... <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>
       </div>




<h4> Start Exploring</h4>

<div className="row">
<div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="/img/eng.jpg" />
                </div>
                <a className="waves-effect waves-light btn card-btn">
               View Lectures <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>
            
       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="/img/sci.jpg" />
                </div>
                <a className="waves-effect waves-light btn card-btn">
               View Lectures <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>

       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="/img/maths.jpg" />
                </div>
                <a className="waves-effect waves-light btn card-btn">
               View Lectures <i className="material-icons right">arrow_right_alt</i>
                </a>
              </div>
            </div>
       </div>






      
     </div>
  </div>
);
        }
}

export default Home ;