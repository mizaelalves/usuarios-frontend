import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from './components/Main'
import Table from './components/Table'
import Create from './components/CreateUser'

export default function Routes(){
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/table' exact component={Table}/>
        <Route path='/create' exact component={Create}/>
      </Switch>
    </Router>
  )
}