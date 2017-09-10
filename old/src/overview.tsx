import * as React from "react";

/**
 * Overview
 */
export const Overview = () => {
    // Render the component
    return (
        <div className="features">
            <div className="header">Add-In Model</div>
            <p>
                The add-in model uses the app web for SharePoint Hosted Apps/Add-Ins. The provider hosted model would use CSOM, and not this library.
                This framework has built-in helper methods and a global flag for determining which web the request should execute against Host vs App.
                The request will be automatically updated based on the target web, so there is no additional code required from the developer.
            </p>
            <div className="header">Automation</div>
            <p>
                The "SharePoint Configuration" class of the framework, allows the developer to define configuration files for the SharePoint solution.
                This configuraiton files includes intellisense, to ensure the developer is able to easily create them without references. There are built-in
                methods for execution (install, uninstall, etc).
            </p>
            <div className="header">Intellisense</div>
            <p>
                One of the more important features of this framework is the intellisense. The classes have been setup to ensure the developer does not need
                to define the output type of the request. The "Types" and "SPTypes" classes can both be imported into the project. The "Types" class includes allows
                of the interfaces available in the library. The "SPTypes" class contains all of the enumerators in SharePoint.
            </p>
            <div className="header">Powershell-Like Experience</div>
            <p>
                This feature is a key difference between the office-pnp-js framework and this one. The library
            </p>
            <ul>
                <li>Automation of SharePoint assets.</li>
                <li>Full intellisense</li>
                <li>Generate request information for NodeJS applications</li>
                <li>PowerShell-Like experience in the browser console</li>
            </ul>
        </div>
    );
}