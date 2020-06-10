import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class ParkList extends Component {

    distance(lat1, lon1, lat2, lon2) {
        var radlat1 = Math.PI * lat1/180
        var radlat2 = Math.PI * lat2/180
        var theta = lon1-lon2
        var radtheta = Math.PI * theta/180
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        dist = Math.acos(dist)
        dist = dist * 180/Math.PI
        dist = dist * 60 * 1.1515
        return dist.toFixed(2)
}

    toTitleCase(str) {
        return str.replace(
            /\w\S*/g,
            function (txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }
        )
    }
    makeLi = () => {
        const{user, parks}=this.props
        return parks.map(park =>
            <li key={park.id}><Link to={this.props.match.url + "/" + park.id}>
                <span className="icon"><i className="fa fa-tree"></i></span>
                <span className="text">
                    <strong>{this.toTitleCase(park.name)}</strong>
                    - {park.seedAddress} 
                    {user? ` (${this.distance(user.latitude, user.longitude, park.latitude, park.longitude)} miles away)` :null}
                    </span>
                    </Link>
                <div className="clearfix"></div>
            </li>
        )
    }
    render() {
        const {search, parks, user}= this.props
        console.log(parks, user)
        return (
            <div className="park-list">
                <h1 style={{ "color": "white" }}>{!search? "411": parks.length} Seattle Area Parks:</h1>
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
