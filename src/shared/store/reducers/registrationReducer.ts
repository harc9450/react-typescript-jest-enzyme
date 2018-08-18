import { actionTypes } from "./../actionTypes";
import { IRegistrationProps } from "./../props/registrationProps";

const initialState: IRegistrationProps = {
    address: "",
    email: "",
    mobile: "",
    name: "",
}

export const registrationReducer = (state: IRegistrationProps = initialState,
    action: { type: string; text: IRegistrationProps }):
    IRegistrationProps => {
    switch (action.type) {
        case actionTypes.View:
            return state = action.text;
        default:
            return state;
    }
}
