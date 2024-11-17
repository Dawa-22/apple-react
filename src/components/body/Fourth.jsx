import React from 'react'
import "./Fourth.css"

function Fourth() {
  return (
      <div className="fourth-heghlight-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="left-side-wrapper col-sm-12 col-md-6">
          <div className="left-side-container">
            <div className="title-wraper">Mac mini</div>
            <div className="description-wraper">
              <h4>Size down.Power up</h4>
            </div>
            <div className="price-wrapper">
             <p>Available starting 11.8</p>
            </div>

            <div className="links-wrapper">
              <ul>
                <li><a href="">Learn more</a></li>
                <li><a href="">pre order</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="right-side-wrapper col-sm-12 col-md-6">
          <div className="right-side-container">
            <div className="title-wraper">iMac</div>
            <div className="description-wraper">
              <h5>Brilllliant.</h5>
            </div>
            <div className="price-wrapper">
              <p>Available starting 11.8</p>
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
    </div>
    </div>
  )
}

export default Fourth
