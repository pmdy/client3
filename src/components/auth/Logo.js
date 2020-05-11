import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
}));

function Logo() {
  const classes = useStyles();

    return (
        <Link href='/'>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
        </Link>
    )
}

export default Logo;
