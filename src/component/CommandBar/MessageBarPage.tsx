import { MessageBar, MessageBarType } from "office-ui-fabric-react/lib/MessageBar";
import * as React from "react";
import { connect } from "react-redux";
import { actionTypes } from "../../shared/store/actionTypes";

export interface IMessageBarControlProps {
    showMessageBar: boolean;
    onDismissMessageBar: () => void;
}

class MessageBarComponent extends React.Component<IMessageBarControlProps, {}> {
    constructor(props: IMessageBarControlProps) {
        super(props);
    }

    public componentDidUpdate(prevProps: IMessageBarControlProps) {
        if (prevProps.showMessageBar !== this.props.showMessageBar && this.props.showMessageBar) {
            setTimeout(() => {
                this.props.onDismissMessageBar();
            }, 5000);
        }
    }

    public render(): JSX.Element | null {

        return (this.props.showMessageBar ?
            <MessageBar
                messageBarType={MessageBarType.success}
                onDismiss={this.props.onDismissMessageBar}
            >
                Success Message !
            </MessageBar>
            : null);
    }
};

const mapStateToProps = (state: any): IMessageBarControlProps => {

    return state.messageBar;
}

function mapDispatchToProps(dispatch: any) {

    return {
        onDismissMessageBar: () => {
            dispatch({ type: actionTypes.MessageBar, text: { showMessageBar: false } });
        }
    };
}

const MessageBarPage = connect(mapStateToProps, mapDispatchToProps)(MessageBarComponent)

export default MessageBarPage;
