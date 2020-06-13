import React, { Component } from 'react'

export class PlanVisitForm extends Component {
    state= {
        date: new Date().toISOString().substr(0,10),
        completed: false
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {user, park}=this.props
        this.props.onSubmit({visit: {...this.state, user_id: user.id, park_id: park.id }}, true)
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
            <form className="form-horizontal" id="visit" onSubmit={this.handleSubmit}>
                <legend>Plan a Visit to {this.props.park.name}</legend>
                <div className="form-group">
                    <div className="col-md-6">
                        <label>Select Date</label>
                        <input onChange={this.handleChange} type="date" name="date" className="form-control" value={this.state.date}/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="col-md-6">
                        <button type="submit" className="btn btn-dark form-control input-md">Submit</button>
                    </div>
                </div>
            </form>
        </div>
        )
    }
}

export default PlanVisitForm