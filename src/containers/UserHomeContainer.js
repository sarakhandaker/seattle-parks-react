import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'
import Rating from '../components/Rating'

export class UserHomeContainer extends Component {
    state = {
        user: {}
    }
    componentDidMount() {
        fetch("http://localhost:3000/api/v1/profile", {
            headers:
            {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        })
            .then(r => r.json())
            .then(r => this.setState({ user: r.user }))
    }

    render() {
        const {username, show_visits}=this.state.user
        console.log(show_visits)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 text-left">
                        <h1 className="display-4">Welcome {username}</h1>
                        <p className="lead mb-0">Keep Exploring Seattle Parks!</p>
                    </div>
                </div>

            <div className="row py-5">
                <div className="col-xl-4 col-md-6 col-sm-10 mx-5">
                    <div className="bg-white shadow rounded overflow-hidden">
                        <div className="px-4 pt-0 pb-4 bg-dark">
                            <div className="media align-items-end profile-header">
                                <div className="profile mr-3"><a href="#" className="btn btn-dark btn-sm btn-block">Edit profile</a></div>
                                <div className="media-body mb-5 text-white">
                                    <h4 className="mt-0 mb-0">{this.props.user.username}</h4>
                                    <p className="small mb-4"> <i className="fa fa-map-marker mr-2"></i>{this.props.user.address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light p-4 d-flex justify-content-end text-center">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">241</h5><small className="text-muted"> <i className="fa fa-picture-o mr-1"></i>Photos</small>
                                </li>
                                <li className="list-inline-item">
                                    <h5 className="font-weight-bold mb-0 d-block">84K</h5><small className="text-muted"> <i className="fa fa-user-circle-o mr-1"></i>Followers</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <h2>Recent Reviews</h2>
                    <hr/>
                        {show_visits? show_visits.map((visit, id)=><> <h4>Park: {visit.park}</h4><Rating key={id} visit={visit}/></>) :null}
                </div>
            </div>
        </div >
        )
    }
}

export default AuthHOC(UserHomeContainer)
