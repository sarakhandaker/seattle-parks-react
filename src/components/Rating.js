import React, { Component } from 'react'

export class Rating extends Component {
  render() {
    return (
      <>
        <div className="col-sm-3">
          <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image" alt="User" className="img-rounded" />
          <div className="review-block-name">skhandaker</div>
          <div className="review-block-date">January 29, 2020<br />1 day ago</div>
        </div>
        <div className="col-sm-9">
          <div className="review-block-rate">
            <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-warning btn-xs" aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
            <button type="button" className="btn btn-default btn-grey btn-xs" aria-label="Left Align">
              <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
            </button>
          </div>
          <div className="review-block-title">this was nice</div>
          <div className="review-block-description">this was nice. this was nice. this was nice. this was nice this was nice this was nice this was nice this was nice</div>
        </div>
      </>
    )
  }
}

export default Rating
