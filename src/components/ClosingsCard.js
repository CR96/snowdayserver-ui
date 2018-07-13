import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    maxWidth: 300,
    background: theme.palette.primary.dark,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  text: {
    color: theme.palette.primary.contrastText,
  }
});

function ClosingsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.text} gutterBottom variant="headline" component="h2">
            School Closings
          </Typography>
          <Typography  className={classes.text} component="p">
            No current closings or delays have been reported for Grand Blanc.
          </Typography>
        </CardContent>
        <CardActions>
          <Button className={classes.text} size="small" color="primary">
            Show All Closings
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

ClosingsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClosingsCard);