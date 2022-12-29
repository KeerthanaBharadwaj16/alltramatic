import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import './AppBar.min.css';


function ResponsiveAppBar() {

  return (
    <AppBar className='custom-app-bar' position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
            <img src="https://alltramatic.com/static/media/Logo_SVG_black.ce949632.svg" alt="" />
            <Typography
                variant="h6"
                noWrap
                component="span"
                className='custom-typography'
            >
                Customer Page
            </Typography>
        </Toolbar>
        
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;