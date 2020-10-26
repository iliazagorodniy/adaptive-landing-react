import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./components/pages/HomePage/Home";
import Services from "./components/pages/Services/Services";

function App() {
  return (
    <Router>
        <Navbar />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/services' exact component={Services}/>
        </Switch>
    </Router>
  );
}

export default App;
