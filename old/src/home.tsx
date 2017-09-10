import * as React from "react";
import { Image, Nav, INavLink, Pivot, PivotItem } from "office-ui-fabric-react";
import { GettingStarted } from "./gettingStarted";
import { Overview } from "./overview";
import {Projects} from "./projects";

/**
 * Home Content
 */
export class Home extends React.Component<null, { selectedKey?: string }> {
    /**
     * Constructor
     */
    constructor() {
        super();

        // Set the state
        this.state = {
            selectedKey: "overview"
        };
    }

    // Render the home content
    render() {
        return (
            <div className="home">
                <Nav className="nav" selectedKey={this.state.selectedKey} groups={[{
                    links: [
                        { name: "Overview", key: "overview", url: "", onClick: this.onClick },
                        { name: "Getting Started", key: "getting-started", url: "", onClick: this.onClick },
                        { name: "Projects", key: "projects", url: "", onClick: this.onClick },
                        { name: "Demos", key: "demos", url: "", onClick: this.onClick },
                        { name: "GitHub", key: "github", url: "", onClick: this.onClick }
                    ]
                }]}>
                </Nav>
                <div>
                    <p>
                        This framework allows you to generate a request to the SharePoint REST api.
                        It's currently designed to work with JavaScript, TypeScript and NodeJS projects.
                    </p>
                    {this.renderContent()}
                </div>
            </div>
        );
    }

    /**
     * Methods
     */

    // The click event for the navigation
    private onClick = (ev: React.MouseEvent<HTMLElement>, navItem: INavLink) => {
        // Prevent postback
        ev.preventDefault();

        // See if the 'github' link was clicked
        if(navItem.key == "github") {
            // Open a new window/tab
            window.open("https://github.com/gunjandatta/sprest", "_blank");
        } else {
            // Update the state
            this.setState({
                selectedKey: navItem.key
            });
        }
    }

    // Method to render the content
    private renderContent = () => {
        // Show the content, based on the nav item clicked
        switch (this.state.selectedKey) {
            // Demos
            case "demos":
                return (
                    <Pivot>
                        <PivotItem linkText="VS Code">
                            <img className="demo-img" alt="VS Code" src="./images/demo-VSCode.gif" />
                        </PivotItem>
                        <PivotItem linkText="Automation">
                            <img className="demo-img" alt="VS Code" src="./images/demo-SPConfig.gif" />
                        </PivotItem>
                        <PivotItem linkText="Powershell in the Browser Console">
                            <img className="demo-img" alt="VS Code" src="./images/demo-ConsoleWindow.gif" />
                        </PivotItem>
                    </Pivot>
                );

            // Getting Started
            case "getting-started":
                return (
                    <GettingStarted />
                );

            // Overview
            case "overview":
                return (
                    <Overview />
                );

            // Projects
            case "projects":
                return (
                    <Projects />
                );
        }
    }
}