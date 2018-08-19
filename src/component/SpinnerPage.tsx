import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import * as React from "react";
import { connect } from "react-redux";

interface ISpinnerPageProps {
    showSpinner: boolean;
}

class SpinnerPageComponent extends React.Component<ISpinnerPageProps, {}> {
    public render(): JSX.Element {
        return (
            <div
                style={{
                    backgroundColor: "rgba(0,0,0,0.5)",
                    bottom: 0,
                    display: this.props.showSpinner ? "block" : "none",
                    height: "100%",
                    left: 0,
                    minHeight: "100vh",
                    position: "fixed",
                    right: 0,
                    top: 0,
                    width: "100%",
                    zIndex: 999
                }}
            >
                <Spinner
                    size={SpinnerSize.large}
                    label="Publish All Customizations..."
                    ariaLive="assertive"
                    style={{ marginTop: "45vh" }}
                />
            </div>
        );
    }
}

const mapStateToProps = (state: any): { showSpinner: boolean } => {

    return state.spinner;
}

const SpinnerPage = connect(mapStateToProps)(SpinnerPageComponent)

export default SpinnerPage;