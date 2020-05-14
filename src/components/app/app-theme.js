import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    overrides: {
        MuiAppBar: {
            colorPrimary: {
                backgroundColor: "white",
            },
        },
        MuiButton: {
            root: {
                padding: '7px 16px',
            },
        },
        MuiCardHeader: {
            root: {
                padding: '4px 1em',
                borderBottom: '1px solid gainsboro',
            },
            action: {
                marginTop: '0px',
                marginBottom: '0px',
            },
        },
        MuiTypography: {
            gutterBottom: {
                marginBottom: '1em',
            },
        },
        MuiPaper: {
            elevation1: {
                boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.12)',
            },
        },
    },
    props: {
        MuiPaper: {
            square: true,
        },
    },
    palette: {
        primary: {
            light: '#fff',
            main: '#0086ff',
            dark: '#000'
        },
        secondary: {
            main: '#f44336',
        },
    },
    typography: {
        fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
        ].join(','),
    },
});

export default theme;
