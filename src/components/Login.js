import React, { Component } from 'react'
import Photo from "../images/gasworks.jpg"

export class Login extends Component {
    render() {
        return (
            <div class="container">
                <div class="row m-5 no-gutters shadow-lg">
                    <div class="col-md-6 d-none d-md-block">
                        <img src={Photo} class="img-fluid" style={{ "min-height": "100%" }} alt="Gasworks Park" />
                    </div>
                    <div class="col-md-6 bg-white p-5">
                        <h3 class="pb-3">Login Form</h3>
                        <div class="form-style">
                            <form>
                                <div class="form-group pb-3">
                                    <input type="email" placeholder="Email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="form-group pb-3">
                                    <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div class="pb-2">
                                    <button type="submit" class="btn w-100 font-weight-bold mt-2 login-btn">Submit</button>
                                </div>
                            </form>
                            <div class="sideline">OR</div>
                            <div class="pb-2">
                                    <button type="submit" class="btn w-100 font-weight-bold mt-2 login-btn">Sign Up</button>
                                </div>
                            {/* <div class="pt-4 text-center">
                                Get Members Benefit. <a href="#">Sign Up</a>
                            </div> */}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

export default Login
