import React from 'react';
import clsx from "clsx";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Copyright from "../../components/misc/Copyright";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../core/Card/";
import ReadMe from "./ReadMe"
import MetaData from "./MetaData"

const sections = {
    readme: {
        sizes: {
            xs: "",
            sm: "",
            md: "",
            lg: "",
            xl: "",
        },
    },
    metadata: {
        sizes: {
            xs: "",
            sm: "",
            md: "",
            lg: "",
            xl: "",
        },
    },
}

const useStyles = makeStyles(theme => ({
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(3),
        paddingBottom: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
}));

function Overview() {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Container maxWidth="lg" className={classes.container}>
                <Grid container spacing={3}>
                    <ReadMe col={8} />
                    <MetaData col={4} />
                </Grid>
                <Box pt={4}>
                    <Copyright />
                </Box>
            </Container>
        </main>
    )
}

export default Overview;
