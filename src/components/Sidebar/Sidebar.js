import React from "react";
import { SidebarContainer,Icon,CloseIcon,SidebarLink,SidebarMenu,SidebarRoute,SidebarWrapper, SideBtnWrap  } from "./SidebarElements";
import {AiOutlineMail} from 'react-icons/ai';

const Sidebar = ({isOpen, toggle}) => {
    return(
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='nosotras' onClick={toggle}> Nosotras </SidebarLink>
                    <SidebarLink to='colaboradoras' onClick={toggle}> Colaboradoras </SidebarLink>
                    <SidebarLink to='contacto' onClick={toggle}> <AiOutlineMail />  </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/' onClick={toggle}>Home</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;