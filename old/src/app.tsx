import * as React from "react";
import * as Content from "./content";

/**
 * App
 */
export const App = () => {
    // The click event for the navigation item
    let navItemClick = (ev: React.MouseEvent<HTMLLIElement>) => {
        // Hide all the nav items
        let items = document.querySelectorAll(".isSelected") as NodeListOf<HTMLLIElement>;
        for (let i = 0; i < items.length; i++) {
            // Clear the class name
            items[i].className = "";
        }

        // Select this item
        ev.currentTarget.className = "isSelected";
    };

    // Render the app
    return (
        <div className="app">
            <ul className="nav">
                <li data-id="overview" className="isSelected">Overview</li>
                <li data-id="getting-started">Getting Started</li>
                <li data-id="projects">Projects</li>
                <li data-id="demos">Demos</li>
                <li data-id="gitHub">GitHub</li>
            </ul>
            <div className="navItems">
                <Content.Benefits />
                <Content.GettingStarted />
                <Content.Projects />
            </div>
        </div>
    );
}