import React, { useState } from 'react'
import { usefulFunctions } from '../services/usefulFunctions'
import { api } from '../services/api'
import { Button, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom'


export function PlannedVisits({ visits, onRemove }) {

    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);

    // visits.push({ date: "2020-06-10T00:00:00.000Z", park: "LICTON SPRINGS PARK" })

    const handleDelete = id => {
        api.parks.deleteVisit(id)
        onRemove(id)
    }

    const handleLink = id =>{
        handleDelete(id)
        setShow(false)
    }

    if (visits) {
        if (visits.length) {
            return visits.map((visit, index) => {
                let newDate = new Date(visit.date)
                newDate = new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000)
                if (newDate > new Date()) {
                    return <div className="row" key={index}>
                        <div className="col-md-auto">
                            <h4>{usefulFunctions.title(visit.park)}- {newDate.toLocaleDateString("en-US")}</h4>
                        </div>
                        <div className="col text-right ">
                            <button onClick={() => handleDelete(visit.id)} className="btn-link delete">X</button>
                        </div>
                    </div>
                }
                else {
                    return <Modal style={{opacity:1}} show={show} width="400" height="800" onHide={handleClose}>
                        <div className="modal-div">
                        <Modal.Body> {`How was your planned visit to ${usefulFunctions.title(visit.park)} on ${newDate.toLocaleDateString("en-US")}?`}</Modal.Body>
                        <Button variant="warning" onClick={() => handleLink(visit.id)}><Link to='/parks'> Leave a Review </Link> </Button>
                        <Button variant="warning" onClick={() => handleLink(visit.id)}><Link to='/home'> Back to Homepage </Link></Button>
                        </div>
                    </Modal>
                }
            })
        }
        return <h2>You have no upcoming visits planned</h2>
    }
}

export default PlannedVisits