import React from 'react'
import { Link } from 'react-router-dom'
import { api } from '../services/api'
import { usefulFunctions } from '../services/usefulFunctions'

export function SavedParksList({ onRemove, parks }) {

    const handleDelete = id => {
        api.parks.deleteSavedPark(id)
        onRemove(id)
    }

    const makeLi = () => {
        if (parks) {
            if (parks.length) {
                return parks.map(park => <li key={park.id}>
                    <div className="row">
                        <Link to={"parks/" + park.park_id}>
                            <div className="col-md-auto">
                                <span className="icon"><i className="fa fa-tree"></i></span>
                                <span className="text">{usefulFunctions.title(park.park)}</span>
                            </div> </Link>
                        <div className="col text-right ">
                            <button onClick={() => handleDelete(park.id)} className="btn btn-link delete"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                        </div> </div> </li>
                )
            }
            return <h2>You have no saved parks</h2>
        }
    }

    return (
        <div className="park-list">
            <ul className="links"> {makeLi()} </ul>
        </div >
    )
}

export default SavedParksList