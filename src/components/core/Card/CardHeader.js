import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import HelpOutline from "@material-ui/icons/HelpOutline";

const useStyles = makeStyles(theme => ({
    root: {
        maxWidth: "100%"
        // padding: "1em 0",
    },
    title: {
        display: "flex",
        alignItems: "center",
        fontSize: "18px",
        fontWeight: "400",
        paddingBottom: theme.spacing(1)
    },
    gutterRight: {
        paddingRight: theme.spacing(1)
    },
    icon: {
        color: theme.palette.grey["400"]
    }
}));

export default function CardHeader(props) {
    const classes = useStyles();

    return (
        <div className={clsx(props.className, classes.root)}>
            <div className={classes.title}>
                <div className={classes.gutterRight}>{props.title}</div>
                {props.help ? <HelpOutline className={classes.icon} /> : ""}
            </div>
        </div>
    );
}
