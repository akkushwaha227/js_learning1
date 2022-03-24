import React, { useState } from "react";
import "./styles.css";
var color = "yellow";
// var username = prompt("Your Name: ")
var username = "Aman";
var count = 0;

var objkt = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five"
};

export default function App() {
  var [counter, fun_counter] = useState(0);
  var [uValue, fun_uValue] = useState("");
  var [objktt, fun_objktt] = useState("");

  function fun_hello() {
    count = count + 1;
    fun_counter(count);
    // console.log("Hello: " + count) ;
  }

  function fun_type(event) {
    // console.log(event.target.value);
    fun_uValue(event.target.value);
    if (objkt[event.target.value] === undefined) {
      fun_objktt("Not Found");
    } else {
      fun_objktt(objkt[event.target.value]);
    }
  }

  return (
    <div className="App">
      <h1 style={{ backgroundColor: "blue", color: color }}>
        Welcome {username}
      </h1>
      <button onClick={fun_hello}>Hello</button>
      {counter}
      <div>
        <input onChange={fun_type}></input>
      </div>
      <div>{uValue}</div>
      <div>Value: {objktt}</div>
    </div>
  );
}
