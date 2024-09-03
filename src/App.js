import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import './App.css';
// components
import Toggle from './Navbar/Toggle';
import Menu from './Navbar/Menu';
// pages
import HomePage from './Pages/ContactPage'
import ExamplePage from './Pages/ExamplePage';
import ContactPage from './Pages/ContactPage'
import ProductScreen from './components/ProductListing/ProductScreen'
function App() {

  const [navToggled, setNavToggled] = useState(false);

  const handleNavToggle = () => {
    setNavToggled(!navToggled);
  }

  return (
    <div className="App">
      <Toggle handleNavToggle={handleNavToggle}/>
      <Router>
      { navToggled ? <Menu handleNavToggle={handleNavToggle} /> : null }
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/example" component={ExamplePage} />
          <Route exact path="/contact" component={ContactPage} />
        </Switch>
      </Router>

      <ProductScreen /> 
    </div>
  );
}

export default App;