import { CommandBar, ICommandBarProps } from "office-ui-fabric-react/lib/CommandBar";
import * as React from "react";
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";
import { commandBarProps, ICommandBarActionProps } from "./CommandBarConfig";

class CommandBarComponent extends React.Component<ICommandBarProps, {}> {
    constructor(props: ICommandBarProps) {
        super(props);
    }

    public render(): JSX.Element {

        return (
            <div>
                <CommandBar {...this.props} />
            </div>
        );
    }
}
const mapStateToProps = (state: any): ICommandBarProps => {

    return state.commandBar;
}

function mapDispatchToProps(dispatch: any): ICommandBarActionProps {

    return {
        onExportToExcel: () => {
            dispatch({ type: actionTypes.Spinner, text: { showSpinner: true } });
        
            setTimeout(() => {
                dispatch({ type: actionTypes.Spinner, text: { showSpinner: false } });
                dispatch({ type: actionTypes.MessageBar, text: { showMessageBar: true } });
            }, 5000);
        },
        onPublishAllCustomizations: () => {
            dispatch({ type: actionTypes.Spinner, text: { showSpinner: true } });
        
            setTimeout(() => {
                dispatch({ type: actionTypes.Spinner, text: { showSpinner: false } });
                dispatch({ type: actionTypes.MessageBar, text: { showMessageBar: true } });
            }, 5000);
        }
    };
}

function mergeProps(stateProps: ICommandBarProps, dispatchProps: ICommandBarActionProps) {

    stateProps = commandBarProps(dispatchProps);

    return {
        ...stateProps,
        ...dispatchProps
    };
}

const CommandBarPage = connect(mapStateToProps, mapDispatchToProps, mergeProps)(CommandBarComponent)

export default CommandBarPage;