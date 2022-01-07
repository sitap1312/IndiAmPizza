import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>

      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>

      <SidebarMenu>
        <SidebarLink to='productData'>Pizzas</SidebarLink>
        <SidebarLink to='productData2'>Desserts</SidebarLink>
        <SidebarLink to='productData'>Full Menu</SidebarLink>
      </SidebarMenu>

      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>

    </SidebarContainer>
  )
};

export default SideBar;
