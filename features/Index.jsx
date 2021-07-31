import React from 'react';
import { Container, Grid } from '@material-ui/core';
import NewTask from './newTask';
import Tasks from './tasks';

const HomePage = () => {
  return (
    <Container maxWidth='xs'>
      <Grid container spacing={2} direction='column'>
        <Grid item xs>
          <NewTask />
        </Grid>
        <Grid item xs>
          <Tasks />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
