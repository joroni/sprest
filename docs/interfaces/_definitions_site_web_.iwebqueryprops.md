[gd-sprest](../README.md) > ["definitions/site/web"](../modules/_definitions_site_web_.md) > [IWebQueryProps](../interfaces/_definitions_site_web_.iwebqueryprops.md)



# Interface: IWebQueryProps


Web Query Properties

## Hierarchy

**IWebQueryProps**

↳  [IWebResult](_definitions_site_web_.iwebresult.md)




↳  [IWebResult](_definitions_site_web_.iwebresult.md)




↳  [IWeb](_definitions_site_web_.iweb.md)









## Methods
<a id="allproperties"></a>

###  AllProperties

► **AllProperties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)

► **AllProperties**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:396](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L396)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Defined in [definitions/site/web.ts:416](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L416)*



Gets a collection of metadata for the Web site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="allowcreatedeclarativeworkflowforcurrentuser"></a>

###  AllowCreateDeclarativeWorkflowForCurrentUser

► **AllowCreateDeclarativeWorkflowForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:381](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L381)*



Specifies whether the current user can create declarative workflows. If not disabled on the Web application, the value is the same as the AllowCreateDeclarativeWorkflow property of the site collection. Default value: true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="allowdesignerforcurrentuser"></a>

###  AllowDesignerForCurrentUser

► **AllowDesignerForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:386](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L386)*



Gets a value that specifies whether the current user is allowed to use a designer application to customize this site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="allowmasterpageeditingforcurrentuser"></a>

###  AllowMasterPageEditingForCurrentUser

► **AllowMasterPageEditingForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:391](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L391)*



Gets a value that specifies whether the current user is allowed to edit the master page.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="allowrevertfromtemplateforcurrentuser"></a>

###  AllowRevertFromTemplateForCurrentUser

► **AllowRevertFromTemplateForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:401](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L401)*



Gets a value that specifies whether the current user is allowed to revert the site to a default site template.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="allowsavedeclarativeworkflowastemplateforcurrentuser"></a>

###  AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser

► **AllowSaveDeclarativeWorkflowAsTemplateForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:406](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L406)*



Specifies whether the current user can save declarative workflows as a template. If not disabled on the Web application, the value is the same as the AllowSaveDeclarativeWorkflowAsTemplate property of the site collection. Default value: true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="allowsavepublishdeclarativeworkflowforcurrentuser"></a>

###  AllowSavePublishDeclarativeWorkflowForCurrentUser

► **AllowSavePublishDeclarativeWorkflowForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/site/web.ts:411](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L411)*



Specifies whether the current user can save or publish declarative workflows. If not disabled on the Web application, the value is the same as the AllowSavePublishDeclarativeWorkflowAsTemplate property of the site collection. When enabled, can only be set by a site collection administrator. Default value: true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="apptiles"></a>

###  AppTiles

► **AppTiles**(): [IAppTiles](_definitions_lib_types_.iapptiles.md)




*Defined in [definitions/site/web.ts:418](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L418)*





**Returns:** [IAppTiles](_definitions_lib_types_.iapptiles.md)





___

<a id="associatedmembergroup"></a>

###  AssociatedMemberGroup

► **AssociatedMemberGroup**(): [IGroup](_definitions_user_group_.igroup.md)




*Defined in [definitions/site/web.ts:423](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L423)*



Gets or sets the group of users who have been given contribute permissions to the Web site.




**Returns:** [IGroup](_definitions_user_group_.igroup.md)





___

<a id="associatedownergroup"></a>

###  AssociatedOwnerGroup

► **AssociatedOwnerGroup**(): [IGroup](_definitions_user_group_.igroup.md)




*Defined in [definitions/site/web.ts:428](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L428)*



Gets or sets the associated owner group of the Web site.




**Returns:** [IGroup](_definitions_user_group_.igroup.md)





___

<a id="associatedvisitorgroup"></a>

###  AssociatedVisitorGroup

► **AssociatedVisitorGroup**(): [IGroup](_definitions_user_group_.igroup.md)




*Defined in [definitions/site/web.ts:433](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L433)*



Gets or sets the associated visitor group of the Web site.




**Returns:** [IGroup](_definitions_user_group_.igroup.md)





___

<a id="author"></a>

###  Author

► **Author**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/site/web.ts:435](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L435)*





**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="availablecontenttypes"></a>

###  AvailableContentTypes

► **AvailableContentTypes**(): [IBase](_definitions_lib_base_.ibase.md)[IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




*Defined in [definitions/site/web.ts:440](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L440)*



Gets the collection of all content types that apply to the current scope, including those of the current Web site, as well as any parent Web sites.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)





___

<a id="availablefields"></a>

###  AvailableFields

► **AvailableFields**(): [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md)




*Defined in [definitions/site/web.ts:445](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L445)*



Gets a value that specifies the collection of all fields available for the current scope, including those of the current site, as well as any parent sites.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IFields](_definitions_field_fields_.ifields.md)





