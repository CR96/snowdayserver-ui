import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
import classNames from 'classnames';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Grid from '@material-ui/core/Grid';

import ClosingsTable from './ClosingsTable';

const styles = theme => ({
  background: {
    background: theme.palette.primary.dark,
  },
  card: {
    maxWidth: 600,
  },
  media: {
    height: 0,
  },
  text: {
    color: theme.palette.primary.contrastText,
  },
  table: {
    marginTop: "16px",
    marginBottom: "16px",
  },
  statusCell: {
    textAlign: "right",
  },
  tableDivider: {
    fontSize: "1.25rem;"
  },
});

let id = 0;
function createData(organization, status) {
  id += 1;
  return { id, organization, status };
}

// Mock data for UI testing
const dataTier1 = [
  createData('Atherton', 'Open'),
  createData('Bendle', 'Open'),
  createData('Bentley', 'Open'),
  createData('Carman-Ainsworth', 'Open'),
  createData('Flint Community Schools', 'Open'),
  createData('Goodrich', 'Open'),
];

const dataTier2 = [
  createData('Beecher', 'Open'),
  createData('Clio', 'Open'),
  createData('Davison', 'Open'),
  createData('Fenton', 'Open'),
  createData('Flushing', 'Open'),
  createData('Genesee', 'Open'),
  createData('Kearsley', 'Open'),
  createData('Lake Fenton', 'Open'),
  createData('Linden', 'Open'),
  createData('Montrose', 'Open'),
  createData('Mt. Morris', 'Open'),
  createData('Swartz Creek', 'Open'),
];

const dataTier3 = [
  createData('Durand', 'Open'),
  createData('Holly', 'Open'),
  createData('Lapeer', 'Open'),
  createData('Owosso', 'Open'),
];

const dataTier4 = [
  createData('Grand Blanc Academy', 'Open'),
  createData('Holy Family', 'Open'),
  createData('Woodland Park Academy', 'Open'),
  createData('Genesee I.S.D.', 'Open'),
];


function ClosingsCard(props) {
  const { classes } = props;
  return (
    <div>
      <Card className={classNames(classes.background, classes.card)}>
        <CardContent>
          <Typography className={classes.text} gutterBottom variant="headline" component="h2">
            School Closings
          </Typography>
          <Typography className={classes.text} component="p">
            No current closings or delays have been reported for Grand Blanc.
          </Typography>
        </CardContent>
        <ExpansionPanel className={classes.background}>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon className={classes.text}/>}>
            <Typography className={classes.text}><strong>View Area Schools</strong></Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails className={classes.details}>
          <Grid container justify="center" spacing={8}>
            <ClosingsTable dividerText="Districts near Grand Blanc" data={dataTier1}/>
            <ClosingsTable dividerText="Districts in Genesee County" data={dataTier2}/>
            <ClosingsTable dividerText="Districts in Neighboring Counties" data={dataTier3}/>
            <ClosingsTable dividerText="Academies / Institutions" data={dataTier4}/>
          </Grid>
        </ExpansionPanelDetails>
        </ExpansionPanel>
      </Card>
    </div>
  );
}

ClosingsCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClosingsCard);