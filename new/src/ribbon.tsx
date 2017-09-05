import * as React from "react";
import { Image, Pivot, PivotItem } from "office-ui-fabric-react";

/**
 * Ribbon
 */
export const Ribbon = ({ onNavItemClick }) => {
    // Render the ribbon
    return (
        <div className="ribbon">
            <div className="rb-left">
                <Pivot onLinkClick={onNavItemClick}>
                    <PivotItem className="main-item" linkText="Home" />
                    <PivotItem className="main-item" linkText="gd-sprest-react" />
                    <PivotItem className="main-item" linkText="gd-sprest-webparts" />
                    <PivotItem className="main-item" linkText="gitHub" />
                </Pivot>
            </div>
            <div className="rb-right">
                <div className="icons" onClick={ev => { document.location.href = "https://www.npmjs.com/package/gd-sprest"; }}>
                    <Image alt="Total Downloads" src="https://img.shields.io/npm/dt/gd-sprest.svg" />
                    <Image alt="Downloads" src="https://img.shields.io/npm/dm/gd-sprest.svg" />
                    <Image alt="Current Version" src="https://img.shields.io/npm/v/gd-sprest.svg" />
                </div>
            </div>
        </div>
    );
}