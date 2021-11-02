import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import LearnMore from './components/pages/LearnMore/LearnMore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/learn-more' component={LearnMore} />
      </Switch>
    </Router>
  );
}

export default App;