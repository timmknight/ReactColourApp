import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <header>
      <div className="icon"></div>
      <h4 id="site-title">Palette inspiration</h4>
      <Link to='/' className='link'>Home</Link>
      <Link to='/new' className='link'>New</Link>
      <Link to='/about' className='link'>About</Link>
    </header>
  )
}

export default Header;
