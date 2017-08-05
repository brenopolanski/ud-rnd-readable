import React from 'react'
import { Route, Switch } from 'react-router-dom'


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
        {/* <Route exact path="/" component={MyReads} />
        <Route path="/search" component={Search} /> */}
      </Switch>
    </main>
  )
}

export default Main