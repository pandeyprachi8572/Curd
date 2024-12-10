import React from 'react'
const  Navbar =() => {
return (
<div>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className='container-fluid'>
<a className="navbar-brand" href="#">RTK</a>
<div className="collapse navbar-collapse">
<ul className="navbar-nav mr-auto mb-2 mb-lg-2">
      <li className="nav-item ">
          <a className="dropdown-item" href="#">Create Post </a>
        
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">All Post </a>
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
