import React from 'react'
import './Fifth.css'

function Fifth() {
  return (
    <div>
      <div className="fifth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">

              <div className="tvshow-logo-wraper">
                <div className="title-wraper white">AirPods pro2</div>
                <div className="description-wraper white">
                  <h5>Take a Hearing Test. Right at home.</h5>
                </div>
                <div className="price-wrapper white">
                  Available
                </div>
                <div className="links-wrapper">
                  <ul>
                    <li><a href="">Learn more</a></li>
                    <li><a href="">pre order</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wraper">Apple intelligence</div>
              <div className="description-wraper">
                <h5>Ai for the rest of us.</h5>
              </div>
              <div className="links-wrapper">
                <ul>
                  <li><a href="">Learn more</a></li>
                  <li><a href="">watch the film</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Fifth
