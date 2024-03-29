import React from 'react'
import PropTypes from 'prop-types'
// import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#">{props.title}</a>
    {/* anchor tag is replaced by "Link" and href is replaced by "to" in below code when using React Router */}

    {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
          
          {/* when using React Router uncomment above code and comment out below code */}

          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          {/* <Link className="nav-link" to="/about">{props.aboutText}</Link> */}

          {/* when using React Router uncomment above code and comment out below code */}

        <a className="nav-link" href="/about">{props.aboutText}</a>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'grey':'white'}`}>
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="Darkblue" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Mode
        </label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'red':'white'}`}>
        <input className="form-check-input" onClick={props.toggleMode2} type="checkbox" role="switch" id="Darkred" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Red Mode
        </label>
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'green':'white'}`}>
        <input className="form-check-input" onClick={props.toggleMode3} type="checkbox" role="switch" id="Darkgreen" />
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">
          Enable Dark Green Mode
        </label>
      </div>
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    aboutText: PropTypes.string
}

Navbar.defaultProps = {
    title: 'title is here',
    aboutText: 'about text'
};