import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    textAlign: "center",
    marginTop: "16px",
    marginBottom: "16px",
  },
  events: {
    fontSize: "1em",
  },
  button: {
    color: theme.palette.secondary.contrastText,
    marginTop: "16px",
  },
  text: {
    color: theme.palette.primary.contrastText,
  }
});

function DateCard(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Typography className={classes.text} gutterBottom variant="headline">
        Weekday, Month Day, Year
      </Typography>
      <Typography  className={`${classes.events} ${classes.text}`} component="p">
        No events today.
      </Typography>
      <Button className={classes.button} variant="contained" color="secondary">
        Show Tomorrow's Chance
      </Button>
    </div>
  );
}

DateCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateCard);