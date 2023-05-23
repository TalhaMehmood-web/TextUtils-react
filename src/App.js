import "./App.css";
import Navbar from "./components/Navbar";
import TextArea from "./components/TextArea";
import About from "./components/About";
import React, { useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");

  let toggle = ()=>{
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "#03224e";
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
    <Router>
      <Navbar title= " TextUtils"  mode={mode}  toggle={toggle}/>
<div className="container">
<Switch>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/">
          <TextArea heading = "Enter the Text to Analyze Below" mode={mode}/>
          </Route>
 </Switch>
</div>
</Router>
    </>
  );
}

export default App;