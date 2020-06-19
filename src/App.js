
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Login from './component/login';
import Settings from "./component/settings";
import Weather from './component/weather';
import './App.css';
import LearningWords from './component/learning-words/LearningWords';


function App() {
  return (
    <Router>
      <div className="main">
        <Route path="/" component={NavBar} />
        <Route path="/learning-words" component={LearningWords}/>
        <Route path="/weather" component={Weather} />
        <Route path="/settings" component={Settings} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
