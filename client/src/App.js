import React from "react";
import { Container, AppBar, Typography, Grow, Grid }from '@mui/material';

import mic from './images/mic.jpg';

function App() {
  return (
    // <h1>sd</h1>
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          INSAZone
        </Typography>
        <img src={mic} alt="something" height="30" width="60" align="center"/>
      </AppBar>
    </Container>
  );
}

export default App;
