import React from 'react'
import { NavbarElements, NavLink, NavIcon, Bars } from './NavbarElements';

function Navbar () {
  return (
    <>
      <NavbarElements>
        <NavLink to='/'>IndiAmPizza</NavLink>
        <NavIcon>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </NavbarElements>
    </>
  );
};

export default Navbar;
