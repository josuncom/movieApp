import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";

function App(){
  return (
  <HashRouter>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" exact={true} component={About}/>
  </HashRouter>
  );
}



export default App;