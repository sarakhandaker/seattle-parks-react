import React, { Component } from 'react'

const FEATURESALL = ["Golf", "Play Area (ADA Compliant)", "Basketball (Full)", "Bike Trail", "Play Area",
    "Paths", "Waterfront", "P-Patch Community Garden",
    "Soccer", "View", "Woods", "Historic Landmark", "Creek", "Garden",
    "Boat Launch (Hand Carry)", "Adult Fitness Equipment", "Guarded Beach", "Restrooms (ADA Compliant)",
    "Wading Pool or Water Feature", "Tennis Lights", "Picnic Sites", "Disc Golf", "Restrooms",
    "Weddings and Ceremonies", "Green Space", "Paths (ADA Compliant)",
    "Baseball/Softball", "Fishing", "Basketball (Half)", "Rental Facility", "Hiking Trails",
    "Pesticide Free", "Decorative Fountain", "Tennis Court (Outdoor)", "Horseshoe Pits",
    "Dog Off Leash Area", "Skatepark", "Football", "Marination Ma Kai",
    "Lawn Bowling", "Tennis Backboard (Outdoor)", "Scuba Diving", "Community Building",
    "Environmental Learning Center", "NO Beach Access", "Fire Pit", "Pool (Outdoor)", "Lacrosse",
    "Boat Moorage", "Picnic Sites (ADA Compliant)", "Skatespot",
    "Model Boat Pond", "Community Center", "Cricket", "Ultimate",
    "Track", "Rugby", "Boat Launch (Motorized)", "Bike Polo", "Pool (Indoor)", "T-Ball", "Pickleball Court",
    "Flag Football"]

const NEIGHBORHOOD = ["All", "University District", "Rainier Beach", "Central Business District", "South Lake Union", "West Edge",
    "Eastlake", "Admiral", "Beacon Hill", "Ballard", "Leschi", "Mount Baker", "Columbia City", "Broadview",
    "View Ridge", "Morgan Junction", "Phinney Ridge", "Cedar Park", "South Park", "Portage Bay", "Queen Anne",
    "Delridge", "Licton Springs", "Wedgwood", "Madrona", "Denny-Blaine", "Central District", "Montlake",
    "Belltown", "Seward Park", "Fremont", "Green Lake", "Madison Valley", "Madison Park", "Kenwood", "Westlake",
    "Lakeridge", "Magnolia", "Sand Point", "Maple Leaf", "Capitol Hill", "Wallingford", "Washington Park", "Haller Lake",
    "Northgate", "Greenwood"]

export class AllParkForm extends Component {
    state = {
        search: "",
        features: [],
        neighborhood: "All",
        show: false
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleChangefeatures = (event) => {
        const feature = event.target.value
        if (!this.state.features.includes(feature)) {
            this.setState(prev => ({ features: [...prev.features, feature] }))
        }
        else {
            this.setState(prev => ({ features: prev.features.filter(feat => feat !== feature) }))
        }
    }

    handleSubmit = (event) => {
        const {search, features, neighborhood}=this.state
        event.preventDefault()
        if (!search && neighborhood === "All" && features.length===0) {
        }
        else {
            this.props.onSearch(this.state)
        }
    }

    showFeature=()=>{
        this.setState({show: true})
    }

    render() {
        const { search, show } = this.state
        return (
            <div >
                <form className="form-horizontal" onSubmit={(e) => this.handleSubmit(e)}>
                    <legend>Look for a Park</legend>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Search By Park Name</label>
                        <div className="col-md-4">
                            <input onChange={(e) => this.handleChange(e)} name="search" type="search" value={search} className="form-control input-md" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Search By Features</label>
                        {show? <div className="col">
                            {FEATURESALL.sort().map((feat, index) => <label key={index} className="checkbox-inline"><input onChange={(e) => this.handleChangefeatures(e)} type="checkbox" name="checkboxes" value={feat} />{feat}</label>)}
                        </div> : <button onClick={this.showFeature} className="btn btn-light">Show Features</button>}
                    </div>
                    <div className="form-group">
                        <label className="col-md-4 control-label">Search by Neighborhood</label>
                        <div className="col-md-4 pt-2">
                            <select name="neighborhood" onChange={(e) => this.handleChange(e)}>
                                {NEIGHBORHOOD.map((neigh, index) => <option key={index} value={neigh}>{neigh}</option>)}
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-md-4">
                            <button className="btn btn-dark" type="Submit"> Search Parks</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AllParkForm