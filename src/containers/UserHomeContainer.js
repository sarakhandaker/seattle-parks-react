import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'
import Rating from '../components/Rating'
import Weather from '../components/Weather'
import UserEditForm from '../components/UserEditForm'
import SavedParksList from '../components/SavedParksList'
import {api} from '../services/api'

export class UserHomeContainer extends Component {
    state = {
        user: {},
        editUser: false,
        erros: ""
    }
    componentDidMount() {
        api.auth.getUserProfile()
        .then(r => this.setState({ user: r.user, weather: r.weather }))
    }

    handleEditUser() {
        this.setState(prev => ({ editUser: !prev.editUser }))
    }

    onSubmit = (data) => {
        api.auth.editUser(data, this.state.user.id)
        .then(res => {
            if (res.error) {
                this.setState({ error: res.error })
            }
            else {
                this.setState({ user: res.user, editUser: false })
            }
        })
    }

    formErrors() {
        if (this.state.error) {
            const keys = Object.keys(this.state.error)
            return keys.map((key, i) => <h6 key={i} style={{ "color": "orange" }}>{key}: {this.state.error[key]} </h6>)
        }
    }

    render() {
        const { username, show_visits, saved_list } = this.state.user
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6 text-left">
                        <h1 className="display-4">Welcome {username}</h1>
                        <p className="lead mb-0">Keep Exploring Seattle Parks!</p>
                        <h3 className="mb-4"> <i className="fa fa-map-marker mr-2"></i>{this.props.user.address}</h3>
                        <button onClick={() => this.handleEditUser()} className="btn btn-dark mr-3">{this.state.editUser ? "Close Edit User Form" : "Edit profile"}</button>
                        {this.state.editUser && username ? <UserEditForm onSubmit={this.onSubmit} user={this.state.user} /> : null}
                        {this.state.editUser ? this.formErrors() : null}
                    </div>
                    <Weather weather={this.state.weather} />
                </div>

                <div className="row pb-3">
                    <div className="col">
                        <h2>Recent Reviews</h2>
                        <hr />
                        {show_visits ? show_visits.map((visit, id) =>
                            <>
                                <div className="row">
                                    <div className="col">
                                        <h4 key={id * 10 + 1}>Park: {visit.park}</h4>
                                        <Rating key={id} visit={visit} />
                                    </div>
                                </div>
                                <div className="row pb-3">
                                    <div className="col p-0">
                                        <button className="btn-block btn-dark">Edit</button>
                                    </div>
                                    <div className="col p-0">
                                        <button className="btn-block btn-dark">Delete</button>
                                    </div>
                                </div>
                            </>
                        )
                            : null}
                    </div>
                    <div className="col">
                        <h2>Saved Parks</h2>
                        <hr />
                        <SavedParksList parks={saved_list} />
                    </div>
                </div>
            </div >
        )
    }
}

export default AuthHOC(UserHomeContainer)