import React, { Component } from 'react'

export class VisitForm extends Component {
    state= {
        date: new Date().toISOString().substr(0,10),
        comment: "",
        rating: ""
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        const {user, park}=this.props
        this.props.onSubmit({visit: {...this.state, user_id:user.id, park_id: park.id }})
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" id="visit" onSubmit={this.handleSubmit}>
                    <legend>Submit a New Review for {this.props.park.name}</legend>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Select Date</label>
                            <input onChange={this.handleChange} type="date" name="date" className="form-control" value={this.state.date}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Comment</label>
                            <textarea onChange={this.handleChange} name="comment" form="visit" className="form-control input-md">{this.state.commment}</textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Rating</label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="1" /> 1 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="2" /> 2 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="3" /> 3 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="4" /> 4 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="5" /> 5 </label>
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

export default VisitForm
