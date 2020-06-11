import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {api} from '../services/api'

export class SavedParksList extends Component {

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )
    }

    handleDelete=(id)=>{
        api.parks.deleteSavedPark(id)
        this.props.onRemove(id)
    }

    makeLi = () => {
        if (this.props.parks) {
            if(this.props.parks.length) {
            return this.props.parks.map(park =>
                <li key={park.id}>
                    <div className="row">
                    <Link to={"parks/" + park.park_id}>
                        <div className="col-md-auto">
                            <span className="icon"><i className="fa fa-tree"></i></span>
                            <span className="text">{this.toTitleCase(park.park)}</span>
                        </div> </Link>
                        <div className="col text-right ">
                            <button onClick= {()=>this.handleDelete(park.id)} className="btn btn-link delete"><span className="glyphicon glyphicon-trash" aria-hidden="true"></span></button>
                        </div>
                    </div>
                </li>
            )
            }
            return <h2>You have no saved parks</h2>
        }
    }

    render() {
        return (
            <div className="park-list">
                    <ul className="links">
                        {this.makeLi()}
                    </ul>
            </div >
        )
    }
}

export default SavedParksList