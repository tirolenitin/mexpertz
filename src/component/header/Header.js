import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css";
const Header = () => {
  return (
    <>
    <div className='container self'>
      <div className=' self-logo' ><h5>Restaurant Landing Page</h5></div>
      
      <div className='navbar navbar-default self-navbar'>
        <a><Link>Landing</Link></a>
        <a><Link>Home</Link></a>
        <a><Link>Gallery</Link></a>
        <a><Link>Shop</Link></a>
        <a><Link>Blog</Link></a>
        <a><Link>About</Link></a>
        <a><Link>Team</Link></a>
        <a><Link>Contact</Link></a>
        <a><Link><i className='bi bi-cart'></i></Link></a>
      </div>
      
    </div>
    </>
  )
}

export default Header
