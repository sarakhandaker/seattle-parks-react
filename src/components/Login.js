import React, { Component } from 'react'
import Photo from "../images/gasworks.jpg"

export class Login extends Component {
    state = {
        emailLogin: "",
        passwordLogin: "",
        usernameSignup: "",
        passwordSignup: "",
        addressSignup: "",
        emailSignup: ""
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = (event) => {
        event.preventDefault()
        const { emailLogin, passwordLogin } = this.state
        fetch('http://localhost:3000/api/v1/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    email: emailLogin,
                    password: passwordLogin,
                }
            })
        })
            .then(r => r.json())
            .then(json => {
                this.storeToken(json)
                this.props.history.push('/home')
            })
    }

    handleCreateUser = (event) => {
        event.preventDefault()
        const { usernameSignup, passwordSignup, addressSignup, emailSignup } = this.state
        fetch('http://localhost:3000/api/v1/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                user: {
                    username: usernameSignup,
                    password: passwordSignup,
                    address: addressSignup,
                    email: emailSignup
                }
            })
        })
            .then(r => r.json())
            .then(json => {
                this.storeToken(json)
                this.props.history.push('/home')
            })
    }

    storeToken(json) {
        this.props.onLogin(json.user)
        localStorage.setItem('token', json.jwt)
    }

    render() {
        const {emailLogin, emailSignup, usernameSignup, passwordLogin, passwordSignup, addressSignup}=this.state
        return (
            <div class="container">
                <div class="row m-5 no-gutters shadow-lg">
                    <div class="col-md-6 d-none d-md-block">
                        <img src={Photo} class="img-fluid" style={{ "min-height": "100%" }} alt="Gasworks Park" />
                    </div>
                    <div class="col-md-6 bg-white p-5">
                        <h3>Returning Users</h3>
                        <div class="form-style">
                            <form onSubmit={this.handleLogin}>
                                <div class="form-group">
                                    <input type="email" placeholder="Email" class="form-control" name="emailLogin" value={emailLogin} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control" name="passwordLogin" value={passwordLogin} onChange={this.handleChange} />
                                </div>
                                <div class="pb-2">
                                    <button type="submit" class="btn w-100 font-weight-bold mt-2 btn-lg login-btn">Login</button>
                                </div>
                            </form>
                        </div>
                        <div class="sideline p-2">OR</div>
                        <h3>New Users</h3>
                        <div class="form-style">
                            <form onSubmit={this.handleCreateUser}>
                                <div class="form-group">
                                    <input type="text" placeholder="Username" class="form-control" name="usernameSignup" value={usernameSignup} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <input type="text" placeholder="Address" class="form-control" name="addressSignup" value={addressSignup} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <input type="email" placeholder="Email" class="form-control" name="emailSignup" value={emailSignup} onChange={this.handleChange}/>
                                </div>
                                <div class="form-group">
                                    <input type="password" placeholder="Password" class="form-control" name="passwordSignup" value={passwordSignup} onChange={this.handleChange}/>
                                </div>
                                <div class="pb-2">
                                    <button type="submit" class="btn w-100 font-weight-bold mt-2 btn-lg login-btn">Signup</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login
