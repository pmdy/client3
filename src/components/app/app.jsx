import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import Routes from 'routes';
import theme from './app-theme';

function App() {
	return (
        <ThemeProvider theme={theme}>
            <Router>
                <Switch>
                    <Routes />
                </Switch>
            </Router>
        </ThemeProvider>
	);
}

export default App;
