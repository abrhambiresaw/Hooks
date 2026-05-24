import React, { useState, createContext } from "react";

import Component2 from "./component2";

import "./style.css";

export const UserContext = createContext();

function Component1() {
  const [user, setUser] = useState("Abrham");
  return (
    <div className="box">
      <h1>Component1</h1>
      <h2>{`Hello ${user}`}</h2>

      <UserContext.Provider value={user}>
        <Component2 />
      </UserContext.Provider>
    </div>
  );
}

export default Component1;
