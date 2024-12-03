import React from 'react'
import './Navbar.css'
import $ from "jquery";
import logo from './images/icons/logo-sm.png'
import search from './images/icons/search-icon-sm.png'
import cart from './images/icons/cart-sm.png'

  
$(document).ready(function() {
  $('.navbar-toggler').on('click', function() {
      $('.navbar-collapse').toggleClass('sidebar'); // Toggle 'sidebar' class to show or hide it
  });
});

function Navbar() {

  return (
    <div>
      <nav className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="mr-auto navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="bb navbar-brand ml-auto" href="/">
            <img src={logo}/>
          </a>

          <div className="sidebar navbar-collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/Store">Store</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/Mac">Mac</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/Iphone">iphone</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Ipad">ipad</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Watch">watch</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Vision">Vision</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Tv">Tv & Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Entertainment">Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Accessories">Accessories</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="Support">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="#"
                  ><img src={search}/></a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/Cart"
                  ><img src={cart}/></a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </nav>
    </div>
  )
}

export default Navbar