___

<a id="clientwebparts"></a>

###  ClientWebParts

► **ClientWebParts**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:447](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L447)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="contenttypes"></a>

###  ContentTypes

► **ContentTypes**(): [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)

► **ContentTypes**(id: *`string`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Defined in [definitions/site/web.ts:452](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L452)*



Gets the content types that are associated with the web.




**Returns:** [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




*Defined in [definitions/site/web.ts:458](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L458)*



Gets the content type that are associated with the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the content type. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)





___

<a id="currentuser"></a>

###  CurrentUser

► **CurrentUser**(): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/site/web.ts:463](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L463)*



Gets the current user of the site.




**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="dataleakagepreventionstatusinfo"></a>

###  DataLeakagePreventionStatusInfo

► **DataLeakagePreventionStatusInfo**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:465](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L465)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="descriptionresource"></a>

###  DescriptionResource

► **DescriptionResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Defined in [definitions/site/web.ts:467](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L467)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="designerdownloadurlforcurrentuser"></a>

###  DesignerDownloadUrlForCurrentUser

► **DesignerDownloadUrlForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:472](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L472)*



Gets the URL where the current user can download SharePoint Designer.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

► **EffectiveBasePermissions**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/site/web.ts:477](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L477)*



Represents the intersection of permissions of the app principal and the user principal. In the app-only case, this property returns only the permissions of the app principal. To check only user permissions (ignoring app permissions), use the GetUserEffectivePermissions method.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="eventreceivers"></a>

###  EventReceivers

► **EventReceivers**(): [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)

► **EventReceivers**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Defined in [definitions/site/web.ts:482](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L482)*



Gets the event receivers associated with the web.




**Returns:** [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




*Defined in [definitions/site/web.ts:488](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L488)*



Gets the event receiver associated with the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the event receiver. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)





___

<a id="features"></a>

###  Features

► **Features**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:493](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L493)*



Gets a value that specifies the collection of features that are currently activated in the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fields"></a>

###  Fields

► **Fields**(): [IFields](_definitions_field_fields_.ifields.md)

► **Fields**(internalNameOrTitle: *`string`*): [IField](_definitions_field_field_.ifield.md)




*Defined in [definitions/site/web.ts:498](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L498)*



Gets the fields in the web.




**Returns:** [IFields](_definitions_field_fields_.ifields.md)




*Defined in [definitions/site/web.ts:504](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L504)*



Gets the field in the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| internalNameOrTitle | `string`   |  The internal name or title of the field. |





**Returns:** [IField](_definitions_field_field_.ifield.md)





___

<a id="folders"></a>

###  Folders

► **Folders**(): [IFolders](_definitions_file_folders_.ifolders.md)

► **Folders**(url: *`string`*): [IFolder](_definitions_file_folder_.ifolder.md)




*Defined in [definitions/site/web.ts:509](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L509)*



Gets the folders contained in the root folder.




**Returns:** [IFolders](_definitions_file_folders_.ifolders.md)




*Defined in [definitions/site/web.ts:515](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L515)*



Gets the folder contained in the root folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the sub-folder within the current folder. |





**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)





___

<a id="listtemplates"></a>

###  ListTemplates

► **ListTemplates**(): [IBase](_definitions_lib_base_.ibase.md)

► **ListTemplates**(name: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:531](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L531)*



Gets the list definitions and list templates available for creating lists on the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:537](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L537)*



Gets the list definition or list template available for creating lists on the site.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The list template form name. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="lists"></a>

###  Lists

► **Lists**(): [ILists](_definitions_list_lists_.ilists.md)

► **Lists**(name: *`string`*): [IList](_definitions_list_list_.ilist.md)




*Defined in [definitions/site/web.ts:520](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L520)*



Gets the lists in the Web.




**Returns:** [ILists](_definitions_list_lists_.ilists.md)




*Defined in [definitions/site/web.ts:526](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L526)*



Gets the list in the Web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The list name. |





**Returns:** [IList](_definitions_list_list_.ilist.md)





___

<a id="navigation"></a>

###  Navigation

► **Navigation**(): [IBase](_definitions_lib_base_.ibase.md)[INavigation](_definitions_lib_types_.inavigation.md)




*Defined in [definitions/site/web.ts:542](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L542)*



Gets a value that specifies the navigation structure on the site, including the Quick Launch area and the top navigation bar.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[INavigation](_definitions_lib_types_.inavigation.md)





___

<a id="parentweb"></a>

###  ParentWeb

► **ParentWeb**(): [IWeb](_definitions_site_web_.iweb.md)




*Defined in [definitions/site/web.ts:547](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L547)*



Gets the parent website of the specified website.




**Returns:** [IWeb](_definitions_site_web_.iweb.md)





___

<a id="pushnotificationsubscribers"></a>

###  PushNotificationSubscribers

► **PushNotificationSubscribers**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:552](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L552)*



Gets the collection of push notification subscribers over the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="recyclebin"></a>

###  RecycleBin

► **RecycleBin**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:557](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L557)*



Specifies the collection of recycle bin items of the recycle bin of the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="regionalsettings"></a>

###  RegionalSettings

► **RegionalSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:562](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L562)*



Gets the regional settings that are currently implemented on the website.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="roledefinitions"></a>

###  RoleDefinitions

► **RoleDefinitions**(): [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)

► **RoleDefinitions**(name: *`string`*): [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)




*Defined in [definitions/site/web.ts:567](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L567)*



Gets the role definitions for the web.




**Returns:** [IRoleDefinitions](_definitions_security_roledefinitions_.iroledefinitions.md)




*Defined in [definitions/site/web.ts:573](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L573)*



Gets the role definitions for the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The role definition name. |





**Returns:** [IRoleDefinition](_definitions_security_roledefinition_.iroledefinition.md)





___

<a id="rootfolder"></a>

###  RootFolder

► **RootFolder**(): [IFolder](_definitions_file_folder_.ifolder.md)

► **RootFolder**(url: *`string`*): [IFile](_definitions_file_file_.ifile.md)




*Defined in [definitions/site/web.ts:578](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L578)*



Gets the root folder in the web.




**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)




*Defined in [definitions/site/web.ts:584](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L584)*



Gets the file in the web's root folder.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  (Optional) The url of the file within the root folder. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="showurlstructureforcurrentuser"></a>

###  ShowUrlStructureForCurrentUser

► **ShowUrlStructureForCurrentUser**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:589](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L589)*



Gets a value that specifies whether the current user is able to view the file system structure of this site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="sitegroups"></a>

###  SiteGroups

► **SiteGroups**(): [ISiteGroups](_definitions_user_groups_.isitegroups.md)

► **SiteGroups**(name: *`string`*): [IGroup](_definitions_user_group_.igroup.md)




*Defined in [definitions/site/web.ts:594](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L594)*



Gets the site groups for the web.




**Returns:** [ISiteGroups](_definitions_user_groups_.isitegroups.md)




*Defined in [definitions/site/web.ts:600](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L600)*



Gets the site groups for the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| name | `string`   |  The group name. |





**Returns:** [IGroup](_definitions_user_group_.igroup.md)





___

<a id="siteuserinfolist"></a>

###  SiteUserInfoList

► **SiteUserInfoList**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:605](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L605)*



Gets the UserInfo list of the site collection that contains the Web site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="siteusers"></a>

###  SiteUsers

► **SiteUsers**(): [IUsers](_definitions_user_users_.iusers.md)

► **SiteUsers**(id: *`any`*): [IUser](_definitions_user_user_.iuser.md)




*Defined in [definitions/site/web.ts:610](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L610)*



Gets the collection of all users that belong to the site collection.




**Returns:** [IUsers](_definitions_user_users_.iusers.md)




*Defined in [definitions/site/web.ts:616](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L616)*



Gets the collection of all users that belong to the site collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The user id. |





**Returns:** [IUser](_definitions_user_user_.iuser.md)





___

<a id="supporteduilanguageids"></a>

###  SupportedUILanguageIds

► **SupportedUILanguageIds**(): [IBase](_definitions_lib_base_.ibase.md)`Number`




*Defined in [definitions/site/web.ts:621](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L621)*



Specifies the language code identifiers (LCIDs) of the languages that are enabled for the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Number`





___

<a id="themeinfo"></a>

###  ThemeInfo

► **ThemeInfo**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:626](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L626)*



The theming information for this site. This includes information like colors, fonts, border radii sizes etc.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="titleresource"></a>

###  TitleResource

► **TitleResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Defined in [definitions/site/web.ts:628](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L628)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="usercustomactions"></a>

###  UserCustomActions

► **UserCustomActions**(): [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)

► **UserCustomActions**(id: *`string`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




*Defined in [definitions/site/web.ts:633](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L633)*



Gets the user custom actions for the web.




**Returns:** [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




*Defined in [definitions/site/web.ts:639](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L639)*



Gets the user custom action for the web.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the user custom action. |





**Returns:** [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)





___

<a id="webinfos"></a>

###  WebInfos

► **WebInfos**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:644](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L644)*



Represents key properties of the subsites of a site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="webs"></a>

###  Webs

► **Webs**(): [IWebs](_definitions_site_webs_.iwebs.md)




*Defined in [definitions/site/web.ts:649](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L649)*



Gets a Web site collection object that represents all Web sites immediately beneath the Web site, excluding children of those Web sites.




**Returns:** [IWebs](_definitions_site_webs_.iwebs.md)





___

<a id="workflowassociations"></a>

###  WorkflowAssociations

► **WorkflowAssociations**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:654](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L654)*



Gets a value that specifies the collection of all workflow associations for the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="workflowtemplates"></a>

###  WorkflowTemplates

► **WorkflowTemplates**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/site/web.ts:659](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/site/web.ts#L659)*



Gets a value that specifies the collection of workflow templates associated with the site.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


