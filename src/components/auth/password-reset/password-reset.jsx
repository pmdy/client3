import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import withStyles from './password-reset-styles';
import Copyright from '../../common/copyright';
import Logo from '../logo';

function PasswordReset({ classes }) {
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Logo />
        <Typography component="h1" variant="h5" gutterBottom>
            Trouble Logging In?
        </Typography>
        <Typography component="h1" variant="subtitle2" align="center" color="textSecondary">
            Forgot your account’s password or having trouble logging into your Team? Enter your email address and we’ll send you a recovery link.
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send recovery email
          </Button>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

PasswordReset.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(PasswordReset);
