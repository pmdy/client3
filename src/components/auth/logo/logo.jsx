import React from 'react';
import propTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';
import withStyles from './logo-styles';

function Logo({ classes }) {
    return (
        <Link href='/'>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
        </Link>
    )
}

export default withStyles(Logo);
