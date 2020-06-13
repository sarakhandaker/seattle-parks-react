import React, { PureComponent, Fragment } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Footer from './components/Footer'
import UserHomeContainer from './containers/UserHomeContainer'
import About from './components/About'
import ParksContainer from "./containers/ParksContainer"
import SingleParkContainer from "./containers/SingleParkContainer"
import { api } from "./services/api"

export default class App extends PureComponent {

  state = {
    user: ''
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      api.auth.check_user()
        .then((resp) => { if (!resp.error) { this.setUser(resp.user) } })
    }
  }

  onLogout = () => {
    this.setState({ user: "" })
    localStorage.removeItem('token')
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" render={props => <NavBar user={this.state.user} {...props} onLogout={this.onLogout} />} />
          <Route exact path="/"> <Redirect to="/parks" /></Route>
          <Route exact path="/login" render={props => <Login {...props} onLogin={this.setUser} />} />
          <Route path='/about' component={About} />
          <Route path='/home' render={props => <UserHomeContainer {...props} setUser={this.setUser} user={this.state.user} />} />
          <Route exact path='/parks' render={props => <ParksContainer {...props} user={this.state.user}/>} />
          <Route path={`/parks/:id`} render={props => <SingleParkContainer {...props} user={this.state.user} />} />
        </Router>
        <Footer />
      </Fragment>
    )
  }
}