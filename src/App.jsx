import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import HelloWorld from './Components/HelloWorld'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  return (
    <div>
      <Header />

      <HelloWorld name="Rithik" />

      <Router>
        <ul>
          <li>
            <Link to="/" className="text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-blue-500">About</Link>
          </li>
        </ul>
      </Router>

      <Switch>
        <Route path="/">
          
        </Route>
        <Route path="/about"></Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;