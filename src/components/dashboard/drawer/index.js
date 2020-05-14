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
        display: "flex",
        paddingTop: "5em",
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
        backgroundColor: "transparent",
        borderRight: "0px",
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
    listItemText: {
        fontSize: "14px",
        color: theme.palette.text.secondary,
    },
    listItemIcon: {
        fontSize: "14px",
    },
    drawerListItem: {
        paddingLeft: "30px",
        borderTopRightRadius: "1em",
        borderBottomRightRadius: "1em",
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
    const [open, setOpen] = React.useState(false);
    const classes = useStyles();
    let location = useLocation();

    const handleDrawerOpen = () => setOpen(!open); 

    console.log(open);
    return (
        <Drawer
            variant="permanent"
            classes={{
                paper: clsx(
                    classes.root,
                    classes.drawerPaper,
                    !open && classes.drawerPaperClose
                )
            }}
            open={open}
        >
            <List>
                {mainListItems.map(item => {
                    return (
                        <Link 
                            id={item.title} 
                            className={classes.link} 
                            to={item.link} 
                        >
                            <ListItem 
                                className={classes.drawerListItem}
                                selected={item.link === location.pathname ? true : false}
                                button
                            >
                                <ListItemIcon className={classes.listItemIcon}>{item.link === location.pathname ? item.icon.selected : item.icon.default }</ListItemIcon>
                                <ListItemText 
                                    className={classes.listItemText}
                                    primary={item.title}
                                />
                            </ListItem>
                        </Link>
                    );
                })}
            </List>
            <Spacer />
            <List>
                    <ListItem 
                        onClick={handleDrawerOpen}
                        className={classes.drawerListItem}
                        button
                    >
                        <ListItemIcon>
                            <SettingsIcon />
                        </ListItemIcon>
                        <ListItemText className={classes.listItemText} primary="Settings" />
                    </ListItem>
            </List>
            <Divider />
        </Drawer>
    );
}
