import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import ClosingsCard from './ClosingsCard';
import WeatherCard from './WeatherCard';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
});

function CardGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container justify="center" spacing={16}>
        <Grid item xs={16}>
          <ClosingsCard />
        </Grid>
        <Grid item xs={16}>
          <WeatherCard />
        </Grid>
      </Grid>
    </div>
  );
}

CardGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardGrid);