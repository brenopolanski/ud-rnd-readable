import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../containers/Home'

/**
 * Main component that handle routes
 */
const Main = () => {
  return (
    <main
      style={{
        fontFamily: "roboto, arial, helvetica, sans-serif"
      }}
    >
      <Switch>
         <Route exact path="/" component={Home} />
      </Switch>
    </main>
  )
}

export default Main