import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Deposits from '../dashboard/Deposits';
import Orders from '../dashboard/Orders';
import Chart from '../dashboard/Chart';
import Copyright from '../misc/Copyright';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
    width: '100%',
    height: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
  },
  appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
}));

export default function Loading() {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
      <main className={classes.root}>
        <Container maxWidth="lg" className={classes.container}>
            <CircularProgress />
        </Container>
      </main>
    )
}

