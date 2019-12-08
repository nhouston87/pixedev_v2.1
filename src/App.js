import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './resources/styles/App.scss'

// Bring in components
import Navigation from './components/utility/Navigation'
import Home from './components/Home'
import Story from './components/Story'
import Work from './components/Work'
import Contact from './components/Contact'
import Login from './components/utility/Login'
import Dashboard from './components/customers/Dashboard'
import PrivateRoute from './components/utility/PrivateRoute'
import Footer from './components/utility/Footer'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/story' component={Story} />
          <Route exact path='/work' component={Work} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
          <PrivateRoute exact path='/dashboard' authenticated={true} component={Dashboard} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App
