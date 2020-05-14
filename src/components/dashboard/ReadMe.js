import React from 'react';
import clsx from "clsx";
import fetch from "node-fetch";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import ReactMarkdown from "react-markdown";
import Copyright from "../misc/Copyright";
import { makeStyles } from "@material-ui/core/styles";
import Card from '../core/Card/';
import MetaData from './MetaData';
import MarkdownExample from '../../assets/markdown-example.md';
import '../../assets/markdown.css';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    title: {
        flexGrow: 1
    },
    container: {
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2)
    },
    wrapper: {
        paddingLeft: "5em",
        paddingRight: "5em",
    },
}));

function ReadMe(props) {
    const [text, setText] = React.useState("");
    const classes = useStyles();

    React.useEffect(() => {
        fetch(MarkdownExample)
            .then(res => res.text())
            .then(content => setText(content))
            .catch(err => console.log(err));

    });

    return (
        <Grid 
            className="markdown-body" 
            xs={props.xs}
            lg={props.lg}
            item 
        >
            <Card 
                title="Read Me"
                className="HI"
                content={<ReactMarkdown source={text} />}
                help={true}
            />
        </Grid>
    )
}

export default ReadMe;
