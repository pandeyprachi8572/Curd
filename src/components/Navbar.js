import React from 'react'
import { Link } from 'react-router-dom'
const  Navbar =() => {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className='container-fluid'>
<h4 className="navbar-brand" href="#">RTK</h4>
<div className="collapse navbar-collapse">
<ul className="navbar-nav mr-auto mb-2 mb-lg-2">
      <li className="nav-item ">
          <Link to="" className="dropdown-item" >Create Post </Link>        
      </li>
      <li className="nav-item">
        <Link  to="/read" className="nav-link " >All Post </Link>
      </li>
    </ul>
      <input className="form-control mr-2 w-50" type="search" placeholder="Search" aria-label="Search"/>         
  </div>
  </div>
</nav>
</div>
  )
}
export default Navbar
