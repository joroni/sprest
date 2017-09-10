import * as React from "react";

/**
 * Projects
 */
export const Projects = () => {
    // Render the component
    return (
        <div className="projects">
            <div className="header">
                <a href="https://github.com/gunjandatta/sprest-webparts" target="_blank">SharePoint WebPart Examples</a>
            </div>
            <p>
                This is the official github project for the gd-sprest framework for storing webpart examples. Refer to
                this <a href="http://dattabase.com/sharepoint-react-webparts/" target="_blank">blog post</a> for details of the available
                gd-sprest-react WebPart classes, and how to use them. This post also gives a detailed explanation of building a document viewer from scratch.
            </p>

            <div className="header">
                <a href="https://github.com/gunjandatta/sprest-bcs-list" target="_blank">Office Fabric BCS List</a>
            </div>
            <p>
                This project will give an example of a SharePoint Add-In connecting to the a database using BCS. The framework is used to
                query the data, using the REST api.
            </p>

            <div className="header">
                <a href="https://github.com/gunjandatta/sp-event-callout" target="_blank">Calendar Event Callout</a>
            </div>
            <p>
                This project will extend the SharePoint calendar, by adding a callout to each event. The framework is used to
                query the event item and display it in an item form, using the REST api.
            </p>

            <div className="header">
                <a href="https://github.com/gunjandatta/sprest-large-list" target="_blank">Query >5000 Items Example</a>
            </div>
            <p>
                This project is a SharePoint Add-In, which generates a large list. The framework is used to query >5000 items,
                the REST api's max threshold, per Marc Anderson's <a href="http://sympmarc.com/2016/11/30/25696/" target="_blank">blog post</a>.
            </p>

            <div className="header">
                <a href="https://github.com/gunjandatta/sprest-fabric-react" target="_blank">SharePoint Fabric React Starter Project</a>
            </div>
            <p>
                Refer to this <a href="http://dattabase.com/sharepoint-app-fabric-ui-react-part-1-3/" target="_blank">blog post</a> for details of this Fabric UI React starter project.
            </p>

            <div className="header">
                <a href="https://github.com/gunjandatta/sp-react-redux" target="_blank">Fabric React/Redux Starter Project</a>
            </div>
            <p>
                Refer to this <a href="http://dattabase.com/office-fabric-reactredux-sp-starter-project/" target="_blank">blog post</a> for dtails of this Fabric UI React/Redux starter project.
            </p>
        </div>
    );
}