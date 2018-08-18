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

const reducers = combineReducers({ registration: registrationReducer, login: loginReducer });

export default reducers;