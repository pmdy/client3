import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import Link from "@material-ui/core/Link";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreVert from "@material-ui/icons/MoreVert";
import Help from "@material-ui/icons/Help";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Badge from "@material-ui/core/Badge";
import { withRouter } from "react-router-dom";
import Logo from "./Logo";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex"
    },
    toolbar: {
        paddingRight: 24 // keep right padding when drawer closed
    },
    appBar: {
        boxShadow: "none",
        borderBottom: "1px solid gainsboro",
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    },
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
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
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto"
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4)
    },
    paper: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "column"
    },
    fixedHeight: {
        height: 240
    }
}));

function MyAppBar(props) {
    const classes = useStyles();
    const [anchorElOverflow, setAnchorElOverflow] = React.useState(null);

    const handleOverflowClose = () => {
        setAnchorElOverflow(null);
    };
    const handleOverflowClick = event => {
        setAnchorElOverflow(event.currentTarget);
    };

    return (
        <AppBar
            position="absolute"
            className={clsx(classes.appBar, props.open && classes.appBarShift)}
        >
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="rgba(0, 0, 0, 0.54)"
                    aria-label="open drawer"
                    className={clsx(
                        classes.menuButton,
                        props.open && classes.menuButtonHidden
                    )}
                >
                    <MenuIcon />
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    <Logo />
                </Typography>
                <Tooltip title="Notification Panel">
                    <IconButton>
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Tooltip>
                <Tooltip title="Help Panel">
                    <IconButton>
                        <Help />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Overflow Panel">
                    <IconButton onClick={handleOverflowClick}>
                        <MoreVert />
                    </IconButton>
                </Tooltip>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorElOverflow}
                    keepMounted
                    open={Boolean(anchorElOverflow)}
                    onClose={handleOverflowClose}
                >
                    <MenuItem onClick={handleOverflowClose}>
                        Send feedback
                    </MenuItem>
                </Menu>
                <Tooltip title="Your Account Dashboard">
                    <Link href="/accounts/signin" color="inherit">
                        <IconButton>
                            <AccountCircle />
                        </IconButton>
                    </Link>
                </Tooltip>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(MyAppBar);
