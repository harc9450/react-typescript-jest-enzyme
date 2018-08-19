import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from 'react';
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";
import CommandBarPage from "./../CommandBar/CommandBarPage";
import MessageBarPage from "./../CommandBar/MessageBarPage";
import SpinnerPage from "./../SpinnerPage";
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
        const messageProps = {
            fadeTimeout: 10000,
            message: "Success Message !",
            messageBarProps: {
                messageBarType: MessageBarType.success
            },
            onDismissMessagebar: Function,
            showMessageBar: false
        }

        return (
            <div>
                <CommandBarPage />
                <MessageBarPage {...messageProps} />
                <SpinnerPage />
                <Registration />

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