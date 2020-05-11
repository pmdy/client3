import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from "@material-ui/icons/Menu";

export default function OverflowMenu(props) {
    return (
        <Menu
            id='simple-menu'
            anchorEl={props.anchorElOverflow}
            keepMounted
            open={Boolean(props.anchorElOverflow)}
            onClose={props.handleOverflowClose}
        >   
            <MenuItem onClick={props.handleOverflowClose}>Send feedback</MenuItem>
        </Menu>
    )
}
