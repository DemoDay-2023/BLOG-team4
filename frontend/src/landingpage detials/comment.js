import React from "react";
import pic5 from "../landingpage detials/pic5.jpg"

export default function Comment() {
    return(
        <div className="w-96 bg-white h-96">
            <div className="font-base">Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
            <div className="flex">
            <img src={pic5} alt=""/>
            <div className="mt-2">Amy Klassen</div>
            </div>
        </div>
    )
}

import React from "react";
import Picture from "./pic.png";
import St from "./star.png";
import Photo from "./Rectangle.png";
import Str from "./blackstar.png"
import {useState} from "react";

const styles = {
star:{
width:"35px",
height:"35px",
marginLeft:"5px"
},
}

const Star =(props) => {

    const activeArray = new Array(props.active).fill(St);
    const unActive = 5 - props.active;
    const unactiveArray = new Array(unActive).fill(Str);
    const array = activeArray.concat(unactiveArray);
  
    return(
      <>
        {array.map((e, index) => {
          return (
            <img id={index} src={e} alt="" style={styles.star} onClick={(e) => props.onChange(e.target.id)} />
          )
        })}
      </>
    )
  
  }
  
  const Card1 = (props) => {
   
  
    const [aaa, setAaa] = useState(0);
  
    const changeState = (e) => {
         const b = parseInt(e) + 1;
         setAaa(b);
    }
  
    return (
      <div style={styles.big}>
  <div style={styles.border}>
      
      <Star number={5} active={aaa} onChange={(e) => changeState(e)} />
  
      <p></p>
      <div style={styles.text}>
        Give everyone you work with—inside 
        and outside your emoji, keep conversations 
        focused in channels, and simplify all your 
        communication into one place.
      </div>
      <p></p>
      <div style={styles.footer}>
      <img src={Picture} alt="" style={styles.picture}/>
      <div style={styles.name}>
        Amy Klassen
      </div> 
      </div>
    </div>
    </div>
    )
  }
  