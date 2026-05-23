import React, {useState} from "react";

function ObjStateEx() {
  const [car, setcar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
    setcar({...car, color: "blue"});//to keep other properties in car object 
  };

  console.log(car);

  return (
    <div>
      <h2>My {car.brand}</h2>
      <h2>the color is {car.color}</h2>
       
    </div>
  )
}

export default ObjStateEx;