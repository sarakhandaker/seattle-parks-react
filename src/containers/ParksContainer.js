import React, { Component } from 'react'
import ParkList from '../components/ParkList'
import AllParksForm from '../components/AllParkForm'
import ShowMap from '../components/ShowMap'

export class ParksContainer extends Component {
    state={
        parks:[],
        display: []
    }
    componentDidMount(){
        fetch("http://localhost:3000/api/v1/parks")
        .then(r=>r.json())
        .then(r=> this.setState({parks: r, display: r}))
    }

    onSubmit=({search, features})=>{
        let newArray=this.state.parks.filter(park=> park.name.includes(search.toUpperCase()))

        features.forEach(feat=>{
            newArray=newArray.filter(park=> park.features.map(f=>f.name).includes(feat))
        })

        this.setState({display: newArray})
    }

    render() {
        const {display}=this.state
        return (
            <div className="container">
                <div className="row pb-5" >
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark" style={{"minHeight": "500px"}}>
                        <AllParksForm onSearch={this.onSubmit}/>
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