import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute'

import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";
import AddColor from "./components/AddColor";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
        <PrivateRoute path="/bubblepage" component={BubblePage}/>
        
      </div>
    </Router>
  );
}

export default App;
