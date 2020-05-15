import React from 'react';
import { Route } from 'react-router-dom';
import { SignIn } from 'components';

export default function SignInRoute() {
        return <Route key='signin' path='/accounts/signin' component={SignIn} />
}

