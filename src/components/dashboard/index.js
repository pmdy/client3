import React from "react";
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
// import Content from './Content';
import MyAppBar from '../core/AppBar';
import MyDrawer from '../core/Drawer';
import Loading from '../misc/Loading';
const Overview = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./Overview')), 1000)
    })
})
const ReadMe = React.lazy(() => {
    return new Promise(resolve => {
        setTimeout(() => resolve(import('./ReadMe')), 1000)
    })
})
// import Overview from './Overview';
// import ReadMe from './ReadMe/';

const drawerWidth = 240;

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
    menuButton: {
        marginRight: 36
    },
    menuButtonHidden: {
        display: "none"
    },
    title: {
        flexGrow: 1
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

function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);

    return (
        <div className={classes.root}>
            <CssBaseline />
             <MyAppBar 
                open={open}
                handleDrawerOpen={handleDrawerOpen}
            />
             <MyDrawer
                open={open}
                handleDrawerClose={handleDrawerClose}
            />
            <React.Suspense fallback={<Loading />}>
                <Switch>
                    <Route path="/data/:id/overview" component={Overview} />
                    <Route path="/data/:id/readme" component={Overview} />
                </Switch>
            </React.Suspense>
        </div>
    );
}

export default withRouter(Dashboard);
