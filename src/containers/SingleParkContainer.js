import React, { Component } from 'react'
import ShowMap from '../components/ShowMap'
import Rating from '../components/Rating'
import VisitForm from '../components/VisitForm'
import RatingAvg from '../components/RatingAvg'

export class SingleParkContainer extends Component {

  state = {
    park: {},
    form: false,
    saved: false,
    error: ""
  }

  componentDidMount() {
    fetch("https://seattle-parks-api.herokuapp.com/api/v1/parks/" + this.props.match.params.id, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    })
      .then(r => r.json())
      .then(r => this.setState({ park: r.park, saved: r.saved }))
  }

  handleClick = () => {
    this.setState(prev => ({ form: !prev.form }))
  }

  onSubmit = (data) => {
    fetch('https://seattle-parks-api.herokuapp.com/api/v1/visits', {
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
          this.setState({ form: false, show_visits: [...this.state.park.show_visits, { comment: res.comment, date: res.date, rating: res.rating, username: this.props.user.username }] }
          )
        }
      })

  }

  formErrors() {
    if (this.state.error) {
      const keys = Object.keys(this.state.error)
      return keys.map((key, i) => <h6 key={i} style={{ "color": "orange" }}>{key}: {this.state.error[key]} </h6>)
    }
  }

  handleSave = () => {
    if (!this.state.saved) {
      fetch('https://seattle-parks-api.herokuapp.com/api/v1/saved_park', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify({ saved_park: { park_id: this.state.park.id, user_id: this.props.user.id } })
      })
        .then(r => r.json())
        .then(res => { this.setState({ saved: true }) })
    }
    else {
      //   fetch(`http://localhost:3000/api/v1/saved_park/${this.state.park.id}`, {
      //     method: `DELETE`,
      //     headers:
      //     {
      //         "Content-Type": "application/json",
      //         Accept: "application/json",
      //         Authorization: `Bearer ${localStorage.getItem("token")}`
      //     }
      //         })
    }

  }
  render() {
    if (!this.state.park.name) { return <div className="container"><h1> NO PARK FOUND </h1></div> }
    const { name, show_features, seedAddress, show_visits, neigh } = this.state.park
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
                    <p>{neigh ? neigh : "Seattle"}</p>
                    <p></p>
                  </div>
                  <div className="clear"></div>
                </div>

               { show_features.length ? <div className="tg">
                  <div className="tgcon">
                    <span>List of Park Features</span>
                    <table class="table">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Feature</th>
                          <th scope="col">Hours</th>
                        </tr>
                      </thead>
                      <tbody>
                        {show_features.map((feat, i) =>
                          <tr>
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
          <RatingAvg ratings={show_visits.map(v => v.rating)} />
        </div>
        <hr />
        <div className="row">

          <div className="col pb-5">
            <h2>Recent Reviews</h2>
            {show_visits ? show_visits.map(visit => <Rating visit={visit} />) : null}
          </div>

          <div className="col">
            {this.props.user ? <button onClick={this.handleClick}>{this.state.form ? "Click to Close Form" : "Click to Submit a Review"}</button> : <h3>Login to Leave a Review!</h3>}
            {this.state.form ? <VisitForm park={this.state.park} user={this.props.user} onSubmit={this.onSubmit} /> : null}
            {this.formErrors()}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleParkContainer
