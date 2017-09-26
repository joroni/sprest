---
layout: default
---
[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
*Please report issues. I am constantly updating/fixing/testing to make this library better.*

## Overview:
#### Add-In Model
The add-in model uses the app web for SharePoint Hosted Apps/Add-Ins. The provider hosted model would use CSOM, and not this library. This framework has built-in helper methods and a global flag for determining which web the request should execute against Host vs App. The request will be automatically updated based on the target web, so there is no additional code required from the developer.
#### Automation
The "SharePoint Configuration" class of the framework, allows the developer to define configuration files for the SharePoint solution. This configuraiton files includes intellisense, to ensure the developer is able to easily create them without references. There are built-in methods for execution (install, uninstall, etc).
#### Intellisense
One of the more important features of this framework is the intellisense. The classes have been setup to ensure the developer does not need to define the output type of the request. The "Types" and "SPTypes" classes can both be imported into the project. The "Types" class includes allows of the interfaces available in the library. The "SPTypes" class contains all of the enumerators in SharePoint.
#### Powershell-Like Experience
The library can utilize the console browser, available in the development tools of the browser. Once the library is referenced, requests to SharePoint can be executed directly in the browser console.
#### React Extension
The [gd-sprest-react](https://github.com/gunjandatta/sprest-react) extends the [Office Fabric React Framework](https://dev.office.com/fabric) with components designed for SharePoint 2013/Online.
#### Documentation:
[Click here](https://github.com/gunjandatta/sprest/wiki) to view the wiki.
[Click here](https://gunjandatta.github.io/sprest/docs/globals.html) for an overview of the gd-sprest library.
[Click here](https://gunjandatta.github.io/sprest/docs/react/globals.html) for an overview of the gd-sprest-react library.

## Getting Started:
#### Node Package Manager
```
npm install gd-sprest --save
```
#### JavaScript
```
var $REST = require("gd-sprest");

// Get the current web and lists
$REST.Web().query({
    Expand: ["Lists"]
}).execute(function(web) {
    // Parse the lists
    for(var i=0; i<web.Lists.results.length; i++) {
        var list = web.Lists.results[i];
    }
});
```
#### NodeJS
```
const $REST = require("gd-sprest);

// Create a new generic list.
request = $REST.Web("https://dev.sharepoint.com")
    .Lists().add({
        BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList,
        Title: "New List"
    });

// Log the request information
console.log(request.getInfo());

// Console Output:
// {
//     data: '{"BaseTemplate":100,"Title":"New List","__metadata":{"type":"SP.List"}}',
//     method: 'POST',
//     url: 'https://dev.sharepoint.com'
// }
```
#### TypeScript
```
import { List }

// Get the "Site Assets" library, fields and views
(new List("Site Assets"))
    // Query the list
    .query({
        Expand: ["Fields", "Views"]
    })
    // Execute the request
    .execute((list) => {
        // Parse the fields
        for(let i=0; i<list.Fields.results.length; i++) {
            let field = list.Fields.results[i];
        }

        // Parse the views
        for(let i=0; i<list.Views.results.length; i++) {
            let field = list.Views.results[i];
        }
    });
```
#### Available Libraries
```
import {
    $REST,
    ContextInfo,
    Email,
    Helper,
    JSLink,
    List,
    PeopleManager,
    PeoplePicker,
    ProfileLoader,
    RequestType,
    Search,
    Site,
    SocialFeed,
    SPTypes,
    Types,
    UserProfile,
    Web
} from "gd-sprest";
```

### Example Projects
* [Add/Remove Site Collection User Custom Actions](https://github.com/gunjandatta/sprest-sitecustomactions)
* [Calendar Event Callout](https://github.com/gunjandatta/sp-event-callout)
* [Office Fabric BCS List](https://github.com/gunjandatta/sprest-bcs-list)
* [Office Fabric React](https://github.com/gunjandatta/sprest-fabric-react)
* [Office Fabric UI Dashboard](https://github.com/gunjandatta/sprest-list)
* [Query >5000 Items Example](https://github.com/gunjandatta/sprest-large-list)
* [SharePoint JS-Link Starter Project](https://github.com/gunjandatta/sp-jslink)
* [SharePoint React/Redux Starter Project](https://github.com/gunjandatta/sp-react-redux)
* [SharePoint Scripts Starter Project](https://github.com/gunjandatta/sp-scripts)
* [SharePoint React Components](https://github.com/gunjandatta/sprest-react)
* [WebPart Examples](https://github.com/gunjandatta/sprest-webparts)