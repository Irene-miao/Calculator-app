import React, { useState } from "react";
import classes from "./App.css";
import Button from "./Button";
import Keypad from "./Keypad";
import Display from "./Display";
import reactDom from "react-dom";

function App() {
  const [data, setData] = useState("");
  const [size, setSize] = useState(0);

  const calculate = () => {
    try {
      const result = eval(data);
      setData(result);
    } catch (e) {
      console.log(e);
    }
  };

  const handleClick = (e) => {
    const value = e.target.getAttribute("data-value");
    switch (value) {
      case "reset":
        setData("");
        break;
      case "equal":
        calculate();
        setSize(size + 1);
        break;
      default:
        setData(data + value);
    }
  };

  let content;
  if (size === 0) {
    content = <p>No operations</p>;
  } else {
    content = <p>There are a total of {size} operations.</p>;
  }

  return (
    <div className={classes.calc}>
      <p
        style={{
          position: "absolute",
          top: "2%",
          left: "10%",
        }}
      >
        {content}
      </p>
      <Display data={data} />
      <Keypad>
        <Button onClick={handleClick} label="1" value="1" />
        <Button onClick={handleClick} label="2" value="2" />
        <Button onClick={handleClick} label="3" value="3" />
        <Button onClick={handleClick} label="4" value="4" />
        <Button onClick={handleClick} label="5" value="5" />
        <Button onClick={handleClick} label="6" value="6" />
        <Button onClick={handleClick} label="7" value="7" />
        <Button onClick={handleClick} label="8" value="8" />
        <Button onClick={handleClick} label="9" value="9" />
        <Button onClick={handleClick} label="+" value="+" />
        <Button onClick={handleClick} label="-" value="-" />
        <Button onClick={handleClick} label="/" value="/" />
        <Button onClick={handleClick} label="*" value="*" />
        <Button onClick={handleClick} label="Reset" value="reset" />
        <Button onClick={handleClick} label="=" value="equal" />
      </Keypad>
    </div>
  );
}
export default App;
