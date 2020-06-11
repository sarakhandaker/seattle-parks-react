import React, { Component } from 'react'
import ParkList from '../components/ParkList'
import AllParksForm from '../components/AllParkForm'
import ShowMap from '../components/ShowMap'
import { api } from '../services/api'

export class ParksContainer extends Component {
    state = {
        parks: [],
        display: [],
        displaySection: [],
        index: 0,
        search: false
    }
    componentDidMount() {
        api.parks.getParks()
            .then(r => this.setState({ parks: r, display: r, displaySection: r.slice(0, 30) }))
    }

    onSubmit = ({ search, features, neighborhood }) => {
        let newArray

        if (search){
        newArray = this.state.parks.filter(park => park.name.includes(search.toUpperCase()))
        }
        else if (!search && !neighborhood && !features.length) {
            return
        }
        else {
            newArray= this.state.parks
        }

        features.forEach(feat => {
            newArray = newArray.filter(park => park.features.map(f => f.name).includes(feat))
        })

        if (neighborhood){
            newArray=newArray.filter(park=> park.neighborhood===neighborhood)
        }

        this.setState({ displaySection: newArray, search: true })
    }

    handleNext = () => {
        if (this.state.index+30 < 411){
        this.setState(prev => (
            {
                index: prev.index + 30,
                displaySection: prev.display.slice(prev.index+30, prev.index + 60)
            }))
        }
    }

    handlePrevious = () => {
        if(this.state.index - 60>=0){
        
        this.setState(prev => {
            return {
                index: prev.index - 30,
                displaySection: prev.display.slice(prev.index - 60, prev.index-30)
            }})
        }
    }

    render() {
        const { displaySection, search } = this.state
        return (
            <div className="container">
                <div className="row pb-5" >
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark" style={{ "minHeight": "500px" }}>
                        <AllParksForm onSearch={this.onSubmit} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
                        <ShowMap user={this.props.user} parks={displaySection} />
                    </div>
                </div>
                <div className="col pb-5" >
                <ParkList user={this.props.user} search={search} parks={displaySection} match={this.props.match} />
                </div>
                {!search ?
                    <div className="row pb-3">
                        <div className="col">
                            <button onClick={this.handlePrevious} className="btn-block btn-dark">Previous</button>
                        </div>
                        <div className="col">
                            <button onClick={this.handleNext} className="btn-block btn-dark">Next</button>
                        </div>
                    </div> : null}
            </div>
        )
    }
}

export default ParksContainer