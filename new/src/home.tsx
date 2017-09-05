import * as React from "react";
import { Image, Nav, INavLink, Pivot, PivotItem } from "office-ui-fabric-react";

/**
 * Home Content
 */
export class Home extends React.Component<null, { navItem: string }> {
    /**
     * Constructor
     */
    constructor() {
        super();

        // Set the state
        this.state = { navItem: "Features" };
    }

    // Render the home content
    render() {
        return (
            <div className="home">
                <Nav className="nav" groups={[{
                    links: [
                        { name: "Features", url: "", onClick: this.onClick },
                        { name: "Getting Started", url: "", onClick: this.onClick },
                        { name: "Projects", url: "", onClick: this.onClick },
                        { name: "Demos", url: "", onClick: this.onClick }
                    ]
                }]}>
                </Nav>
                {this.renderContent()}
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

        // Update the state
        this.setState({
            navItem: navItem.name
        });
    }

    // Method to render the content
    private renderContent = () => {
        // Show the content, based on the nav item clicked
        switch (this.state.navItem) {
            // Demos
            case "Demos":
                return (
                    <Pivot>
                        <PivotItem linkText="VS Code">
                            <img className="demo-img" alt="VS Code" src="https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-VSCode.gif" />
                        </PivotItem>
                        <PivotItem linkText="Automation">
                            <img className="demo-img" alt="VS Code" src="https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-SPConfig.gif" />
                        </PivotItem>
                        <PivotItem linkText="Powershell in the Browser Console">
                            <img className="demo-img" alt="VS Code" src="https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-ConsoleWindow.gif" />
                        </PivotItem>
                    </Pivot>
                );

            // Features
            case "Features":
                return (
                    <ul className="features">
                        <li>Ability to control the order of asynchronous requests</li>
                        <li>Ability to generate request urls for NodeJS applications</li>
                        <li>Easy to execute requests to/from the App/Host web</li>
                        <li>Full intellisense for the REST API</li>
                        <li>PowerShell-Like experience in the browser console</li>
                        <li>Create SharePoint solution assets through a configuration file</li>
                        <li>Content Types</li>
                        <li>Fields</li>
                        <li>Lists</li>
                        <li>User Custom Actions</li>
                        <li>WebParts</li>
                    </ul>
                );

            // Getting Started
            case "Getting Started":
                return (
                    <div className="getting-started">To Do</div>
                );

            // Projects
            case "Projects":
                return (
                    <ul className="projects">
                        <li><a href="https://github.com/gunjandatta/sprest-sitecustomactions">Add/Remove Site Collection User Custom Actions</a></li>
                        <li><a href="https://github.com/gunjandatta/sp-event-callout">Calendar Event Callout</a></li>
                        <li><a href="https://github.com/gunjandatta/sprest-bcs-list">Office Fabric BCS List</a></li>
                        <li><a href="https://github.com/gunjandatta/sprest-fabric-react">Office Fabric React</a></li>
                        <li><a href="https://github.com/gunjandatta/sprest-list">Office Fabric UI Dashboard</a></li>
                        <li><a href="https://github.com/gunjandatta/sprest-large-list">Query >5000 Items Example</a></li>
                        <li><a href="https://github.com/gunjandatta/sp-jslink">SharePoint JS-Link Starter Project</a></li>
                        <li><a href="https://github.com/gunjandatta/sp-react-redux">SharePoint React/Redux Starter Project</a></li>
                        <li><a href="https://github.com/gunjandatta/sp-scripts">SharePoint Scripts Starter Project</a></li>
                    </ul>
                );
        }
    }
}