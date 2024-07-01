import React from 'react'
import Logo from "../assets/logo.png"
import { Link, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Category from '../Pages/Category'
import Details from '../Pages/Details'
import Cart from '../Pages/Cart'
function Header() {
  return (
    <>
      <header className='py-3'>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-4">
                    <Link to="/">
                    <img src={Logo} alt="" />
                    </Link>
                </div>
                <div className="col-lg-8 text-end">
               <Link to="/cart" className="btn btn-primary position-relative">
  Cart
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    0
    <span className="visually-hidden">unread messages</span>
  </span>
</Link>

                </div>
            </div>
        </div>
      </header>

      <nav className="navbar bg-dark navbar-expand-lg" data-bs-theme="dark">
  <div className="container">
    
    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">
        <ul className="navbar-nav justify-content-start flex-grow-1 pe-3 gap-3">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact Us</Link>
          </li>
        </ul>
         
      </div>
    </div>
  </div>
</nav>

<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/cat/:cid/' element={<Category/>}/>
    <Route path='/details/:id/' element={<Details/>}/>
    <Route path='/cart' element={<Cart/>}/>
</Routes>
    </ >
  )
}

export default Header
