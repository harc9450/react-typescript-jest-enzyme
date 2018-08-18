import { initializeIcons } from '@uifabric/icons';
import 'office-ui-fabric-react/dist/css/fabric.min.css';
import { loadTheme } from 'office-ui-fabric-react/lib/Styling';
import * as React from 'react';
import { Provider } from "react-redux";
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Login from './component/login/Login';
import { sharedStore } from "./shared/store/sharedStore";

loadTheme({
    palette: {
        black: "#1d1d1d",
        neutralDark: "#272727",
        neutralLight: "#eaeaea",
        neutralLighter: "#f4f4f4",
        neutralLighterAlt: "#f8f8f8",
        neutralPrimary: "#333",
        neutralPrimaryAlt: "#4b4b4b",
        neutralQuaternary: "#d0d0d0",
        neutralQuaternaryAlt: "#dadada",
        neutralSecondary: "#858585",
        neutralTertiary: "#c2c2c2",
        neutralTertiaryAlt: "#c8c8c8",
        themeDark: "#51034a",
        themeDarkAlt: "#600457",
        themeDarker: "#3c0236",
        themeLight: "#d396cd",
        themeLighter: "#e7c4e4",
        themeLighterAlt: "#f9f0f8",
        themePrimary: "#6c0462",
        themeSecondary: "#7d1372",
        themeTertiary: "#a6469d",
        white: "#fff"
    }
});

export class Routes extends React.Component {
    constructor(props: {}) {
        super(props);
        initializeIcons();
    }

    public render() {
        return (
            <Provider store={sharedStore}>
                <Router>
                    <div className="ms-Grid">
                        <div className="ms-Grid-row">
                            <div className="ms-Grid-col ms-sm2">
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="ms-Grid-col ms-sm10">
                                <Route exact={true} strict={true} path="/" component={Login} />
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default Routes;