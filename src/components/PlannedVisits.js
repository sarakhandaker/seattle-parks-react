import React, { useState } from 'react'
import { usefulFunctions } from '../services/usefulFunctions'
import { api } from '../services/api'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export function PlannedVisits({ visits, onRemove }) {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    visits.push({ date: "2020-06-10T00:00:00.000Z", park: "LICTON SPRINGS PARK", park_id: "209" })

    const handleDelete = id => {
        api.parks.deleteVisit(id)
        onRemove(id)
    }

    const handleLink = id => {
        handleDelete(id)
        setShow(false)
    }

    let first=true

    if (visits) {
        if (visits.length) {
            return visits.map((visit, index) => {
                let newDate = new Date(visit.date)
                newDate = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000)
                if (newDate > new Date()) {
                    return <div className="row" key={index}>
                        <div className="col-md-auto">
                            <Link to={`/parks/${visit.park_id}`}><h4 className="link-text" style={{ "color": "#2A3C2B" }}>{usefulFunctions.title(visit.park)}- {newDate.toLocaleDateString("en-US")}</h4> </Link>
                        </div>
                        <div className="col text-right ">
                            <button onClick={() => handleDelete(visit.id)} className="btn-link delete">X</button>
                        </div>
                    </div>
                }
                else if (first){
                    first =false
                    return <Modal style={{ opacity: 1 }} show={show} width="400" height="800" onHide={handleClose}>
                        <div className="modal-div">
                            <div className="row-md-auto p-3"><img className="bench" src="https://cdn.pixabay.com/photo/2018/09/21/22/46/silhouette-3694193_960_720.png" alt="Bench" style={{ "height": "200px" }} /> </div>
                            <hr />
                            <Modal.Body> {`How was your visit to ${usefulFunctions.title(visit.park)} on ${newDate.toLocaleDateString("en-US")}?`}</Modal.Body>
                            <hr />
                            <Button variant="light" onClick={() => handleLink(visit.id)}><Link to={`/parks/${visit.park_id}`}> Leave a Review </Link> </Button>
                            <Button variant="light" onClick={() => handleLink(visit.id)}><Link to='/home'> Back to Homepage </Link></Button>
                        </div>
                    </Modal>
                }
            })
        }
        return <h2>You have no upcoming visits planned</h2>
    }
}

export default PlannedVisits