import {Switch, Route} from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import About from './components/About'
import NotFound from './components/NotFound'
import Home from './components/Home'

const App = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <Route component={NotFound} />
  </Switch>
)
export default App
