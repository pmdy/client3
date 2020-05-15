import React from 'react';
import { Route } from 'react-router-dom';
import { SignInRoute, SignUpRoute, ResetRoute } from 'routes/accounts';
import { ProfileRoute } from 'routes/:username';

function Routes() {
    return (
        <>
            <SignInRoute />
            <SignUpRoute />
            <ResetRoute />
            <ProfileRoute />
        </>
    )
}

export default Routes;
