import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia } from '@material-ui/core';

const styles = theme => ({
  card: {
    maxWidth: 600,
    background: theme.palette.primary.dark,
  },
  media: {
    height: 0,
    paddingTop: '100%',
  },
  text: {
    color: theme.palette.primary.contrastText,
  }
});

function WeatherCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.text} gutterBottom variant="headline" component="h2">
            Weather
          </Typography>
          <Typography className={classes.text} component="p">
            There are no active watches, warnings, or advisories.
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image="https://radar.weather.gov/ridge/lite/CENTGRLAKES_loop.gif"
          title="Great Lakes Radar Loop"
        />
        <CardActions>
          <Button className={classes.text} size="small" color="secondary">
            More Info
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

WeatherCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WeatherCard);