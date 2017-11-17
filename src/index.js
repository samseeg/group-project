import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { unregister } from './registerServiceWorker';
import { Provider } from 'react-redux';
import store from './store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


const muiTheme = getMuiTheme({
    "palette": {
        "accent1Color": "#000000",
        "borderColor": "#263238",
        "primary1Color": "#78909c",
        "primary2Color": "#78909c",
        "pickerHeaderColor": "#78909c"
    },
    "tableRow": {
        "selectedColor": "#cfd8dc",
        "textColor": "#263238"
    },
    "table": {
        "backgroundColor": "rgba(255, 255, 255, 0.25)"
    },
    "tableHeaderColumn": {
        "textColor": "#736E77"
    }
})

const Material = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <App/>
    </MuiThemeProvider>
)

ReactDOM.render(
    <Provider store={store}>
        <Material/>
    </Provider>, document.getElementById('root'));
unregister();
