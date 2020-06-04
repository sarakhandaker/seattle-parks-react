import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import Logo from '../images/logo2.png'
import {Navbar} from 'react-bootstrap'

export class NavBar extends Component {
    render() {
        return (
            <nav className="navbar fixed-top navbar-expand-md custom-navbar navbar-dark">
                <img src={Logo} id="logo_custom" alt="logo"/>
                    <button className="navbar-toggler navbar-toggler-right custom-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon "></span>
                    </button>
                    <div className="collapse navbar-collapse " id="collapsibleNavbar">
                        <ul className="navbar-nav ml-auto ">
                            <li className="nav-item">
                                <Navbar.Text className="nav-link"><b ><Link to="/home">Home</Link></b></Navbar.Text>
                            </li>
                            <li className="nav-item">
                            <Navbar.Text className="nav-link"><b ><Link to="/parks">Find a Park</Link></b></Navbar.Text>
                            </li>
                            <li className="nav-item">
                            <Navbar.Text className="nav-link"><b ><Link to="/analytics">Analytics</Link></b></Navbar.Text>
                            </li>
                            <li className="nav-item">
                            <Navbar.Text className="nav-link"><b ><Link to="/about">About</Link></b></Navbar.Text>
                            </li>
                            <li className="nav-item">
                                {this.props.user? <Navbar.Text className="nav-link"><b ><Link to="/login">Logout</Link></b></Navbar.Text> : <Navbar.Text className="nav-link"><b ><Link to="/login">Login</Link></b></Navbar.Text>}
                            </li>
                        </ul>
                    </div>  
            </nav>
        )
    }
}

export default NavBar
