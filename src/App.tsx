import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Resume from './Pages/Resume';
import Projects from './Pages/Projects';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="header-container">
          <aside>
            <Link to={"/"} className="menu">
							Resume
						</Link>
            <Link to={"/projects"} className="menu">
							Projects
						</Link>
          </aside>
        </div>

        <main>
          <Route exact path="/" component={Resume} />
          <Route exact path="/projects" component={Projects} />
        </main>
      </Router>
    </div>
  );
}

export default App;
