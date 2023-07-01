import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <>
       <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/rajapp">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>
      {/* here is the color pattel code */}
      <div className='mx-2'>
      <input className="mx-1" type='button' onClick={props.greenOn} style={{backgroundColor:'#1a5c43',borderRadius:"25px",width:"27px", border:"1px"}}></input>
      <input className="mx-1" type='button' onClick={props.redOn} style={{backgroundColor:'#5c1a33',borderRadius:"25px",width:"27px", border:"1px"}}></input>
      <input className="mx-1" type='button' onClick={props.blueOn} style={{backgroundColor:'#07096e',borderRadius:"25px",width:"27px", border:"1px"}}></input>
      </div>
        <div className="form-check form-switch t">
        
  <input className="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label className={`form-check-label text-${props.mode==='light' ? 'dark' : 'light'}`}  HtmlFor="flexSwitchCheckDefault" >{props.change} Dark Mode</label>
</div>
     
    </div>
  </div>
</nav>
    </>
  )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string.isRequired
};

Navbar.defaultProps={
    title:'set title here',
    about: 'About'
};
//if we not give any title