import React, { Component } from 'react'
import AuthHOC from '../HOCs/AuthHOC'
import Weather from '../components/Weather'
import UserEditForm from '../components/UserEditForm'
import SavedParksList from '../components/SavedParksList'
import RatingsContainer from '../containers/RatingsContainer'
import PlannedVisits from '../components/PlannedVisits'
import { api } from '../services/api'
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export class UserHomeContainer extends Component {
    state = {
        user: {},
        editUser: false,
        error: "",
        visitFormError: ""
    }

    componentDidMount() {
        api.auth.getUserProfile()
            .then(r => this.setState({ user: r.user, weather: r.weather }))
    }

    handleEditUser() {
        this.setState(prev => ({ editUser: !prev.editUser }))
    }

    onSubmit = (data) => {
        api.auth.editUser(data, this.state.user.id)
            .then(res => {
                if (res.error) {
                    this.setState({ error: res.error })
                }
                else {
                    this.setState({ user: res.user, editUser: false })
                }
            })
    }

    onEditRating = (data, id) => {
        const { user } = this.state
        api.parks.editVisit(data, id)
            .then(res => {
                if (res.error) {
                    this.setState({ visitFormError: res.error })
                }
                else {
                    let newVisits = user.show_visits.map(visit => {
                        if (res.id === visit.id) {
                            visit = res
                            visit.username = user.username
                        }
                        return visit
                    })
                    this.setState({ user: { ...user, show_visits: newVisits } })
                }
            })
    }

    formErrors() {
        if (this.state.error) {
            const keys = Object.keys(this.state.error)
            return keys.map((key, i) => <h6 key={i} style={{ "color": "orange" }}>{key}: {this.state.error[key]} </h6>)
        }
    }

    visitFormError() {
        if (this.state.visitFormError) {
            const keys = Object.keys(this.state.visitFormError)
            return keys.map((key, i) => <h6 key={i} style={{ "color": "orange" }}>{key}: {this.state.visitFormError[key]} </h6>)
        }
    }

    onRemovePark = id => {
        this.setState(prev =>
            ({
                user: {
                    ...prev.user,
                    saved_list: [...prev.user.saved_list.filter(park => park.id !== id)]
                }
            }))
    }

    onRemoveVisit = id => {
        this.setState(prev =>
            ({
                user: {
                    ...prev.user,
                    show_visits: [...prev.user.show_visits.filter(visit => visit.id !== id)]
                }
            }))
    }

    parksPercentage = () => {
        if (this.state.user.show_visits) {
            let parks = this.state.user.show_visits.filter(v => v.completed).map(v => v.park)
            let numParks = [...new Set(parks)].length
            var per = (numParks / 4.11).toFixed(2)
            return <p className="lead mb-0">{`You have visited ${per}% of all Seattle Parks!`}</p>
        }
    }

    render() {
        const { username, show_visits, saved_list, address, visible } = this.state.user
        return (
            <div className="container">
                <div className="row pb-3">
                    <div className="col text-left">
                        <h1 className="display-4">Welcome {username}</h1>
                        {this.parksPercentage()}
                        <h3 className="mb-4"> <i className="fa fa-map-marker mr-2"></i>{address}</h3>
                        <button onClick={() => this.handleEditUser()} className="btn btn-dark mr-3">{this.state.editUser ? "Close Edit User Form" : "Edit profile"}</button>
                        {this.state.editUser && username ? <UserEditForm onSubmit={this.onSubmit} user={this.state.user} /> : null}
                        {this.state.editUser ? this.formErrors() : null}
                    </div>
                    <div className="col-6">
                    <Calendar
                        localizer={momentLocalizer(moment)}
                        defaultDate={new Date()}
                        defaultView="month"
                        events={show_visits ? show_visits.map(v => ({ allDay: true, start: moment(v.date).add(1, "days").toDate(), end: moment(v.date).add(1, "days").toDate(), title: v.park })) : []}
                        style={{ height: "350px" }}
                    />
                    </div>
                    <div className="col">
                    <Weather weather={this.state.weather} />
                    </div>
                </div>

                <div className="row pb-3">
                    <div className="col">
                        {this.visitFormError()}
                        {show_visits ? <RatingsContainer onEdit={this.onEditRating} onRemove={this.onRemoveVisit} visits={show_visits.filter(v => v.completed)} /> : null}
                    </div>
                    <div className="col">
                        <h2>Saved Parks</h2>
                        <hr />
                        <SavedParksList onRemove={this.onRemovePark} parks={saved_list} />
                        <h2 style={{ "paddingTop": "20px" }}>Planned Park Visits</h2>
                        <hr />
                        {show_visits ? <PlannedVisits visible={visible} closeModal={this.closeModal} onRemove={this.onRemoveVisit} visits={show_visits.filter(v => !v.completed)} /> : null}
                    </div>
                </div>
            </div >
        )
    }
}

export default AuthHOC(UserHomeContainer)