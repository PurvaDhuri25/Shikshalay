import React from "react";
import ReactDOM from "react-dom";
import Faq from 'react-faq-component';
const data = {
    title: "Question & Answers",
    rows: [
      {
        title: "What is scientific Method?",
        content: "The scientific method is defined as a method of research in which a problem is identified, relevant data is gathered, a hypothesis is formulated from this data, and the hypothesis is empirically teste"
      },
      {
        title: " If A={(x,y):y=e,x∈R} and B={(x,y):y=e x,x∈R}, then write A∩B",
        content: "{0,1}"
      },
      {
        title: "Which German physicist invented the electron microscope which won him the 1986 Nobel Prize in Physics?",
        content: "Erst Ruska"
      },
      {
        title: "What is the Molecular biology",
        content: "study of physio-chemical Nature of molecule"
      }]
  }
  


const Forum = () => {
return (
  <div className="extrapage-container">
 
        <h2 className="center"> Discussion Forum</h2>

  

   
        <div>
          <Faq data={data}/>
        </div>
        <form>
        <h5>Post your answer here</h5>
        <input
          type="text"
        />
         <input className="center" type="submit" placeholder="Submit" />
      </form>
 
  </div>

);
}

export default Forum;