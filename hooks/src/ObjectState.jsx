import React, {useState} from "react";

function ObjStateEx() {
  const [car, setcar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red",
  });

  const updateColor = () => {
  setcar((prevState) => ({
    ...prevState, color: "blue"}));
    //If state updates happen very fast
    //prevState always gives you the LATEST state
};

  console.log(car);

  return (
    <div>
      <h2>My {car.brand}</h2>
      <h2>the color is {car.color}</h2>
      <button onClick={updateColor}>
        Change Color
      </button>
    </div>
  )
}

export default ObjStateEx;