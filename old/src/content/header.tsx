import * as React from "react";

/**
 * Header
 */
export const Header = () => {
    // Render the header
    return (
        <div className="header">
            <a href="https://www.npmjs.com/package/gd-sprest">
                <img src="https://badge.fury.io/js/gd-sprest.svg" alt="Current Version" />
            </a>
            <a href="https://www.npmjs.com/package/gd-sprest">
                <img src="https://img.shields.io/npm/dm/gd-sprest.svg" alt="Downloads" />
            </a>
            <a href="https://www.npmjs.com/package/gd-sprest">
                <img src="https://img.shields.io/npm/dt/gd-sprest.svg" alt="Total Downloads" />
            </a>
        </div>
    );
}