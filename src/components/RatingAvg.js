import React, { Component } from 'react'

export class RatingAvg extends Component {
  makeStars(num){
    let array=[]
    for (let i=0; i<num; i++){
      array.push(<button key={i} type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
      <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
    </button>)
    }
    for (let i=0; i<5-num; i++){
      array.push(<div key={i} style= {{"cursor":"default"}}className="btn btn-xs" aria-label="Left Align">
      <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
    </div>)
    }
    return array
  }

  render() {
    const length= this.props.ratings.length
    let average= Math.round(this.props.ratings.reduce((sum,num)=>sum+num,0)/length)

    if (!length){
      average=0
    }
    else {
      var counts = {}
      for (var i = 0; i < length; i++) {
        let num = this.props.ratings[i]
        counts[num] = counts[num] ? counts[num] + 1 : 1;
      }

    }
    return (
      <>
      <div className="col-sm-3">
        <div className="rating-block">
          <h4>Average user rating</h4>
          <h2 className="bold padding-bottom-7">{average} <small>/ 5</small></h2>
             {this.makeStars(average)}
        </div>
      </div>

      <div className="col-sm-3">
        <h4>Rating breakdown</h4>
        <div className="pull-left">
          <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
            <div style={{ "height": "9px", "margin": "5px 0" }}>5 <span className="glyphicon glyphicon-star"></span></div>
          </div>
          <div className="pull-left" style={{ "width": "180px" }}>
            <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style= {{ "width": `${ (counts['5']/length)*100}%` }}>
              </div>
            </div>
          </div>
    <div className="pull-right" style={{ "marginLeft": "10px" }}>{counts? counts["5"]: "0"}</div>
        </div>
        <div className="pull-left">
          <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
            <div style={{ "height": "9px", "margin": "5px 0" }}>4 <span className="glyphicon glyphicon-star"></span></div>
          </div>
          <div className="pull-left" style={{ "width": "180px" }}>
            <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
              <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style= {{ "width": `${ (counts['4']/length)*100}%` }}>
              </div>
            </div>
          </div>
          <div className="pull-right" style={{ "marginLeft": "10px" }}>{counts? counts["4"]: "0"}</div>
        </div>
        <div className="pull-left">
          <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
            <div style={{ "height": "9px", "margin": "5px 0" }}>3 <span className="glyphicon glyphicon-star"></span></div>
          </div>
          <div className="pull-left" style={{ "width": "180px" }}>
            <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style= {{ "width": `${ (counts['3']/length)*100}%` }}>
              </div>
            </div>
          </div>
          <div className="pull-right" style={{ "marginLeft": "10px" }}>{counts? counts["3"]: "0"}</div>
        </div>
        <div className="pull-left">
          <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
            <div style={{ "height": "9px", "margin": "5px 0" }}>2 <span className="glyphicon glyphicon-star"></span></div>
          </div>
          <div className="pull-left" style={{ "width": "180px" }}>
            <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style= {{ "width": `${ (counts['2']/length)*100}%` }}>
              </div>
            </div>
          </div>
          <div className="pull-right" style={{ "marginLeft": "10px" }}>{counts? counts["2"]: "0"}</div>
        </div>
        <div className="pull-left">
          <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
            <div style={{ "height": "9px", "margin": "5px 0" }}>1 <span className="glyphicon glyphicon-star"></span></div>
          </div>
          <div className="pull-left" style={{ "width": "180px" }}>
            <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style= {{ "width": `${ (counts['1']/length)*100}%` }}>
              </div>
            </div>
          </div>
          <div className="pull-right" style={{ "marginLeft": "10px" }}>{counts? counts["1"]: "0"}</div>
        </div>
      </div>
      </>
        )
  }
}

export default RatingAvg
