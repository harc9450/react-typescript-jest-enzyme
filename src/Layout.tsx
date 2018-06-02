import 'office-ui-fabric-react/dist/css/fabric.min.css';
import * as React from 'react';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import App from './App';

export class Layout extends React.Component {
    public render() {
        return (
            <Router>
                <div className="ms-Grid">
                    <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm6">
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ms-Grid-col ms-sm6">
                            <Route exact={true} strict={true} path="/" component={App} />
                        </div>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Layout;