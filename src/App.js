import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
// import { Router, Route, Switch } from "react-router-dom";
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import PasswordReset from './components/auth/PasswordReset';
import Loading from './components/misc/Loading';
import Dashboard from './components/dashboard';
// const Dashboard = React.lazy(() => import('./components/dashboard'));
//

function App() {
	return (
        <Switch>
            <Route path='/data/:id' render={Dashboard} />
            <Route path='/accounts/signin' render={SignIn} />
            <Route path='/data/:id' render={Dashboard} />
            <Route exact path='/' render={() => "HOME"} />
        </Switch>
	);
}

export default App;
