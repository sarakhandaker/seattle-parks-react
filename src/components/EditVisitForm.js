import React, { Component } from 'react'

export class EditVisitForm extends Component {
    state= {
        date: new Date(this.props.visit.date).toISOString().substr(0,10),
        comment: this.props.visit.comment,
        rating: this.props.visit.rating.toString()
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onEdit({visit: {...this.state}}, this.props.visit.id)
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" id="visit" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Select Date</label>
                            <input onChange={this.handleChange} type="date" name="date" className="form-control" defaultValue={this.state.date}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Comment</label>
                            <textarea onChange={this.handleChange} name="comment" form="visit" className="form-control input-md"  defaultValue={this.state.comment}></textarea>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-6">
                            <label>Rating</label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="1" checked={this.state.rating ==="1"}/> 1 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="2" checked={this.state.rating ==="2"}/> 2 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="3" checked={this.state.rating ==="3"}/> 3 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="4" checked={this.state.rating ==="4"}/> 4 </label>
                            <label className="radio-inline"> <input onChange={this.handleChange} type="radio" name="rating" value="5" checked={this.state.rating ==="5"}/> 5 </label>
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

export default EditVisitForm
