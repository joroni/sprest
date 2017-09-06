import * as React from "react";
import { render } from "react-dom";
import { PivotItem } from "office-ui-fabric-react";
import { Home } from "./home";
import { Ribbon } from "./ribbon";
import "../sass/app.scss";

/**
 * App
 */
export class App extends React.Component<null, { selectedNavItem?: string; }> {
    /**
     * Constructor
     */
    constructor() {
        super();

        // Set the state
        this.state = {};
    }

    // Render the app
    render() {
        return (
            <div className="app">
                <div className="header">
                    <div className="header-left">
                        <i className="ms-Icon ms-Icon--SharepointLogo" />
                        <span>SharePoint REST Framework</span>
                    </div>
                    <div className="header-right">
                        <span>gd-sprest</span>
                    </div>
                </div>
                <Ribbon onNavItemClick={this.onNavItemClick} />
                <div className="main">{this.renderContent()}</div>
            </div>
        );
    }

    /**
     * Methods
     */

    // The nav item click event
    private onNavItemClick = (item?: PivotItem) => {
        // See which item was clicked
        switch (item.props.linkText) {
            case "gitHub":
                // Redirect to the github page
                document.location.href = "https://github.com/gunjandatta/sprest";
                break;
            default:
                // Update the state
                this.setState({ selectedNavItem: item.props.linkText });
                break;
        }
    }

    // Method to render the content
    private renderContent = () => {
        // Render the component, based on the selected nav item
        switch (this.state.selectedNavItem) {
            // Wiki
            case "Wiki":
                // Redirect to the wiki
                window.location.href = "https://github.com/gunjandatta/sprest/wiki";
                break;
        }

        // Render the home content by default
        return <Home />;
    }
}