import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "../core/Card";

const metadata = { 
    data: {
        type: "timeseries",
        size: 543,
        format: "json",
    },
    sources: {
        sources: "CDC",
        collectionMethod: "Collected on CDC website",
    },
    updates: {
        expectedUpdatedFrequency: "Weekly",
        lastUpdated: "2020-04-17",
        dateCreated: "2020-03-12",
        currentVersion: "Version 8",
    },
    maintainers: {
        datasetOwner: "Johnny Dee",
        collaborators: ["Bon Bon"],
    },
    usageInformation: {
        license: "MIT",
        visibility: "Public",
    },
}

const useStyles = makeStyles(theme => ({
}));

function Content(props) {
    return (
        <div>
            {Object.entries(metadata).map(([title, object]) => {
                return ( 
                    <>
                        <p>{title}</p> 
                        <ul>
                            {Object.entries(object).map(([name, value]) => {
                                    return (
                                        <>
                                            <li>{name}</li>
                                            <li>{value}</li>
                                        </>
                                    )
                            })}
                        </ul>
                    </>
                )
            })}
        </div>
    )
}

function MetaData(props) {
    const classes = useStyles();

    return (
        <Grid item xs={props.col}>
            <Card 
                title="MetaData"
                content={<Content />}
                help={true}
            />
        </Grid>
    )
}

export default MetaData;


