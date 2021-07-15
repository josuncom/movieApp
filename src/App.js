import React from 'react';
import {HashRouter, Route} from "react-router-dom";
import About from "./routes/about";
import Home from "./routes/home";
import Navi from "./components/navi";
import Detail from "./routes/detail";

function App(){
  return (
  <HashRouter>
    <Navi/>
    <Route path="/" exact={true} component={Home}/>
    <Route path="/about" exact={true} component={About}/>
    <Route path="/movie/:id" component={Detail} />
  </HashRouter>
  );
}



export default App;