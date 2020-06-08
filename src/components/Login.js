import React, { Component } from 'react'
import Photo from "../images/gasworks.jpg"
import { api } from '../services/api'

export class Login extends Component {
    state = {
        emailLogin: "",
        passwordLogin: "",
        usernameSignup: "",
        passwordSignup: "",
        addressSignup: "",
        emailSignup: "",
        message: "",
        error:""
    }

    signupErrors(){
        if (this.state.error){
        const keys=Object.keys(this.state.error)
       return keys.map( (key,i)=> <h6 key={i}>{key}: {this.state.error[key]} </h6>)
       }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = (event) => {

        event.preventDefault()

        const { emailLogin, passwordLogin } = this.state
        const data = { user: {
                    email: emailLogin,
                    password: passwordLogin,
                }}

        api.auth.login(data)
            .then(res => {
                if (res.message) {
                    this.setState({ message: res.message })
                }
                else {
                    this.storeToken(res)
                    this.props.history.push('/home')
                }
            })
    }

    handleCreateUser = (event) => {
        event.preventDefault()
        const { usernameSignup, passwordSignup, addressSignup, emailSignup } = this.state
        const data = { user: {
                        username: usernameSignup,
                        password: passwordSignup,
                        address: addressSignup,
                        email: emailSignup
            }}

        api.auth.signup(data)
            .then(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                }
                else {
                    this.storeToken(res)
                    this.props.history.push('/home')
                }
            })
    }

    storeToken(json) {
        this.props.onLogin(json.user)
        localStorage.setItem('token', json.jwt)
    }

    render() {
        const { emailLogin, emailSignup, usernameSignup, passwordLogin, passwordSignup, addressSignup } = this.state
        return (
            <div className="container">
                <div className="row m-5 no-gutters shadow-lg">
                    <div className="col-md-6 d-none d-md-block">
                        <img src={Photo} className="img-fluid" style={{ "minHeight": "100%" }} alt="Gasworks Park" />
                    </div>
                    <div className="col-md-6 bg-white p-5">
                        <h3>Returning Users</h3>
                        <div className="form-style">
                            <form onSubmit={this.handleLogin}>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" name="emailLogin" value={emailLogin} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" name="passwordLogin" value={passwordLogin} onChange={this.handleChange} />
                                </div>
                                <div className="pb-2">
                                    <button type="submit" className="btn w-100 font-weight-bold mt-2 btn-lg login-btn">Login</button>
                                </div>
                            </form>
                            <div className="text-center text-gray">
                                <h6>{this.state.message}</h6>
                            </div>
                        </div>
                        <div className="sideline p-2">OR</div>
                        <h3>New Users</h3>
                        <div className="form-style">
                            <form onSubmit={this.handleCreateUser}>
                                <div className="form-group">
                                    <input type="text" placeholder="Username" className="form-control" name="usernameSignup" value={usernameSignup} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="text" placeholder="Address" className="form-control" name="addressSignup" value={addressSignup} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="email" placeholder="Email" className="form-control" name="emailSignup" value={emailSignup} onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <input type="password" placeholder="Password" className="form-control" name="passwordSignup" value={passwordSignup} onChange={this.handleChange} />
                                </div>
                                <div className="pb-2">
                                    <button type="submit" className="btn w-100 font-weight-bold mt-2 btn-lg login-btn">Signup</button>
                                </div>
                            </form>
                            <div className="text-center text-gray">
                                {this.signupErrors() }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login