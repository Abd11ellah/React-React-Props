import React from "react";
import Img from "./img"
import Info from "./info"
function Card1(props){

    return(
    <div className="card " >

      <div className="top"> 
      
      <h2 className="heading name  " >{props.name}</h2>
      <Img img={props.img}/>
      </div>
      
      <div className="bottom">
      <Info info={props.tel}/>
      <Info info={props.email}/>
      </div>
      
    </div>
         )
  }
  export default Card1;