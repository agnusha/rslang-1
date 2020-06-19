import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './component/navbar';
import Login from './component/login';
import Weather from './component/weather';
import './App.scss';

function App() {
  return (
    <Router>
      <div className="main">
        <Route path="/" component={NavBar} />
        <Route path="/weather" component={Weather} />
        <Route path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
