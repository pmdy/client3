import React from 'react';
import { Route } from 'react-router-dom';
import { SignUp } from 'components';

export default function SignUpRoute() {
    return <Route key='signup' path='/accounts/signup' component={SignUp} />
}

