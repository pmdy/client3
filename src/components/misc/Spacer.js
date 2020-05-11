import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    spacer: {
        marginTop: 'auto',
    },
}));

function Spacer() {
    const classes = useStyles();
    return (
        <div className={classes.spacer} />
    )
}

export default Spacer;
