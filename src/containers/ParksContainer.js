import React, { Component } from 'react'
import ParkList from '../components/ParkList'
import AllParksForm from '../components/AllParkForm'
import ShowMap from '../components/ShowMap'


export class ParksContainer extends Component {
    state={
        parks:[],
        display: [],
        features:[]
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/v1/parks")
        .then(r=>r.json())
        .then(r=> this.setState({parks: r.parks, display: r.parks, features: r.features}))
    }

    onSearch=({search, features})=>{
        let newArray=this.state.parks.filter(park=> park.name.includes(search.toUpperCase()))
        this.setState({display: newArray})

    }

    render() {
        const {display, features, parks}=this.state
        return (
            <div className="container">
                <div className="row" >
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark" style={{"minHeight": "500px"}}>
                        <AllParksForm onSearch={this.onSearch} features={features}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
                        <ShowMap parks={display}/>
                    </div>
                </div>
                <ParkList parks={display} match={this.props.match}/>
            </div>
        )
    }
}

export default ParksContainer
