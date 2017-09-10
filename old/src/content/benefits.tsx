import * as React from "react";

/**
 * Benefits
 */
export const Benefits = () => {
  // Render the content
  return (
    <div className="benefits">
      <h2>Benefits:</h2>
      <ul>
        <li>Ability to control the order of asynchronous requests</li>
        <li>Ability to generate request urls for NodeJS applications</li>
        <li>Easy to execute requests to/from the App/Host web</li>
        <li>Full intellisense for the REST API</li>
        <li>PowerShell-Like experience in the browser console</li>
        <li>Create SharePoint solution assets through a configuration file
            <ul>
            <li>Content Types</li>
            <li>Fields</li>
            <li>Lists</li>
            <li>User Custom Actions</li>
            <li>WebParts</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}