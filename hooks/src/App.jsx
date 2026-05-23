import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  function ReactEvent() {
    console.log("you clicked me.");
  }
  
  return (
    <div>
      <h1>count: {count}</h1>
    <button onClick={() => {setCount(count + 2);
                            ReactEvent();
      }} > Add </button> <br /><br />
      <button onClick={() => setCount(count - 1)}>minus</button><br /> <br />

      <button onClick={() => setCount(0)}>Reset</button>
      <h2 >click</h2>
    </div>
  )
 
}

export default App
