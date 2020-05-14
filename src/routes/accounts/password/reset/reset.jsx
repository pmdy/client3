import React from 'react';
import { Route } from 'react-router-dom';
import PasswordReset from 'components/auth/password-reset';

export default function ResetRoute() {
    return <Route key='reset' path='/accounts/password/reset' component={PasswordReset} />
}

