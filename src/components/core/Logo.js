import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import logo from '../../assets/logo2.svg';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "center",
    },
}));

export default function Logo() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <img 
                className={classes.root} 
                src={logo} 
                height="30px" 
            />
        </div>
    )
}

