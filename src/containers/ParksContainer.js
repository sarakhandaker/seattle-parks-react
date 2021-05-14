import React, { Component } from 'react'
import ParkList from '../components/ParkList'
import AllParksForm from '../components/AllParkForm'
import ShowMap from '../components/ShowMap'
import { connect } from 'react-redux'
import { fetchParks, searchParks } from '../actions/parks'

export class ParksContainer extends Component {
    state = {
        page: 1,
        search: false
    }
    componentDidMount() {
        this.props.fetchParks(1)
    }

    onSubmit = ({ search, features, neighborhood }) => {
        const searchParams = {
            name: search,
            neigh: neighborhood,
            feat: features
        }
        this.props.searchParks(searchParams)
    }

    handleNext = () => {
        if (this.state.page < 14) {
            this.props.fetchParks(this.state.page + 1)
            this.setState(prev => ({ page: prev.page + 1 }))
        }
    }

    handlePrevious = () => {
        if (this.state.page > 1) {
            this.props.fetchParks(this.state.page - 1)
            this.setState(prev => ({ page: prev.page - 1 }))
        }
    }

    render() {
        const {search } = this.state
        return (
            <div className="container">
                <div className="row pb-5" >
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark" style={{ "minHeight": "500px" }}>
                        <AllParksForm onSearch={this.onSubmit} />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
                        <ShowMap user={this.props.user} parks={this.props.parks} />
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
                    {this.props.requesting ? <h2>Loading...</h2> : <ParkList user={this.props.user} parks={this.props.parks} />}
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
    return {
        fetchParks: (page) => dispatch(fetchParks(page)),
        searchParks: (searchParams) => dispatch(searchParks(searchParams))
    }
}

function mapStateToProps(state) {
    return {
        parks: state.parks,
        requesting: state.requesting,
        user: state.user.user
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParksContainer)