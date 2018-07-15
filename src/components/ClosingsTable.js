import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';

import Grid from '@material-ui/core/Grid';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

const styles = theme => ({
    text: {
      color: theme.palette.primary.contrastText,
    },
    table: {
      marginTop: "16px",
      marginBottom: "16px",
    },
    status: {
      textAlign: "right",
    },
    divider: {
      fontSize: "1.25rem;"
    },
});

function ClosingsTable(props) {
    const { classes } = props;
    return (
      <Grid item xs={8}>
        <Typography className={classNames(classes.text, classes.divider)}>{props.dividerText}</Typography>
        <Table className={classes.table}>
          <TableBody>
            {props.data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell className={classes.text} component="th" scope="row">
                    <strong>{n.organization}</strong>
                  </TableCell>
                  <TableCell className={classNames(classes.text, classes.status)} >{n.status}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    )
  }

  ClosingsTable.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ClosingsTable);