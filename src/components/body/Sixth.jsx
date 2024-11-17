import React from 'react'
import './Sixth.css'

function Sixth() {
  return (
      <div className="sixth-heghlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="title-wraper">Trade</div>
              <div className="description-wraper">
                <h5>Trade in. Upgrade. Save. It’s a win‑win‑win.</h5>
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href=""><p>Get your estimate</p></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wraper">Apple Card</div>
              <div className="description-wraper">The simplicity of Apple.
                In a credit card.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li><a href="">Learn more</a></li>
                  <li><a href="">Apply now</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sixth
