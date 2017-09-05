import * as React from "react";
import { Image, Nav, INavLink, Pivot, PivotItem } from "office-ui-fabric-react";

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
            selectedKey: "features"
        };
    }

    // Render the home content
    render() {
        return (
            <div className="home">
                <Nav className="nav" selectedKey={this.state.selectedKey} groups={[{
                    links: [
                        { name: "Features", key: "features", url: "", onClick: this.onClick },
                        { name: "Getting Started", key: "getting-started", url: "", onClick: this.onClick },
                        { name: "Projects", key: "projects", url: "", onClick: this.onClick },
                        { name: "Contributing", key: "contributing", url: "", onClick: this.onClick },
                        { name: "Demos", key: "demos", url: "", onClick: this.onClick }
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

        // Update the state
        this.setState({
            selectedKey: navItem.key
        });
    }

    // Method to render the content
    private renderContent = () => {
        // Show the content, based on the nav item clicked
        switch (this.state.selectedKey) {
            // Contributing
            case "contributing":
                return (
                    <p>
                        I'm open to any and all feedback for this library. If you wish to branch and submit pull requests, I'm fine with that route.
                        I find that opening an "Issue" with feature requests, is the best way to get feedback from others who wish to participate.
                    </p>
                );

            // Demos
            case "demos":
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
            case "features":
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
            case "getting-started":
                return (
                    <div className="getting-started">To Do</div>
                );

            // Projects
            case "projects":
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