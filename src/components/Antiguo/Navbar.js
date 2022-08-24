import React from 'react';
import { Toolbar, Typography, AppBar,Tabs, Tab, IconButton, Button } from '@mui/material';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

import './LanguajeButton.css';
import LanguajeButton from './LanguajeButton';


const Navbar = () => {
  return(
  <React.Fragment>
    <AppBar sx={{background: '#e0de88'}}>
      
      <Toolbar sx={{marginLeft:'Auto'}}>
        <Tabs>
          <Tab label = 'Nosotras'onClick={() => {
        alert('NOSOTRAS');
        }}/>
          <Tab label = 'Colaboradoras'onClick={() => {
        alert('COLABORADORAS');
        }}/>
        </Tabs>

        <IconButton sx={{marginRight:3, marginLeft:3 }} onClick={() => {
        alert('MAIL');
        }}><EmailOutlinedIcon sx={{marginLeft:'Auto', color: '#5a5936', size: 'small'}}/></IconButton>
        
        <Button sx={{marginLeft:'Auto', borderRadius:50, color: '#5a5936' }} onClick={() => {
        alert('BUTTON ESP');
        }}>
        ESP
        </Button>
        <Button sx={{marginLeft:'Auto', borderRadius:50, color: '#5a5936' }} onClick={() => {
        alert('BUTTON ENG');
        }}>
        ENG
        </Button>
      

      </Toolbar>
    </AppBar>
  </React.Fragment>
  );
}
export default Navbar;



