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
import {connect} from 'react-redux'

class App extends PureComponent {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      api.auth.check_user()
        .then((resp) => { if (!resp.error) {  this.props.addUser(resp) } })
    }
  }

  render() {
    return (
      <Fragment>
        <Router>
          <Route path="/" render={props => <NavBar {...props}/>} />
          <Route exact path="/"> <Redirect to="/parks"/></Route>
          <Route exact path="/login" render={props => <Login {...props}/>} />
          <Route path='/about' component={About} />
          <Route path='/home' render={props => <UserHomeContainer {...props} setUser={this.props.addUser}/>}/>
          <Route exact path='/parks' render={props => <ParksContainer {...props}/>}/>
          <Route path={`/parks/:id`} render={props => <SingleParkContainer {...props}/>} />
        </Router>
        <Footer />
      </Fragment>
    )
  }
}

const mapStateToProps=state=>( {user: state.user})

const mapDispatchTpProps=dispatch =>{
  return {
    addUser: user => dispatch({type: "ADD_USER", user}),
    removeUser: () => dispatch({type: "REMOVE_USER"})
  }
}

export default connect(mapStateToProps, mapDispatchTpProps)(App)