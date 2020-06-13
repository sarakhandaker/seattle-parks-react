import React from 'react'
import { Link } from 'react-router-dom'
import { usefulFunctions } from '../services/usefulFunctions'

export function ParkList({parks, user}) {
    const makeLi = () => {
        return parks.map(park =>
            <li key={park.id}><Link to={"parks/" + park.id}>
                <span className="icon"><i className="fa fa-tree"></i></span>
                <span className="text">
                    <strong>{usefulFunctions.title(park.name)}</strong>
                    - {park.seedAddress}
                    {user ? ` (${usefulFunctions.distance(user.latitude, user.longitude, park.latitude, park.longitude)} miles away)` : null}
                </span>
            </Link> <div className="clearfix"></div> </li>
        )
    }

    return (
        <div className="park-list">
            <h1 style={{ "color": "white" }}>Showing {parks.length} Seattle Parks out of 411:</h1>
            <div className="row">
                <ul className="links"> {makeLi()} </ul>
            </div>
        </div >
    )
}

export default ParkList