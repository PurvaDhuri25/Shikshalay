import React,{Component} from 'react' ;
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, useHistory } from "react-router-dom";
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
                  <img src="https://www.thailandmedical.news/uploads/editor/files/multilingual-will-lower.jpg />
                </div>
                <span className="card-title">
                  <h5>Multilingual</h5>
                </span>
               <p>Any single language can address no more than 30 percent of the global population. For example, English is commonly regarded as one of the world’s most used languages. However, 70 percent of web surfers don’t speak English as their first language. </p>

               
              </div>
            </div>
            
       </div>

       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://ewscripps.brightspotcdn.com/dims4/default/5a19008/2147483647/strip/true/crop/1920x1080+0+0/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F51%2F68%2F28ec10be469898ec46ee7c287735%2Fsuper-summer-rise-digital-offline-learning.jpg" />
                </div>
                <span className="card-title">
                  <h5>Offline Access</h5>
                </span>
                <p>
                In remote locations, where internet is scarce or nonexistent, things have to work offline. Internet isn’t reliable in the middle of the ocean, so using online-only apps is a recipe for disaster. If a modem or router dies, it can take days to get someone out to the site to fix the problem. You can’t afford to shut down production for that long.
                </p>
              
              </div>
            </div>
       </div>


       <div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                  <img src="https://www.bigtincan.com/wp-content/uploads/gamified-learning-platform.jpg" />
                </div>
                <span className="card-title">
                  <h5>Gamified Learning</h5>
                </span>
                <p>
                Gamification is more than just a buzzword. Far from child’s play, HR and L&D professionals should not underestimate the benefits of gamification in corporate training. Infusing gameplay and leveraging competitiveness not only makes your corporate training more dynamic it can also significantly increase learner engagement too. 
                </p>
               
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
                <Link to="/Dashboard">View Lectures</Link>  <i className="material-icons right">arrow_right_alt</i>
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
                <a className="waves-effect waves-light btn card-btn" href=''>
                <Link to="/Dashboard">View Lectures</Link> <i className="material-icons right">arrow_right_alt</i>
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
                <Link to="/Dashboard">View Lectures</Link>  <i className="material-icons right">arrow_right_alt</i>
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