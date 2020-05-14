import React from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
});

export default withStyles(styles);
