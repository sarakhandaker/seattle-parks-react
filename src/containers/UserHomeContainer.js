import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'

export class UserHomeContainer extends Component {
    state={
        user:{}
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/v1/profile", {
            headers:
        { "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`
    }})
        .then(r=>r.json())
        .then(r=> this.setState({user: r}))

    }
    render() {
        return (<>
            
<div class="container">
    <div class="col-lg-7 text-center">
        <h1 class="display-4">Welcome {this.props.user.username}</h1>
        <p class="lead mb-0">Easily create a profile widget using bootstrap 4.</p>
    </div>
</div>


<div class="row py-5">
    <div class="col-xl-4 col-md-6 col-sm-10 mx-auto">
        <div class="bg-white shadow rounded overflow-hidden">
            <div class="px-4 pt-0 pb-4 bg-dark">
                <div class="media align-items-end profile-header">
                    <div class="profile mr-3"><a href="#" class="btn btn-dark btn-sm btn-block">Edit profile</a></div>
                    <div class="media-body mb-5 text-white">
                        <h4 class="mt-0 mb-0">Manuella Tarly</h4>
                        <p class="small mb-4"> <i class="fa fa-map-marker mr-2"></i>San Farcisco</p>
                    </div>
                </div>
            </div>

            <div class="bg-light p-4 d-flex justify-content-end text-center">
                <ul class="list-inline mb-0">
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">241</h5><small class="text-muted"> <i class="fa fa-picture-o mr-1"></i>Photos</small>
                    </li>
                    <li class="list-inline-item">
                        <h5 class="font-weight-bold mb-0 d-block">84K</h5><small class="text-muted"> <i class="fa fa-user-circle-o mr-1"></i>Followers</small>
                    </li>
                </ul>
            </div>

            <div class="py-4 px-4">
                <div class="py-4">
                    <h5 class="mb-3">Recent posts</h5>
                    <div class="p-4 bg-light rounded shadow-sm">
                        <p class="font-italic mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                        <ul class="list-inline small text-muted mt-3 mb-0">
                            <li class="list-inline-item"><i class="fa fa-comment-o mr-2"></i>12 Comments</li>
                            <li class="list-inline-item"><i class="fa fa-heart-o mr-2"></i>200 Likes</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
</>
        )
    }
}

export default AuthHOC(UserHomeContainer)
