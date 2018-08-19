import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from 'react';
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";
import { IRegistrationProps } from "../../shared/store/props/registrationProps";

function mapStateToProps(state: any): IRegistrationProps {

    return state.registration;
}

// tslint-disable:next-line
function mapDispatchToProps(dispatch: any) {

    return {
        onChangeUsername: (value: string) => {
            dispatch({ type: actionTypes.View });
        }
    }
}

class RegistrationComponent extends React.Component<IRegistrationProps, {}> {
    constructor(props: IRegistrationProps) {
        super(props);
    }

    public render() {

        return (
            <div>
                <TextField
                    value={this.props.name}
                    name="name"
                    label="Name"
                />

                <TextField
                    value={this.props.mobile}
                    name="mobile"
                    label="Mobile"
                />
                <TextField
                    value={this.props.email}
                    name="email"
                    label="Email"
                />
                <TextField
                    value={this.props.address}
                    name="address"
                    label="Address"
                />
                <br />
                <PrimaryButton text="Registration" />
            </div>
        )
    }
}

const Registration = connect(mapStateToProps, mapDispatchToProps)(RegistrationComponent);

export default Registration;
