import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import PageHeader from './components/PageHeader';
import Percent from './components/Percent';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#58a5f0',
            main: '#0277bd',
            dark: '#004c8c',
            contrastText: '#fff',
        },
        secondary: {
            light: '#82f7ff',
            main: '#40c4ff',
            dark: '#0094cc',
            contrastText: '#000',
        },
        background: {
            default: '#003865', // TARDIS Blue!
        }
    },
});

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <React.Fragment>
                <CssBaseline />
                <PageHeader />
                <Percent />
            </React.Fragment>
        </MuiThemeProvider>
    );
}

ReactDOM.render(<App />, document.querySelector('#server-root'));
registerServiceWorker();
