import React from 'react'
import EditVisitForm from '../components/EditVisitForm'

export function Rating ({visit, onEdit, edit}) {
  const {comment, username, date}= visit
  let newDate=new Date(date)
  newDate=new Date(newDate.getTime() + newDate.getTimezoneOffset() * 60000).toLocaleDateString("en-US")

  const makeStars=()=>{
    let array=[]

    for(let i=0; i<visit.rating; i++){ 
      array.push(<div key={i} style= {{"cursor":"default"}}className="btn btn-xs" aria-label="Left Align">
      <span className="glyphicon glyphicon-star" aria-hidden="true"></span></div>)
    }

    return array
  }

  const daysAgo=()=> Math.round((new Date().getTime() - new Date(visit.date).getTime())/ (1000 * 3600 * 24))

    return (
      <>
      <div className= "row pb-3 rating">
        <div className="col-sm-3 pt-3">
          <img src="http://res.freestockphotos.biz/pictures/15/15119-illustration-of-a-tree-silhouette-pv.png" alt="User" className="img-rounded" style={{"height": "60px"}}/>
          <div className="review-block-date">{newDate}<br />{ daysAgo()} day(s) ago</div>
        </div>
        <div className="col-sm-9 pt-3">
          <div className="review-block-rate">
            {makeStars()}
          </div>
          <div className="review-block-title">{username}</div>
          <div className="review-block-description">{comment}</div>
        </div>
        </div>
        {edit? <EditVisitForm onEdit={onEdit} visit={visit}/>: null}
        </>
    )
}

export default Rating