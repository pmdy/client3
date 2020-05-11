import React from "react";
import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import DashboardIcon from "@material-ui/icons/Dashboard";
import SettingsIcon from '@material-ui/icons/Settings';
import { mainListItems, secondaryListItems } from "./listItems";
import Spacer from "../misc/Spacer";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbarIcon: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0 8px",
        ...theme.mixins.toolbar
    },
    drawerPaper: {
        position: "relative",
        whiteSpace: "nowrap",
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    drawerPaperClose: {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9)
        }
    },
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    link: {
        color: "initial",
        textDecoration: "initial"
    },
}));

export default function MyDrawer(props) {
    const classes = useStyles();
    let location = useLocation();

    const id = 123;

    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(
                    classes.drawerPaper,
                    !props.open && classes.drawerPaperClose
                )
            }}
            open={props.open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={props.handleDrawerClose}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                {mainListItems.map(item => {
                    return (
                        <Link 
                            id={item.title} 
                            className={classes.link} 
                            to={item.link} 
                        >
                            <ListItem 
                                selected={item.link === location.pathname ? true : false}
                                button
                            >
                                <ListItemIcon>{item.link === location.pathname ? item.icon.selected : item.icon.default }</ListItemIcon>
                                <ListItemText 
                                    primary={item.title}
                                />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
            <Spacer />
            <List>
                    <ListItem button>
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
}
