import React from 'react';
import { Route } from 'react-router-dom';
import Profile from 'components';

export default function ProfileRoute() {
    return <Route key='profile' path='/username' component={Profile} />
}

