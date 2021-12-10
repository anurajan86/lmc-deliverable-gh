import React from 'react';
import './App.css';
import Home from './components/pages/HomePage/Home';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import LearnMore from './components/pages/LearnMore/LearnMore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Contribute from './components/pages/Contribute/Contribute';
import Blog from './components/pages/Blog/Blog';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/lmc-deliverable-gh' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/projects' component={Projects} />
        <Route path='/contribute' component={Contribute} />
        <Route path='/blog' component={Blog} />
        <Route path='/learn-more' component={LearnMore} />
        <Route path='/survey' component={() => { 
     window.location.href = 'https://gatech.co1.qualtrics.com/jfe/form/SV_1TxWbG70kCW8tkG'; 
     return null;
}}/>
      </Switch>
    </Router>
  );
}

export default App;