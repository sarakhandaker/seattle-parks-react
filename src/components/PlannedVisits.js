import React, { Component } from 'react'

export class PlannedVisits extends Component {
    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )
    }

    handleDelete=(id)=>{
        // api.parks.deleteSavedPark(id)
        // this.props.onRemove(id)
    }

    makeLi = () => {
        if (this.props.visits) {
            if(this.props.visits.length) {
                
            return this.props.visits.map((visit,index) =>{
                let newDate=new Date(visit.date)
                newDate =new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000).toLocaleDateString("en-US")
                    return <div className="row" key={index}>
                        <div className="col-md-auto">
                             <h3>{this.toTitleCase(visit.park)}- {newDate}</h3>
                        </div>
                        <div className="col text-right ">
                            <button className="btn-link delete">X</button>
                        </div>
                    </div>
            }
            )
            }
            return <h2>You have no upcoming visits planned</h2>
        }
    }

    render() {
        return (
            <div>
                        {this.makeLi()}
            </div >
        )
    }
}

export default PlannedVisits
