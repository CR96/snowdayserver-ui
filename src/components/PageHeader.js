import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/Button';

import { Twitter, GithubCircle, Email } from 'mdi-material-ui';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
    fontSize: "4em",
    color: theme.palette.primary.contrastText,
  }
});

class PageHeader extends React.Component {

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Grand Blanc Snow Day
            </Typography>
            <IconButton className={classes.button} aria-label="Email the developer">
              <GithubCircle />
            </IconButton>
            <IconButton className={classes.button} aria-label="Follow GBSnowDay on Twitter">
              <Twitter />
            </IconButton>
            <IconButton className={classes.button} aria-label="View this project on GitHub">
              <Email />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

PageHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PageHeader);
