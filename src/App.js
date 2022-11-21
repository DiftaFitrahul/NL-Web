import { Helmet } from 'react-helmet';
import  { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutPage from './components/About/AboutPage.js';
import Navbar from './components/Layout/Navbar.js';
import LandingPage from './components/Home/LandingPage';
import MainDesc from './components/Home/MainDesc';
import Events from './components/Home/Events';
import Footer from './components/Layout/Footer';
import Form from './components/Home/Form';


function App() {
  return (
    <div>
      <Helmet>
        <title>Night Login UGM</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Night Login, Night Login UGM, BSO DTETI UGM" />
        <meta name="description" content="Night Login merupakan Badan Semi Otonom (BSO) di DTETI FT UGM yang bergerak di bidang teknologi informasi." />
      </Helmet>
      <Router>
        <div className="bg-red-NL">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <LandingPage />
              <MainDesc />
              <Events />
              <Form />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
          </Switch>
        </div>
        <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
