import { ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import { combineReducers } from "redux";
import { ILoginProps } from "./../../component/login/Login";
import { registrationReducer } from "./../store/reducers/registrationReducer";
import { actionTypes } from "./actionTypes";

const initialLogin: ILoginProps = {
    onChangeUsername: Function,
    password: "12345",
    username: "harish"
}

const loginReducer = (state: ILoginProps = initialLogin, action: any) => {
    switch (action.type) {
        case actionTypes.Login:
            return state = action.text;
        default:
            return state;
    }
}

const spinnerReducer = (state: { showSpinner: boolean } = { showSpinner: false }, action: any) => {
    switch (action.type) {
        case actionTypes.Spinner:
            return state = action.text;
        default:
            return state;
    }
}

const commandBarReducer = (state: ICommandBarProps = { items: [] }, action: any) => {
    switch (action.type) {
        case actionTypes.CommandBar:
            return state = action.text;
        default:
            return state;
    }
}

const messageBarReducer = (state: { showMessageBar: boolean } = { showMessageBar: false }, action: any) => {
    switch (action.type) {
        case actionTypes.MessageBar:
            return state = action.text;
        default:
            return state;
    }
}

const reducers = combineReducers({
    commandBar: commandBarReducer,
    login: loginReducer,
    messageBar: messageBarReducer,
    registration: registrationReducer,
    spinner: spinnerReducer
});

export default reducers;