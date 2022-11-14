import './App.css';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './AboutPage.js';
import Navbar from './Navbar.js';
import Home from './Home.js';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutPage />
          </Route>
        </Switch>
      </div>
      </div>
    </Router>
    
  );
}

export default App;
