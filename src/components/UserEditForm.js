import React, { Component } from 'react'

export class UserEditForm extends Component {
    state= {
        email: this.props.user.email,
        address: this.props.user.address
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onSubmit({user: {...this.state}})
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit}>
                    <legend>Edit Your Profile</legend>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>New Address</label>
                            <input onChange={this.handleChange} type="text" name="address" className="form-control" value={this.state.address}/>
                        
                        </div>
                        <div className="col-md-6">
                            <label>New Email</label>
                            <input onChange={this.handleChange} type="email" name="email" className="form-control" value={this.state.email}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6">
                            <button type="submit" className=" btn btn-dark form-control input-md">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserEditForm