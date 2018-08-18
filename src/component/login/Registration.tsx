import { PrimaryButton } from "office-ui-fabric-react/lib/Button";
import { TextField } from "office-ui-fabric-react/lib/TextField";
import * as React from 'react';
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";
import { IRegistrationProps } from "../../shared/store/props/registrationProps";

function mapStateToProps(state: any) {

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
        const { name, email, mobile, address } = this.props;

        return (
            <div>
                <TextField
                    value={name}
                    name="name"
                    label="Name"
                />

                <TextField
                    value={mobile}
                    name="mobile"
                    label="Mobile"
                />
                <TextField
                    value={email}
                    name="email"
                    label="Email"
                />
                <TextField
                    value={address}
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
