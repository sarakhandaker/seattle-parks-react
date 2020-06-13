import React, { Component } from 'react'
import Rating from '../components/Rating'
import { api } from '../services/api'

export class RatingsContainer extends Component {

    state = {
        id: ""
    }

    onSubmit = (data, id) => {
        this.props.onEdit(data, id)
        this.setState({ id: "" })
    }

    onDelete = (id) => {
        api.parks.deleteVisit(id)
        this.props.onRemove(id)
    }

    editForm = (id) => {
        this.setState({ id: id })
    }

    makeRatings() {
        let ratings = this.props.visits.sort((a, b) => new Date(b.date) - new Date(a.date))

        return ratings.map((visit, id) =>
            <div key={id}>
                <div className="row">
                    <div className="col">
                        {!this.props.parkPage ? <h4>Park: {visit.park}</h4> : null}
                        <Rating onEdit={this.onSubmit} key={id} edit={this.state.id === visit.id ? true : false} visit={visit} />
                    </div>
                </div>
                {this.props.parkPage? null :
                    <div className="row pb-3">
                        <div className="col p-0">
                            {!this.state.id ? <button onClick={() => this.editForm(visit.id)} className="btn-block btn-dark">Edit</button> :
                                <button onClick={() => this.setState({ id: "" })} className="btn-block btn-dark">Close Form</button>}
                        </div>
                        <div className="col p-0">
                            <button onClick={() => this.onDelete(visit.id)} className="btn-block btn-dark">Delete</button>
                        </div>
                    </div>
                }
            </div>)
    }

    render() {
        return (
            <>
                <h2>Recent Reviews</h2>
                <hr />
                {this.props.visits.length === 0 ? <h2>No park ratings</h2> : null}
                {this.makeRatings()}
            </>
        )
    }
}

export default RatingsContainer