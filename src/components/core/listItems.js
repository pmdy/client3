import React from "react";
import { Redirect, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import LayersIcon from "@material-ui/icons/Layers";
import AssignmentIcon from "@material-ui/icons/Assignment";

const useStyles = makeStyles(theme => ({
    link: {
        color: 'initial',
        textDecoration: 'initial',
    }
}));


export const mainListItems = [
    {
        title: "Dashboard", 
        link: `/data/id/overview`, 
        icon: {
            default: <DashboardIcon />,
            selected: <DashboardIcon color="primary" />
        }
    },
    {
        title: "Orders", 
        link: "/data/id/readme", 
        icon: {
            default: <ShoppingCartIcon />,
            selected: <ShoppingCartIcon color="primary" />
        }
    },
    {
        title: "Customers", 
        link: "/accounts/signin", 
        icon: {
            default: <PeopleIcon />,
            selected: <PeopleIcon color="primary" />
        }
    },
    {
        title: "Reports", 
        link: "/accounts/signin", 
        icon: {
            default: <BarChartIcon />,
            selected: <BarChartIcon color="primary" />
        }
    },
    {
        title: "Layers", 
        link: "/accounts/signin", 
        icon: {
            default: <LayersIcon />,
            selected: <LayersIcon color="primary" />
        }
    },
]

// export const mainListItems = (
//     <div>
//         <Link to="/">
//             <ListItem selected button>
//                 <ListItemIcon>
//                     <DashboardIcon color="primary" />
//                 </ListItemIcon>
//                 <ListItemText primary="Dashboard" />
//             </ListItem>
//         </Link>
//         <ListItem button>
//             <ListItemIcon>
//                 <ShoppingCartIcon />
//             </ListItemIcon>
//             <ListItemText primary="Orders" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <PeopleIcon />
//             </ListItemIcon>
//             <ListItemText primary="Customers" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <BarChartIcon />
//             </ListItemIcon>
//             <ListItemText primary="Reports" />
//         </ListItem>
//         <ListItem button>
//             <ListItemIcon>
//                 <LayersIcon />
//             </ListItemIcon>
//             <ListItemText primary="Integrations" />
//         </ListItem>
//     </div>
// );

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Saved reports</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Current month" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Last quarter" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon />
            </ListItemIcon>
            <ListItemText primary="Year-end sale" />
        </ListItem>
    </div>
);
