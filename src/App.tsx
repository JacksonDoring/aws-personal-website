import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';
import New from './Pages/New';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Route exact path="/" component={Resume} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/new" component={New} />
        </main>
      </Router>
    </div>
  );
}

export default App;
