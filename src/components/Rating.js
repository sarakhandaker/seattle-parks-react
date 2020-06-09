import React, { Component } from 'react'
import EditVisitForm from '../components/EditVisitForm'

export class Rating extends Component {

  makeStars(){
    let array=[]
    for(let i=0; i<this.props.visit.rating; i++){
      array.push("")
    }
    return array.map((num, id)=> <div key={id} style= {{"cursor":"default"}}className="btn btn-xs" aria-label="Left Align">
    <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
  </div> )

  }

  daysAgo(){
    return Math.round((new Date().getTime() - new Date(this.props.visit.date).getTime())/ (1000 * 3600 * 24))
  }

  render() {
    const {comment, username, date}= this.props.visit
    let newDate=new Date(date)
    newDate=new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000).toLocaleDateString("en-US")
    return (
      <>
      <div className= "row pb-3 rating">
        <div className="col-sm-3 pt-3">
          <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" alt="User" className="img-rounded" />
          <div className="review-block-date">{newDate}<br />{ this.daysAgo()} days ago</div>
        </div>
        <div className="col-sm-9 pt-3">
          <div className="review-block-rate">
            {this.makeStars()}
          </div>
          <div className="review-block-title">{username}</div>
          <div className="review-block-description">{comment}</div>
        </div>
        </div>
        {this.props.edit? <EditVisitForm onEdit={this.props.onEdit} visit={this.props.visit}/>: null}
        </>
    )
  }
}

export default Rating
