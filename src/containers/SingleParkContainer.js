import React, { Component } from 'react'
import ShowMap from '../components/ShowMap'
import RatingsContainer from '../containers/RatingsContainer'
import VisitForm from '../components/VisitForm'
import PlanVisitForm from '../components/PlanVisitForm'
import RatingAvg from '../components/RatingAvg'
import { api } from '../services/api'

export class SingleParkContainer extends Component {

  state = {
    park: {},
    form: false,
    planForm: false,
    saved: false,
    error: ""
  }

  componentDidMount() {
    api.parks.getSinglePark(this.props.match.params.id)
      .then(r => this.setState({ park: r.park, saved: r.saved }))
  }

  handleClick = () => {
    this.setState(prev => ({ form: !prev.form, error: "" }))
  }

  handleClickPlan = () => {
    this.setState(prev => ({ planForm: !prev.planForm, error: "" }))
  }

  onSubmit = (data, plan) => {
    console.log(plan, data)
    if (!plan && (new Date() - new Date(data.visit.date)) < 0) {
      this.setState({ error: { date: "cannot be in the future" } })
      return
    }
    else if (plan && (new Date() - new Date(data.visit.date)) > 0){
      this.setState({ error: { date: "cannot be in the past" } })
      return
    }
    else {
    api.parks.postVisit(data)
      .then(res => {
        if (res.error) {
          this.setState({ error: res.error })
        }
        else {
          this.setState(
            {
              form: false,
              park: { ...this.state.park, show_visits: [...this.state.park.show_visits, { comment: res.comment, date: res.date, rating: res.rating, username: this.props.user.username }] },
              error: ""
            }
          )
        }
      })
    }
  }

  formErrors() {
    if (this.state.error) {
      const keys = Object.keys(this.state.error)
      return keys.map((key, i) => <h6 key={i} style={{ "color": "orange" }}>{key}: {this.state.error[key]} </h6>)
    }
  }

  handleSave = () => {
    const data = { saved_park: { park_id: this.state.park.id, user_id: this.props.user.id } }
    if (!this.state.saved) {
      api.parks.postSavedPark(data)
        .then(r => r.json())
        .then(res => { this.setState({ saved: true }) })
    }
  }

  render() {

    if (!this.state.park.name) { return <div className="container"><h1> NO PARK FOUND </h1></div> }
    const { name, show_features, seedAddress, show_visits, neigh } = this.state.park
    let ratings=show_visits.filter(v => v.completed)
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
                    <span>Neighborhood: <p>{neigh ? neigh : "Seattle"}</p></span>
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div>

                {show_features.length ? <div className="tg">
                  <div className="tgcon">
                    <span>List of Park Features</span>
                    <table className="table features">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Feature</th>
                          <th scope="col">Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {show_features.map((feat, i) =>
                          <tr key={i}>
                            <th scope="row">{i + 1}</th>
                            <td>{feat.feature}</td>
                            <td>{feat.hours}</td>
                          </tr>
                        )}
                      </tbody>
                    </table>
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div> : null}
              </div>

            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 singlepark">
            <ShowMap user={this.props.user} single={true} parks={[this.state.park]} />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">

            {this.state.saved ? <h3>This Park Is Saved to Your List!</h3> : null}
            {!this.state.saved && this.props.user ?
              <button onClick={() => this.handleSave()} className="btn btn-link">
                <div className="row">
                  <div className="col text-right">
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                  </div>
                  <div className="col">
                    <h3>Save This Park to Your List!</h3>
                  </div>
                </div>
              </button>
              : null}
            {!this.props.user ? <h3>Login to Save this Park to Your List!</h3> : null}
          </div>
          <RatingAvg ratings={ratings.map(v => v.rating)} />
        </div>
        <hr />
        <div className="row">

          <div className="col pb-5">
            {show_visits ? <RatingsContainer parkPage={true} visits={ratings} /> : null}
          </div>

          <div className="col">
            {this.props.user ?
              <div className="row p-2">
                <div className="col">
                </div>
                <button className="btn btn-dark" onClick={this.handleClick}>{this.state.form ? "Click to Close Review Form" : "Click to Submit a Review"}</button> <br />
                <div className="col">
                  <button className="btn btn-dark" onClick={this.handleClickPlan}>{this.state.planForm ? "Click to Close Plan Form" : "Click to Plan a Visit"}</button>
                </div>
              </div>
              : <h3>Login to Leave a Review and Plan a Visit!</h3>}
            {this.state.form ? <VisitForm park={this.state.park} user={this.props.user} onSubmit={this.onSubmit} /> : null}
            {this.state.planForm ? <PlanVisitForm park={this.state.park} user={this.props.user} onSubmit={this.onSubmit}/> : null}
            {this.formErrors()}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleParkContainer