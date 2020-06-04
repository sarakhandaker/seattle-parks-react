import React, { Component } from 'react'
import ShowMap from '../components/ShowMap'
import Rating from '../components/Rating'

export class SingleParkContainer extends Component {
    render() {
      console.log("hi")
        return (
            <div className="container">
              <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-6">
             <div class="con1" style={{"height": "400px"}}>
                <span>Park</span>
                <h2>Park Name</h2>
                <div class="tags">
                  <div class="tg">
                     <div class="tgcon">
                       <span>List of Park Features</span>
                       <p>Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standarddummy text</p>
                       <p></p>
                     </div>
                     <div class="clear"></div>
                  </div>
                  
                  <div class="tg">
                     <div class="tgcon">
                       <span>Other Park Stuff</span>
                       <p>Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standarddummy text</p>
                       <p></p>
                     </div>
                     <div class="clear"></div>
                  </div>
                  
                  <div class="tg">
                     <div class="tgcon">
                       <span>More Parks Stuff</span>
                       <p>Lorem Ipsum is simply dummy text the printing and typeseing industry Lorem Ipsum has been standarddummy text</p>
                       <p></p>
                     </div>
                     <div class="clear"></div>
                  </div>
                </div>

             </div>
          </div>   
          <div class="col-lg-6 col-md-6 col-sm-6 singlepark">
               <ShowMap parks={[]}/>
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
                        <div className="pull-left" style={{"width":"35px","lineHeight":1 }}>
                            <div style={{"height":"9px","margin": "5px 0" }}>5 <span className="glyphicon glyphicon-star"></span></div>
                        </div>
                        <div className="pull-left" style={{"width":"180px"}}>
                            <div className="progress" style={{"height":"9px","margin": "8px 0" }}>
                              <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="5" aria-valuemin="0" aria-valuemax="5" style={{"width":"1000%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                              </div>
                            </div>
                        </div>
                        <div className="pull-right" style={{"marginLeft":"10px"}}>1</div>
                    </div>
                    <div className="pull-left">
                        <div className="pull-left" style={{"width":"35px","lineHeight":1 }}>
                            <div style={{"height":"9px","margin": "5px 0" }}>4 <span className="glyphicon glyphicon-star"></span></div>
                        </div>
                        <div className="pull-left" style={{"width":"180px"}}>
                            <div className="progress" style={{"height":"9px","margin": "8px 0" }}>
                              <div className="progress-bar progress-bar-primary" role="progressbar" aria-valuenow="4" aria-valuemin="0" aria-valuemax="5" style={{"width":"1000%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                              </div>
                            </div>
                        </div>
                        <div className="pull-right" style={{"marginLeft":"10px"}}>1</div>
                    </div>
                    <div className="pull-left">
                        <div className="pull-left" style={{"width":"35px","lineHeight":1 }}>
                            <div style={{"height":"9px","margin": "5px 0" }}>3 <span className="glyphicon glyphicon-star"></span></div>
                        </div>
                        <div className="pull-left" style={{"width":"180px"}}>
                            <div className="progress" style={{"height":"9px","margin": "8px 0" }}>
                              <div className="progress-bar progress-bar-info" role="progressbar" aria-valuenow="3" aria-valuemin="0" aria-valuemax="5" style={{"width":"60%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                              </div>
                            </div>
                        </div>
                        <div className="pull-right" style={{"marginLeft":"10px"}}>0</div>
                    </div>
                    <div className="pull-left">
                        <div className="pull-left" style={{"width":"35px","lineHeight":1 }}>
                            <div style={{"height":"9px","margin": "5px 0" }}>2 <span className="glyphicon glyphicon-star"></span></div>
                        </div>
                        <div className="pull-left" style={{"width":"180px"}}>
                            <div className="progress" style={{"height":"9px","margin": "8px 0" }}>
                              <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="2" aria-valuemin="0" aria-valuemax="5" style={{"width":"40%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                              </div>
                            </div>
                        </div>
                        <div className="pull-right" style={{"marginLeft":"10px"}}>0</div>
                    </div>
                    <div className="pull-left">
                        <div className="pull-left" style={{"width":"35px","lineHeight":1 }}>
                            <div style={{"height":"9px","margin": "5px 0" }}>1 <span className="glyphicon glyphicon-star"></span></div>
                        </div>
                        <div className="pull-left" style={{"width":"180px"}}>
                            <div className="progress" style={{"height":"9px","margin": "8px 0" }}>
                              <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="1" aria-valuemin="0" aria-valuemax="5" style={{"width":"20%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                              </div>
                            </div>
                        </div>
                        <div className="pull-right" style={{"marginLeft":"10px"}}>0</div>
                    </div>
                </div>			
            </div>		
            <h2>Recent Reviews</h2>
            <Rating/>	
        </div>
        )
    }
}

export default SingleParkContainer
