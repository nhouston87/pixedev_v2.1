import React from 'react'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({ component: Component, authenticated, ...rest }) => {
  console.log('authenticated')
  return (
    <Route {...rest} 
      render={props => 
        !authenticated ? (
          <Redirect to='/' />
        ) : (
          <Component {...props} />
        )
      } 
    />
  )
}

export default PrivateRoute
