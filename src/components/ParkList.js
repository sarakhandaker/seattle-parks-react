import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ParkList extends Component {

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )
    }
    makeLi = () => {
        return this.props.parks.map(park =>
            <li key={park.id}><Link to={this.props.match.url + "/" + park.id}>
                <span className="icon"><i className="fa fa-tree"></i></span>
                <span className="text"><strong>{this.toTitleCase(park.name)}</strong>- {park.seedAddress}</span></Link>
                <div className="clearfix"></div>
            </li>
        )
    }
    render() {
        return (
            <div className="park-list ">
                <h1 style={{ "color": "white" }}>{this.props.parks.length} Seattle Area Parks:</h1>
                <div className="row">
                    <ul className="links">
                        {this.makeLi()}
                    </ul>
                </div>
            </div >
        )
    }
}

export default ParkList
