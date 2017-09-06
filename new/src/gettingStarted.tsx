import * as React from "react";
import { Pivot, PivotItem } from "office-ui-fabric-react";

/**
 * Getting Started
 */
export const GettingStarted = () => {
    // JS Content
    let jsContent = (
        <div className="getting-started">
            <div className="header">Load the Library</div>
            <ol>
                <li>
                    <div className="step">Access a SharePoint 2013+ web</div>
                </li>
                <li>
                    <div className="step">Upload the gd-sprest.js or gd-sprest.min.js file to a library of your choice.</div>
                </li>
                <li>
                    <div className="step">Press F-12 to access the browser's console window.</div>
                </li>
                <li>
                    <div className="step">Load the library</div>
                    <p>
                        This example will use the following:
                        <ul>
                            <li>library: Site Assets</li>
                            <li>web url: /sites/dev</li>
                        </ul>
                    </p>
                    <p>Execute the following code in the browser console:</p>
                    <code>
                        var s = document.create("script");<br/>
                        s.src = "/sites/dev/siteassets/gd-sprest.min.js";<br/>
                        document.head.appendChild(s);<br/>
                    </code>
                </li>
            </ol>
            <div className="header">Code Examples:</div>
            <ol>
                <li>
                    <div className="step">Load the lists</div>
                    <code>
                        (new $REST.List("[List Name]"));<br/>
                    </code>
                </li>
            </ol>
        </div >
    );

    // NodeJS Content
    let nodeJSContent = (
        <div className="getting-started">
            <div className="header">Import the Library</div>
            <code>
                var $REST = require("gd-sprest");<br/>
            </code>
            <div className="header">Code Examples:</div>
            <ol>
                <li>
                    <div className="step">Get a list request information.</div>
                    <code>
                        (new $REST.Web("https://myweb.sharepoint.com/sites/dev")).Lists("Site Assets").getInfo()<br/>
                    </code>
                    <code>
                        // Console output:<br/>
                        {"{"}<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;data: null,<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;method: 'GET',<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;url: 'https://myweb.sharepoint.com/sites/dev/_api/web/Lists/getByTitle(\'Site Assets\')'<br/>
                        }<br/>
                    </code>
                </li>
            </ol>
        </div>
    );

    // TypeScript Content
    let tsContent = (
        <div className="getting-started">
            <div className="header">Import the Library</div>
            <code>
                npm i --save gd-sprest<br/>
            </code>
            <div className="header">Code Examples:</div>
            <ol>
                <li>
                    <div className="step">Get a list</div>
                    <code>
                        import {"{"}List} from "gd-sprest";<br/>
                    </code>
                    <code>
                        // Get the list<br/>
                        (new $REST.List("[List Name]"))<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Execute the request<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;.execute((list) => {});<br/>
                    </code>
                </li>
                <li>
                    <div className="step">Get a list, root folder, fields and views</div>
                    <p>
                        import {"{"}List} from "gd-sprest";<br/>
                    </p>
                    <p>
                        // Get the list<br/>
                        (new $REST.List("[List Name]"))<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Query the list<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;.query({"{"} Expand: ["RootFolder", "Fields", "Views"] })<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Execute the request<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;.execute((list) => {});<br/>
                    </p>
                </li>
                <li>
                    <div className="step">Get the web, root folder, fields and lists</div>
                    <p>
                        import {"{"}Web} from "gd-sprest";<br/>
                    </p>
                    <p>
                        // Get the web<br/>
                        (new $REST.Web())<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Query the web<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;.query({"{"} Expand: ["RootFolder", "Fields", "Lists"] })<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;// Execute the request<br/>
                        &nbsp;&nbsp;&nbsp;&nbsp;.execute((web) => {});<br/>
                    </p>
                </li>
            </ol>
        </div>
    );

    // Render the component
    return (
        <Pivot>
            <PivotItem linkText="JavaScript">
                {jsContent}
            </PivotItem>
            <PivotItem linkText="TypeScript">
                {tsContent}
            </PivotItem>
            <PivotItem linkText="NodeJS">
                {nodeJSContent}
            </PivotItem>
        </Pivot>
    );
}