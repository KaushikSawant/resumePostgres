import React,{useState,useEffect} from "react";
import image from './Images/myPhoto.jpg';

const img = {"profile":image}


function Aboutme(){
    return(
        <div className="row">
            <div className="col-12 col-md-4 center">
                <img src={img.profile} className="pic"/>


            </div>
            <div className="col-12 col-md-8 card bgProject">    
                <h3>About Me:</h3>
                <p>
                    Hi,
                    I am looking forward to start my career in software developement.<br/>
                    After completing my BE in Electronics i was introduced to programming by my friend,<br/>
                    Typing code on computer and getting some graphics displayed on screen made me curious about programming.<br/>
                    This curiosity led me to pursue PG Diploma in Advanced Computing, where i gathered in depth knowledge in computer programming<br/>
                    Now i am looking forward to kickstart my career in IT industry as a Web/Software Developer.
                </p>
            </div>    
        </div>    

    )

}

export default Aboutme;