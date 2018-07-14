import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    marginBottom: "-32px",
  },
  text: {
    fontSize: "8em",
  }
});

function Percent(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <Typography className={classes.text} align="center" color="secondary">
        100%
    </Typography>
    </div>
  );
}

Percent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Percent);