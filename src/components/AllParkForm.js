import React, { Component } from 'react'

export class AllParkForm extends Component {
    state={
        search:"",
        features:[]
    }

    handleChange=(event)=>{
        this.setState({[event.target.name]: event.target.value})
    }

    handleChangefeatures=(event)=>{
        const feature=event.target.value
        if (!this.state.features.includes(feature)){
            this.setState(prev=> ({features: [...prev.features, feature]}))
        }
        else {
            this.setState(prev=> ({features: prev.features.filter(feat=> feat !== feature)}))
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault()
        this.props.onSearch(this.state)
    }

    render() {
        const {search}=this.state
        return (
            <div >
                <form className="form-horizontal" onSubmit={(e)=>this.handleSubmit(e)}>
                    <legend>Look for a Park</legend>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Search By Park Name</label>
                        <div className="col-md-4">
                            <input onChange={(e)=>this.handleChange(e)} name="search" type="search" value={search} className="form-control input-md" />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Search By Features</label>
                             {this.props.features.map(feat=> <label key={feat.id} className="checkbox-inline"><input onChange={(e)=>this.handleChangefeatures(e)} type="checkbox" name="checkboxes" value={feat.name} />{feat.name}</label> )}
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label">Search by Neighborhood</label>
                        <div className="col-md-4">
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radios" id="radios-0" value="1"/>Option one</label>
                            </div>
                            <div className="radio">
                                <label>
                                    <input type="radio" name="radios" id="radios-1" value="2" />Option two</label>
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-md-4">
                            <button type="Submit"> Search Parks</button>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default AllParkForm
