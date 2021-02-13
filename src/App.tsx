import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import New from './Pages/New';

function App() {
  return (
    <div className="App">
      <Router>
        <main>
          <Route exact path="/" component={New} />
        </main>
      </Router>
    </div>
  );
}

export default App;
