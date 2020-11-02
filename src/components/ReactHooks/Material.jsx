import { Button, Hidden, ThemeProvider } from '@material-ui/core';
import React from 'react';
import NavBar from '../navbar';

const Material = () => {
    return ( 

         <ThemeProvider theme={theme}>
      <NavBar/>
      <Button variant="contained">Default</Button>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Lista/>
      <Hidden/>

    </ThemeProvider>
     );
}
 
export default Material;