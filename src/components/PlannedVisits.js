import React from 'react'
import { usefulFunctions } from '../services/usefulFunctions'
import {api} from '../services/api'

export function PlannedVisits({ visits, onRemove }) {

    const handleDelete = id => {
        api.parks.deleteVisit(id)
        onRemove(id)
    }

    if (visits) {
        if (visits.length) {
            return visits.map((visit, index) => {
                let newDate = new Date(visit.date)
                newDate = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000).toLocaleDateString("en-US")
                return <div className="row" key={index}>
                    <div className="col-md-auto">
                        <h4>{usefulFunctions.title(visit.park)}- {newDate}</h4>
                    </div>
                    <div className="col text-right ">
                        <button onClick={()=>handleDelete(visit.id)} className="btn-link delete">X</button>
                    </div>
                </div>
            })
        }
        return <h2>You have no upcoming visits planned</h2>
    }
}

export default PlannedVisits