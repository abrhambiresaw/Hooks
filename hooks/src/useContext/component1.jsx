import Component2 from "./component2";
import React, { useState } from "react";
import './style.css';

function Component1(){
  
  const [user, setUser] = useState("Abrham");
  return(
    <div className="box">
      <h1>Component1</h1>
      <Component2 />
    </div>
  )
}

export default Component1;