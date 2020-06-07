import React, {PureComponent, Fragment } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login'
import Footer from './components/Footer'
import UserHomeContainer from './containers/UserHomeContainer'
import About from './components/About'
import ParksContainer from "./containers/ParksContainer"
import SingleParkContainer from "./containers/SingleParkContainer"

export default class App extends PureComponent {

    state={
        user:''
    }

    componentDidMount(){
      if (localStorage.getItem("token")) {
        fetch(`https://seattle-parks-api.herokuapp.com/check_user`, {
            headers: { "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }})
        .then(res => res.json())
        .then((resp) => { if (!resp.error) { this.setUser(resp.user) } })
      }
    }

  onLogout=()=> {
    this.setState({user: ""})
    localStorage.removeItem('token')
  }

  setUser=(user)=> {
   this.setState({user: user})
  }

  render() {
      return (
        <Fragment>
        <Router>
        <Route path="/" render={props => <NavBar  user={this.state.user} {...props} onLogout={this.onLogout}/>}/>
        <Route exact path="/"> <Redirect to="/parks" /></Route>
        <Route exact path="/login" render={props => <Login {...props} onLogin={this.setUser} />}/>
        <Route path= '/about' render={props => <About {...props} setUser={this.setUser} />}/>
        <Route path= '/home' render={props => <UserHomeContainer {...props} setUser={this.setUser} user={this.state.user} />}/>
        <Route exact path= '/parks' render={props => <ParksContainer {...props} setUser={this.setUser} user={this.state.user} />}/>
        <Route path={`/parks/:id`} render={props => <SingleParkContainer {...props} user={this.state.user} />}/>
        </Router>
        <Footer />
        </Fragment>
      )
  }
}