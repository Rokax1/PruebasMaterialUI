import React from 'react';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/core/styles'
import NavBar from './components/navbar'
import theme from './style/themeConfig';
import Typography from '@material-ui/core/Typography';
import Lista from './components/lista'; 
import Hidden from './components/hidden'



function App() {

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


export default App;
