import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from 'react';
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";
import Registration from "./Registration";

export interface ILoginProps {
    onChangeUsername: (value: string) => void;
    password: string;
    username: string;
}

function mapStateToProps(state: any) {

    return state.login;
}

// tslint-disable:next-line
function mapDispatchToProps(dispatch: any) {

    return {
        onChangeUsername: (value: string) => {
            dispatch({ type: actionTypes.Login, text: { username: value } });
            dispatch({ type: actionTypes.View, text: { name: value } });
        }
    }
}

class LoginComponent extends React.Component<ILoginProps, {}> {
    constructor(props: ILoginProps) {
        super(props);
    }

    public render() {
        return (
            <div>
                <Registration
                    name=""
                    email=""
                    mobile=""
                    address=""
                />

                <TextField
                    value={this.props.username}
                    name="username"
                    label="User Name"
                    onChanged={this.props.onChangeUsername}
                />

                <TextField
                    value={this.props.username}
                    name="password"
                    label="Password"
                    type="Password"
                />
                <br />
                <PrimaryButton text="Login" />
            </div>
        )
    }
}

const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

export default Login;