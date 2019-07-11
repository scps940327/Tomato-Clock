import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import ClockBodyData from './components/containers/ClockBodyData.js'

function App() {
  return (
      <Router>
        <div className="px-4 py-2">
          <div className="max_width">
            <ul className="row justify-content-md-end">
                <li className="col-auto px-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="col-auto px-2">
                  <Link to={'/Login'}>Login</Link>
                </li>
             </ul>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/Login' component={Login} />
            </Switch>
          </div>
        </div>
      </Router>
  ); 
}

function Home(){
   return (
      <div>
        <h1>Home</h1>
        <ClockBodyData />
      </div>
   );
}

function Login() {
   return (
      <div>
         <h2>Login</h2>
      </div>
   );
}

export default App;