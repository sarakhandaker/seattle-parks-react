import React, { Component } from 'react'
import Rating from '../components/Rating'
import { api } from '../services/api'

export class RatingsContainer extends Component {

    makeRatings(){
        return this.props.visits.map((visit, id) =>
        <div key={id}>
            <div className="row">
                <div className="col">
                    <h4>Park: {visit.park}</h4>
                    <Rating key={id} visit={visit} />
                </div>
            </div>
            <div className="row pb-3">
                <div className="col p-0">
                    <button className="btn-block btn-dark">Edit</button>
                </div>
                <div className="col p-0">
                    <button onClick={()=>this.onDelete(visit.id)} className="btn-block btn-dark">Delete</button>
                </div>
            </div>
        </div>)
    }

    onDelete=(id)=>{
        api.parks.deleteVisit(id)
        this.props.onRemove(id)
    }

    render() {
        return (
            <>
                <h2>Recent Reviews</h2>
                        <hr />
                {this.makeRatings()}
            </>
        )
    }
}

export default RatingsContainer
