import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter=5
  const incValue = () => {
    // console.log("clicked",counter);
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(prevCounter =>prevCounter+ 1);
      setCounter(prevCounter =>prevCounter+ 1);
      setCounter(prevCounter =>prevCounter+ 1);
      setCounter(prevCounter =>prevCounter+ 1);
    }
  };
  const decValue = () => {
    // console.log("clicked",counter);
    // counter = counter - 1;
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={incValue}>Increase Value {counter}</button>
      <br />
      <button onClick={decValue}>Decrease Value {counter}</button>
    </>
  );
}

export default App;
