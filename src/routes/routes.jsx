import React from 'react';
import { Route } from 'react-router-dom';
import { 
    SignInRoute,
    SignUpRoute,
    ResetRoute,
} from 'routes/accounts';

function Routes() {
    return (
        <>
            <SignInRoute />
            <SignUpRoute />
            <ResetRoute />
        </>
    )
}

export default Routes;
