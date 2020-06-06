import React, { Component } from 'react'
import ShowMap from '../components/ShowMap'
import Rating from '../components/Rating'
import VisitForm from '../components/VisitForm'
import RatingAvg from '../components/RatingAvg'

export class SingleParkContainer extends Component {

  state = {
    park: {},
    form: false,
    error: ""
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/parks/" + this.props.match.params.id)
      .then(r => r.json())
      .then(r => this.setState({ park: r.park }))
  }

  handleClick = () => {
    this.setState(prev => ({ form: !prev.form }))
  }

  onSubmit=(data)=>{
    fetch('http://localhost:3000/api/v1/visits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(data)
        })
            .then(r => r.json())
            .then(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                }
                else {
                  this.setState({form: false, show_visits: [...this.state.park.show_visits, {comment:res.comment, date:res.date, rating:res.rating, username: this.props.user.username}]}
                    )
                }
            })

  }

  formErrors(){
    if (this.state.error){
      const keys=Object.keys(this.state.error)
      return keys.map( (key,i)=> <h6 key={i} style={{"color":"orange"}}>{key}: {this.state.error[key]} </h6>)
   }
}

  render() {
    if (!this.state.park.name) { return <div className="container"><h1> NO PARK FOUND </h1></div> }
    const { name, show_features, seedAddress, show_visits } = this.state.park
    return (
      <div className="container">
        <div className="row pb-5">
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="con1" style={{ "height": "400px" }}>
              <span>Park:</span>
              <h2>{name}</h2>
              <span>{seedAddress}</span>
              <div className="tags pt-3">
                <div className="tg">
                  <div className="tgcon">
                    <span>Neighborhood</span>
                    <p>Lorem Ipsum has been standarddummy text</p>
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tg">
                  <div className="tgcon">
                    <span>List of Park Features</span>
                    {show_features.map(feat => <p>{feat.feature}-{feat.hours}</p>)}
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div>

                <div className="tg">
                  <div className="tgcon">
                    <span>Size</span>
                    <p>Lorem Ipsum has been standarddummy text</p>
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
            <ShowMap parks={[this.state.park]} />
          </div>
        </div>

        <div className="row">
          <RatingAvg ratings={show_visits.map(v => v.rating)}/>
          <div className="col-lg-4">
            <div className="card-body p-4 text-right">
              <p className="custom-control custom-switch lead m-0">
                <input className="custom-control-input custom-control-input-warning" id="customSwitch6" type="checkbox" />
                <label className="custom-control-label" htmlFor="customSwitch6">Add Park to Saved List</label>
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">

          <div className="col pb-5">
            <h2>Recent Reviews</h2>
           {show_visits.map(visit=> <Rating visit={visit}/>) }
          </div>

          <div className="col">
            {this.props.user ? <button onClick={this.handleClick}>{this.state.form ? "Click to Close Form" : "Click to Submit a Review"}</button> : <h3>Login to Leave a Review!</h3>}
            {this.state.form ? <VisitForm park={this.state.park} user={this.props.user} onSubmit={this.onSubmit}/> : null}
            {this.formErrors()}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleParkContainer
