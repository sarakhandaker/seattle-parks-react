import React, { Component } from 'react'
import ShowMap from '../components/ShowMap'
import Rating from '../components/Rating'
import VisitForm from '../components/VisitForm'

export class SingleParkContainer extends Component {

  state = {
    park: {},
    form: false
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/parks/" + this.props.match.params.id)
      .then(r => r.json())
      .then(r => this.setState({ park: r }))
  }

  handleClick = () => {
    this.setState(prev => ({ form: !prev.form }))
  }
  render() {
    if (!this.state.park.name) { return <div className="container"><h1> NO PARK FOUND </h1></div> }
    const { name, park_features, seedAddress } = this.state.park
    return (
      <div className="container">
        <div class="row pb-5">
          <div class="col-lg-6 col-md-6 col-sm-6">
            <div class="con1" style={{ "height": "400px" }}>
              <span>Park:</span>
              <h2>{name}</h2>
              <span>{seedAddress}</span>
              <div class="tags pt-3">
                <div class="tg">
                  <div class="tgcon">
                    <span>Neighborhood</span>
                    <p>Lorem Ipsum has been standarddummy text</p>
                    <p></p>
                  </div>
                  <div class="clear"></div>
                </div>

                <div class="tg">
                  <div class="tgcon">
                    <span>List of Park Features</span>
                    {park_features.map(feat => <p>{feat.feature.name}-{feat.hours}</p>)}
                    <p></p>
                  </div>
                  <div class="clear"></div>
                </div>

                <div class="tg">
                  <div class="tgcon">
                    <span>Size</span>
                    <p>Lorem Ipsum has been standarddummy text</p>
                    <p></p>
                  </div>
                  <div class="clear"></div>
                </div>
              </div>

            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-6 singlepark">
            <ShowMap parks={[this.state.park]} />
          </div>
        </div>

        <div className="row">

          <div className="col-sm-3">
            <div className="rating-block">
              <h4>Average user rating</h4>
              <h2 className="bold padding-bottom-7">4.3 <small>/ 5</small></h2>
              <button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-warning btn-sm" aria-label="Left Align">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
              <button type="button" className="btn btn-default btn-grey btn-sm" aria-label="Left Align">
                <span className="glyphicon glyphicon-star" aria-hidden="true"></span>
              </button>
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
                  <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{ "width": "1000%" }}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ "marginLeft": "10px" }}>1</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
                <div style={{ "height": "9px", "margin": "5px 0" }}>4 <span className="glyphicon glyphicon-star"></span></div>
              </div>
              <div className="pull-left" style={{ "width": "180px" }}>
                <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
                  <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{ "width": "1000%" }}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ "marginLeft": "10px" }}>1</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
                <div style={{ "height": "9px", "margin": "5px 0" }}>3 <span className="glyphicon glyphicon-star"></span></div>
              </div>
              <div className="pull-left" style={{ "width": "180px" }}>
                <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
                  <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{ "width": "60%" }}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ "marginLeft": "10px" }}>0</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
                <div style={{ "height": "9px", "margin": "5px 0" }}>2 <span className="glyphicon glyphicon-star"></span></div>
              </div>
              <div className="pull-left" style={{ "width": "180px" }}>
                <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
                  <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{ "width": "40%" }}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ "marginLeft": "10px" }}>0</div>
            </div>
            <div className="pull-left">
              <div className="pull-left" style={{ "width": "35px", "lineHeight": 1 }}>
                <div style={{ "height": "9px", "margin": "5px 0" }}>1 <span className="glyphicon glyphicon-star"></span></div>
              </div>
              <div className="pull-left" style={{ "width": "180px" }}>
                <div className="progress" style={{ "height": "9px", "margin": "8px 0" }}>
                  <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{ "width": "20%" }}>
                    <span className="sr-only">80% Complete (danger)</span>
                  </div>
                </div>
              </div>
              <div className="pull-right" style={{ "marginLeft": "10px" }}>0</div>
            </div>
          </div>

          <div class="col-lg-4">
            <div class="card-body p-4 text-right">
              <p class="custom-control custom-switch lead m-0">
                <input class="custom-control-input custom-control-input-warning" id="customSwitch6" type="checkbox" />
                <label class="custom-control-label" for="customSwitch6">Add Park to Saved List</label>
              </p>
            </div>
          </div>




        </div>
        <hr/>
        <div className="row">
          <div class="col">
            <h2>Recent Reviews</h2>
          <Rating />
          </div>
          <div class="col">
            {this.state.form ? <VisitForm /> : <button onClick={this.handleClick}>Click to Submit a Review</button>}
          </div>
        </div>
      </div>
    )
  }
}

export default SingleParkContainer
