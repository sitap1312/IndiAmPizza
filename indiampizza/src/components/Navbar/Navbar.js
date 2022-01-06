import React from 'react'
import { NavbarElements, NavLink, NavIcon, Bars } from './NavbarElements';

function Navbar ({ toggle }) {
  return (
    <>
      <NavbarElements>
        <NavLink to='/'>IndiAmPizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </NavbarElements>
    </>
  );
};

export default Navbar;
