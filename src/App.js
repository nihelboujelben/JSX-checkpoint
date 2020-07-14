import React from 'react';
import logo from './logo.svg';
import './App.css';
import img from "./photo4.jpg"
function App() {
  return (
    <div  className="div">  
 
    <h1 className="titlered">Your name here</h1>  

        <br/>  

          <img src={img}  className="img1"/> <br/> 

             <img src="/photo2.jpg" className="img2" /> <br/> 
            
             <iframe style={{width:560, height:315, frameborder:0  }} 
              src="https://www.youtube.com/embed/7fPXI_MnBOY"
               allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
               allowfullscreen
               className="video" ></iframe>
  </div>  
  );
}

export default App;
