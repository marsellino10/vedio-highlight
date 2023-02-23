import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assests/logo3.png';

import './header.css';

const Header = () => {
  return (
    <div className='vedio-highlight-header'>
      <div className="logo">
        <Link to='/'><img src={logo} alt="" /></Link>
      </div>

      <div className="signin-container">
        <p className='login'><Link to='/login'>login</Link></p>
        <p className='sign-up'><Link to='/signup'>Sign up</Link></p>
      </div>
    </div>
  )
}

export default Header;
