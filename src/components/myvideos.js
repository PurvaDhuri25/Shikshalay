

import React from 'react' ;

const myvideos = () => {
return (

    <div className="row">
 
        <h2 className="center"> My Videos</h2>

        <div class="upload-btn-wrapper">
<button class="btnn">Upload a Video</button>
<input type="file" name="myfile" />
</div>
<div className="row">
<div className="col s12 m4 l4">
          <div className="card" >
              <div className="card-content">
                <div class="card-image">
                <iframe width="400" height="260" src="https://www.youtube.com/embed/vEcyiFHJBqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                </div>
                <span className="card-title">
                  <h5>Geography:Land Forms and Their Evolution</h5>
                </span>
             
              </div>
            </div>
          
       </div>
            
       <div className="col s12 m4 l4">
       <div className="card" >
              <div className="card-content">
                <div class="card-image">
                <iframe width="400" height="260" src="https://www.youtube.com/embed/43G7DnxgJCI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                </div>
                <span className="card-title">
                  <h5>Science: Chemical Reactions & Equations</h5>
                </span>
             
              </div>
            </div>
          
       </div>
            

       <div className="col s12 m4 l4">
       <div className="card" >
              <div className="card-content">
                <div class="card-image">
                <iframe width="400" height="260" src="https://www.youtube.com/embed/nbuyle1CsSM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
                </div>
                <span className="card-title">
                  <h5>Maths: Trignometry</h5>
                </span>
             
              </div>
            </div>
          
       </div>
       </div></div>
  
);
}

export default myvideos;