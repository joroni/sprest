
# SharePoint Online/On-Premise REST Framework
An easy way to develop against the SharePoint 2013/Online REST API.
*Please report issues. I am constantly updating/fixing/testing to make this library better.*

[![Current Version](https://badge.fury.io/js/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Downloads](https://img.shields.io/npm/dm/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)
[![Total Downloads](https://img.shields.io/npm/dt/gd-sprest.svg)](https://www.npmjs.com/package/gd-sprest)

## Benefits:
* Ability to control the order of asynchronous requests
* Ability to generate request urls for NodeJS applications
* Easy to execute requests to/from the App/Host web
* Full intellisense for the REST API
* PowerShell-Like experience in the browser console
* Create SharePoint solution assets through a configuration file
    * Content Types
    * Fields
    * Lists
    * User Custom Actions
    * WebParts

## Demos:
### VS Code - Intellisense
![VS Code](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-VSCode.gif)

### PowerShell-Like Experience in the Browser Console
![PowerShell](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-ConsoleWindow.gif)

### SharePoint Configuration - Easily create solution assets
![Automation](https://raw.githubusercontent.com/gunjandatta/sprest/master/images/demo-SPConfig.gif)

## Documentation:
[Click here](https://github.com/gunjandatta/sprest/wiki) to view the documentation for the framework.

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

## Get Started:
### Node Package Manager
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
request = $REST.Web("https://dev.sharepoint.com").Lists().add({ BaseTemplate: $REST.SPTypes.ListTemplateType.GenericList, Title: "New List" });
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
#### React
```
import {
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

### In Browser Requests
1. Download the gd-sprest.min.js script from the "dist" folder
2. Upload the script file to a SharePoint document library
3. Reference the script in any page
4. Open the console window and use the $REST global variable


## Index

### External modules

* ["definitions/complexTypes"](modules/_definitions_complextypes_.md)
* ["definitions/contentType/contentType"](modules/_definitions_contenttype_contenttype_.md)
* ["definitions/contentType/contentTypes"](modules/_definitions_contenttype_contenttypes_.md)
* ["definitions/customAction/userCustomAction"](modules/_definitions_customaction_usercustomaction_.md)
* ["definitions/customAction/userCustomActions"](modules/_definitions_customaction_usercustomactions_.md)
* ["definitions/eventReceiver/eventReceiver"](modules/_definitions_eventreceiver_eventreceiver_.md)
* ["definitions/eventReceiver/eventReceivers"](modules/_definitions_eventreceiver_eventreceivers_.md)
* ["definitions/field/field"](modules/_definitions_field_field_.md)
* ["definitions/field/fieldLinks"](modules/_definitions_field_fieldlinks_.md)
* ["definitions/field/fields"](modules/_definitions_field_fields_.md)
* ["definitions/file/file"](modules/_definitions_file_file_.md)
* ["definitions/file/fileVersion"](modules/_definitions_file_fileversion_.md)
* ["definitions/file/fileVersions"](modules/_definitions_file_fileversions_.md)
* ["definitions/file/files"](modules/_definitions_file_files_.md)
* ["definitions/file/folder"](modules/_definitions_file_folder_.md)
* ["definitions/file/folders"](modules/_definitions_file_folders_.md)
* ["definitions/lib/base"](modules/_definitions_lib_base_.md)
* ["definitions/lib/contextInfo"](modules/_definitions_lib_contextinfo_.md)
* ["definitions/lib/email"](modules/_definitions_lib_email_.md)
* ["definitions/lib/helper"](modules/_definitions_lib_helper_.md)
* ["definitions/lib/jsLink"](modules/_definitions_lib_jslink_.md)
* ["definitions/lib/methodInfo"](modules/_definitions_lib_methodinfo_.md)
* ["definitions/lib/oData"](modules/_definitions_lib_odata_.md)
* ["definitions/lib/promise"](modules/_definitions_lib_promise_.md)
* ["definitions/lib/requestType"](modules/_definitions_lib_requesttype_.md)
* ["definitions/lib/rest"](modules/_definitions_lib_rest_.md)
* ["definitions/lib/results"](modules/_definitions_lib_results_.md)
* ["definitions/lib/search"](modules/_definitions_lib_search_.md)
* ["definitions/lib/sptypes"](modules/_definitions_lib_sptypes_.md)
* ["definitions/lib/targetInfo"](modules/_definitions_lib_targetinfo_.md)
* ["definitions/lib/types"](modules/_definitions_lib_types_.md)
* ["definitions/list/attachments"](modules/_definitions_list_attachments_.md)
* ["definitions/list/item"](modules/_definitions_list_item_.md)
* ["definitions/list/items"](modules/_definitions_list_items_.md)
* ["definitions/list/list"](modules/_definitions_list_list_.md)
* ["definitions/list/lists"](modules/_definitions_list_lists_.md)
* ["definitions/list/versions"](modules/_definitions_list_versions_.md)
* ["definitions/list/view"](modules/_definitions_list_view_.md)
* ["definitions/list/viewFieldCollection"](modules/_definitions_list_viewfieldcollection_.md)
* ["definitions/list/views"](modules/_definitions_list_views_.md)
* ["definitions/propertyValues"](modules/_definitions_propertyvalues_.md)
* ["definitions/security/roleAssignment"](modules/_definitions_security_roleassignment_.md)
* ["definitions/security/roleAssignments"](modules/_definitions_security_roleassignments_.md)
* ["definitions/security/roleDefinition"](modules/_definitions_security_roledefinition_.md)
* ["definitions/security/roleDefinitions"](modules/_definitions_security_roledefinitions_.md)
* ["definitions/site/site"](modules/_definitions_site_site_.md)
* ["definitions/site/web"](modules/_definitions_site_web_.md)
* ["definitions/site/webs"](modules/_definitions_site_webs_.md)
* ["definitions/social/peopleManager"](modules/_definitions_social_peoplemanager_.md)
* ["definitions/social/personProperties"](modules/_definitions_social_personproperties_.md)
* ["definitions/social/profileLoader"](modules/_definitions_social_profileloader_.md)
* ["definitions/social/socialFeed"](modules/_definitions_social_socialfeed_.md)
* ["definitions/social/userProfile"](modules/_definitions_social_userprofile_.md)
* ["definitions/user/group"](modules/_definitions_user_group_.md)
* ["definitions/user/groups"](modules/_definitions_user_groups_.md)
* ["definitions/user/peoplePicker"](modules/_definitions_user_peoplepicker_.md)
* ["definitions/user/user"](modules/_definitions_user_user_.md)
* ["definitions/user/users"](modules/_definitions_user_users_.md)
* ["definitions/webpart/limitedWebPartManager"](modules/_definitions_webpart_limitedwebpartmanager_.md)
* ["gd-sprest"](modules/_gd_sprest_.md)
* ["lib/contextInfo"](modules/_lib_contextinfo_.md)
* ["lib/email"](modules/_lib_email_.md)
* ["lib/helper/app"](modules/_lib_helper_app_.md)
* ["lib/helper/index"](modules/_lib_helper_index_.md)
* ["lib/helper/jslink"](modules/_lib_helper_jslink_.md)
* ["lib/helper/loader"](modules/_lib_helper_loader_.md)
* ["lib/helper/spCfg"](modules/_lib_helper_spcfg_.md)
* ["lib/jslink"](modules/_lib_jslink_.md)
* ["lib/list"](modules/_lib_list_.md)
* ["lib/peopleManager"](modules/_lib_peoplemanager_.md)
* ["lib/peoplePicker"](modules/_lib_peoplepicker_.md)
* ["lib/profileLoader"](modules/_lib_profileloader_.md)
* ["lib/search"](modules/_lib_search_.md)
* ["lib/site"](modules/_lib_site_.md)
* ["lib/socialFeed"](modules/_lib_socialfeed_.md)
* ["lib/userProfile"](modules/_lib_userprofile_.md)
* ["lib/web"](modules/_lib_web_.md)
* ["mapper/attachment/attachment"](modules/_mapper_attachment_attachment_.md)
* ["mapper/attachmentFiles/attachmentFiles"](modules/_mapper_attachmentfiles_attachmentfiles_.md)
* ["mapper/audit/audit"](modules/_mapper_audit_audit_.md)
* ["mapper/contentType/contentType"](modules/_mapper_contenttype_contenttype_.md)
* ["mapper/contentType/contentTypes"](modules/_mapper_contenttype_contenttypes_.md)
* ["mapper/eventReceiver/eventReceiver"](modules/_mapper_eventreceiver_eventreceiver_.md)
* ["mapper/eventReceiver/eventReceivers"](modules/_mapper_eventreceiver_eventreceivers_.md)
* ["mapper/field/field"](modules/_mapper_field_field_.md)
* ["mapper/field/fields"](modules/_mapper_field_fields_.md)
* ["mapper/fieldLink/fieldLinks"](modules/_mapper_fieldlink_fieldlinks_.md)
* ["mapper/file/file"](modules/_mapper_file_file_.md)
* ["mapper/file/files"](modules/_mapper_file_files_.md)
* ["mapper/fileVersion/fileVersion"](modules/_mapper_fileversion_fileversion_.md)
* ["mapper/fileVersion/fileVersions"](modules/_mapper_fileversion_fileversions_.md)
* ["mapper/folder/folder"](modules/_mapper_folder_folder_.md)
* ["mapper/folder/folders"](modules/_mapper_folder_folders_.md)
* ["mapper/group/group"](modules/_mapper_group_group_.md)
* ["mapper/group/siteGroups"](modules/_mapper_group_sitegroups_.md)
* ["mapper/index"](modules/_mapper_index_.md)
* ["mapper/item/items"](modules/_mapper_item_items_.md)
* ["mapper/item/listItem"](modules/_mapper_item_listitem_.md)
* ["mapper/limitedWebPartManager/limitedWebPartManager"](modules/_mapper_limitedwebpartmanager_limitedwebpartmanager_.md)
* ["mapper/list/list"](modules/_mapper_list_list_.md)
* ["mapper/list/lists"](modules/_mapper_list_lists_.md)
* ["mapper/peopleManager/peopleManager"](modules/_mapper_peoplemanager_peoplemanager_.md)
* ["mapper/peoplePicker/peoplePicker"](modules/_mapper_peoplepicker_peoplepicker_.md)
* ["mapper/profileLoader/profileLoader"](modules/_mapper_profileloader_profileloader_.md)
* ["mapper/propertyValues/propertyValues"](modules/_mapper_propertyvalues_propertyvalues_.md)
* ["mapper/roleAssignment/roleAssignment"](modules/_mapper_roleassignment_roleassignment_.md)
* ["mapper/roleAssignment/roleAssignments"](modules/_mapper_roleassignment_roleassignments_.md)
* ["mapper/roleDefinition/roleDefinition"](modules/_mapper_roledefinition_roledefinition_.md)
* ["mapper/roleDefinition/roleDefinitions"](modules/_mapper_roledefinition_roledefinitions_.md)
* ["mapper/search/search"](modules/_mapper_search_search_.md)
* ["mapper/site/site"](modules/_mapper_site_site_.md)
* ["mapper/socialFeed/socialFeed"](modules/_mapper_socialfeed_socialfeed_.md)
* ["mapper/user/user"](modules/_mapper_user_user_.md)
* ["mapper/user/users"](modules/_mapper_user_users_.md)
* ["mapper/userCustomAction/userCustomAction"](modules/_mapper_usercustomaction_usercustomaction_.md)
* ["mapper/userCustomAction/userCustomActions"](modules/_mapper_usercustomaction_usercustomactions_.md)
* ["mapper/userProfile/userProfile"](modules/_mapper_userprofile_userprofile_.md)
* ["mapper/version/version"](modules/_mapper_version_version_.md)
* ["mapper/view/view"](modules/_mapper_view_view_.md)
* ["mapper/view/views"](modules/_mapper_view_views_.md)
* ["mapper/viewFieldCollection/viewFieldCollection"](modules/_mapper_viewfieldcollection_viewfieldcollection_.md)
* ["mapper/web/web"](modules/_mapper_web_web_.md)
* ["mapper/web/webinfos"](modules/_mapper_web_webinfos_.md)
* ["mapper/web/webs"](modules/_mapper_web_webs_.md)
* ["types/requestType"](modules/_types_requesttype_.md)
* ["types/spConfigTypes"](modules/_types_spconfigtypes_.md)
* ["types/sptypes"](modules/_types_sptypes_.md)
* ["utils/base"](modules/_utils_base_.md)
* ["utils/dependencies"](modules/_utils_dependencies_.md)
* ["utils/methodInfo"](modules/_utils_methodinfo_.md)
* ["utils/oData"](modules/_utils_odata_.md)
* ["utils/promise"](modules/_utils_promise_.md)
* ["utils/targetInfo"](modules/_utils_targetinfo_.md)
* ["utils/xhrRequest"](modules/_utils_xhrrequest_.md)



---
