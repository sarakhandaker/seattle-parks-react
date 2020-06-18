import React, { Component } from 'react'
import ParkList from '../components/ParkList'
import AllParksForm from '../components/AllParkForm'
import ShowMap from '../components/ShowMap'
import { connect } from 'react-redux'
import { fetchParks } from '../actions/fetchParks'

export class ParksContainer extends Component {
    state = {
        displaySection: [],
        index: 0,
        search: false
    }
    componentDidMount() {
        this.props.fetchParks()
    }

    onSubmit = ({ search, features, neighborhood }) => {

        let newArray = this.props.parks

        if (neighborhood !== "All") {
            newArray = newArray.filter(park => park.neighborhood === neighborhood)
        }

        if (search) {
            newArray = newArray.filter(park => park.name.includes(search.toUpperCase()))
        }

        features.forEach(feat => {
            newArray = newArray.filter(park => park.features.map(f => f.name).includes(feat))
        })

        this.setState({ displaySection: newArray, search: true })
    }

    handleNext = () => {
        if (this.state.index + 30 < 411) {
            this.setState(prev => ({
                index: prev.index + 30,
                displaySection: this.props.parks.slice(prev.index + 30, prev.index + 60)
            }))
        }
    }

    handlePrevious = () => {
        if (this.state.index - 60 >= 0) {
            this.setState(prev => ({
                index: prev.index - 30,
                displaySection: this.props.parks.slice(prev.index - 60, prev.index - 30)
            }))
        }
    }

    maxRating=()=>{
        if (this.props.parks.length){
       const ratings= this.props.parks.map(park=> park.avg_rating)
       const max= Math.max(...ratings)
       const park= this.props.parks.find(park=> park.avg_rating===max)
       return `${park.name} is the highest rated park at ${max} average stars!`
        }
    }

    maxVisits=()=>{
        if (this.props.parks.length){
            const visits= this.props.parks.map(park=> park.visit_length)
            const max= Math.max(...visits)
            const park= this.props.parks.find(park=> park.visit_length===max)
            return `${park.name} is the busiest park on this site with the most visits!`
             }
    }

    render() {
        const { displaySection, search } = this.state
        return (
            <div className="container">
                <div className="row-md-auto pb-5" >
                    <div className="alert alert-danger" role="alert">{this.props.requesting ? <h2>Loading...</h2> : null}{ this.maxVisits()}</div>
                    <div className="alert alert-success" role="alert"> {this.props.requesting ? <h2>Loading...</h2> : null}{ this.maxRating()}</div>
                </div>
                <div className="row pb-5" >
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark" style={{ "minHeight": "500px" }}>
                        <AllParksForm onSearch={this.onSubmit} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
                        <ShowMap user={this.props.user} parks={displaySection.length === 0 && !search ? this.props.parks.slice(0, 30) : displaySection} />
                    </div>
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
                <div className="col pb-5" >
                    {this.props.requesting ? <h2>Loading...</h2> : null}
                    <ParkList user={this.props.user} parks={displaySection.length === 0 && !search ? this.props.parks.slice(0, 30) : displaySection} />
                </div>
                {!search ?
                    <div className="row">
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

function mapDispatchToProps(dispatch) {
    return { fetchParks: () => dispatch(fetchParks()) }
}

function mapStateToProps(state) {
    return {
        parks: state.parks,
        requesting: state.requesting,
        user: state.user.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)