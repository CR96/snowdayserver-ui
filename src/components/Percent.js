import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';

function Percent(props) {

  return (
    <div>
    <Typography align="center" color="secondary" style={{ fontSize: '8em' }}>
        100%
    </Typography>
    </div>
  );
}

Percent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Percent;