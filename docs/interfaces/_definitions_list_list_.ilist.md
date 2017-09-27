[gd-sprest](../README.md) > ["definitions/list/list"](../modules/_definitions_list_list_.md) > [IList](../interfaces/_definitions_list_list_.ilist.md)



# Interface: IList


List

## Hierarchy


 [IListMethods](_definitions_list_list_.ilistmethods.md)




 [IListQueryProps](_definitions_list_list_.ilistqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)

**↳ IList**








## Constructors
<a id="constructor"></a>


### ⊕ **new IList**(listName: *`string`*, targetInfo?: *[ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)*): [IList](_definitions_list_list_.ilist.md)



*Defined in [definitions/list/list.ts:633](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L633)*



Constructor


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| listName | `string`   |  The name of the list. |
| targetInfo | [ITargetInfo](_definitions_lib_targetinfo_.itargetinfo.md)   |  (Optional) The target information. |





**Returns:** [IList](_definitions_list_list_.ilist.md)

---


## Properties
<a id="existsfl"></a>

###  existsFl

**●  existsFl**:  *`boolean`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[existsFl](_definitions_lib_base_.ibase.md#existsfl)*

*Defined in [definitions/lib/base.ts:12](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L12)*



True, if the object exists, false otherwise.




___

<a id="parent"></a>

###  parent

**●  parent**:  *`any`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[parent](_definitions_lib_base_.ibase.md#parent)*

*Defined in [definitions/lib/base.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L15)*



The parent object, which created this object.




___

<a id="requesttype"></a>

###  requestType

**●  requestType**:  *[IRequestType](../modules/_definitions_lib_requesttype_.md#irequesttype)* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[requestType](_definitions_lib_base_.ibase.md#requesttype)*

*Defined in [definitions/lib/base.ts:21](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L21)*



The request type




___

<a id="response"></a>

###  response

**●  response**:  *`string`* 

*Inherited from [IBase](_definitions_lib_base_.ibase.md).[response](_definitions_lib_base_.ibase.md#response)*

*Defined in [definitions/lib/base.ts:18](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L18)*



The response




___


## Methods
<a id="contenttypes"></a>

###  ContentTypes

► **ContentTypes**(): [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)

► **ContentTypes**(id: *`string`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[ContentTypes](_definitions_list_list_.ilistqueryprops.md#contenttypes)*

*Defined in [definitions/list/list.ts:282](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L282)*



Gets the content types that are associated with the list.




**Returns:** [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[ContentTypes](_definitions_list_list_.ilistqueryprops.md#contenttypes)*

*Defined in [definitions/list/list.ts:288](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L288)*



Gets the content types that are associated with the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the content type. |





**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)





___

<a id="datasource"></a>

###  DataSource

► **DataSource**(): [IBase](_definitions_lib_base_.ibase.md)`Array`.<`string`>




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DataSource](_definitions_list_list_.ilistqueryprops.md#datasource)*

*Defined in [definitions/list/list.ts:293](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L293)*



Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Array`.<`string`>





___

<a id="defaultdisplayformurl"></a>

###  DefaultDisplayFormUrl

► **DefaultDisplayFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DefaultDisplayFormUrl](_definitions_list_list_.ilistqueryprops.md#defaultdisplayformurl)*

*Defined in [definitions/list/list.ts:298](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L298)*



Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaulteditformurl"></a>

###  DefaultEditFormUrl

► **DefaultEditFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DefaultEditFormUrl](_definitions_list_list_.ilistqueryprops.md#defaulteditformurl)*

*Defined in [definitions/list/list.ts:303](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L303)*



Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaultnewformurl"></a>

###  DefaultNewFormUrl

► **DefaultNewFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DefaultNewFormUrl](_definitions_list_list_.ilistqueryprops.md#defaultnewformurl)*

*Defined in [definitions/list/list.ts:308](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L308)*



Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaultview"></a>

###  DefaultView

► **DefaultView**(): [IView](_definitions_list_view_.iview.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DefaultView](_definitions_list_list_.ilistqueryprops.md#defaultview)*

*Defined in [definitions/list/list.ts:313](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L313)*



Gets the default list view.




**Returns:** [IView](_definitions_list_view_.iview.md)





___

<a id="defaultviewurl"></a>

###  DefaultViewUrl

► **DefaultViewUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DefaultViewUrl](_definitions_list_list_.ilistqueryprops.md#defaultviewurl)*

*Defined in [definitions/list/list.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L318)*



Gets the URL of the default view for the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="descriptionresouce"></a>

###  DescriptionResouce

► **DescriptionResouce**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[DescriptionResouce](_definitions_list_list_.ilistqueryprops.md#descriptionresouce)*

*Defined in [definitions/list/list.ts:320](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L320)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

► **EffectiveBasePermissions**(): [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[EffectiveBasePermissions](_definitions_list_list_.ilistqueryprops.md#effectivebasepermissions)*

*Defined in [definitions/list/list.ts:325](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L325)*



Gets a value that specifies the effective permissions on the list that are assigned to the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)





___

<a id="effectivebasepermissionsforui"></a>

###  EffectiveBasePermissionsForUI

► **EffectiveBasePermissionsForUI**(): [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[EffectiveBasePermissionsForUI](_definitions_list_list_.ilistqueryprops.md#effectivebasepermissionsforui)*

*Defined in [definitions/list/list.ts:330](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L330)*



Gets a value that specifies the effective permissions on the list that are for the user export interface.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)





___

<a id="eventreceivers"></a>

###  EventReceivers

► **EventReceivers**(): [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)

► **EventReceivers**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[EventReceivers](_definitions_list_list_.ilistqueryprops.md#eventreceivers)*

*Defined in [definitions/list/list.ts:335](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L335)*



Gets the event receivers associated with the list.




**Returns:** [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[EventReceivers](_definitions_list_list_.ilistqueryprops.md#eventreceivers)*

*Defined in [definitions/list/list.ts:341](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L341)*



Gets the event receiver associated with the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the event receiver. |





**Returns:** [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)





___

<a id="fields"></a>

###  Fields

► **Fields**(): [IFields](_definitions_field_fields_.ifields.md)

► **Fields**(internalNameOrTitle: *`string`*): [IField](_definitions_field_field_.ifield.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Fields](_definitions_list_list_.ilistqueryprops.md#fields)*

*Defined in [definitions/list/list.ts:346](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L346)*



Gets the fields in the list.




**Returns:** [IFields](_definitions_field_fields_.ifields.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Fields](_definitions_list_list_.ilistqueryprops.md#fields)*

*Defined in [definitions/list/list.ts:352](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L352)*



Gets the field in the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| internalNameOrTitle | `string`   |  The internal name or title of the field. |





**Returns:** [IField](_definitions_field_field_.ifield.md)





___

<a id="firstuniqueancestorsecurableobject"></a>

###  FirstUniqueAncestorSecurableObject

► **FirstUniqueAncestorSecurableObject**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[FirstUniqueAncestorSecurableObject](_definitions_list_list_.ilistqueryprops.md#firstuniqueancestorsecurableobject)*

*Defined in [definitions/list/list.ts:357](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L357)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="forms"></a>

###  Forms

► **Forms**(): [IBase](_definitions_lib_base_.ibase.md)

► **Forms**(id: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Forms](_definitions_list_list_.ilistqueryprops.md#forms)*

*Defined in [definitions/list/list.ts:362](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L362)*



Gets the list forms in the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Forms](_definitions_list_list_.ilistqueryprops.md#forms)*

*Defined in [definitions/list/list.ts:368](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L368)*



Gets the list form in the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the form. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="hasuniqueroleassignments"></a>

###  HasUniqueRoleAssignments

► **HasUniqueRoleAssignments**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[HasUniqueRoleAssignments](_definitions_list_list_.ilistqueryprops.md#hasuniqueroleassignments)*

*Defined in [definitions/list/list.ts:373](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L373)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

► **InformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[InformationRightsManagementSettings](_definitions_list_list_.ilistqueryprops.md#informationrightsmanagementsettings)*

*Defined in [definitions/list/list.ts:378](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L378)*



Gets a value that specifies the information rights management settings.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="issiteassetslibrary"></a>

###  IsSiteAssetsLibrary

► **IsSiteAssetsLibrary**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[IsSiteAssetsLibrary](_definitions_list_list_.ilistqueryprops.md#issiteassetslibrary)*

*Defined in [definitions/list/list.ts:383](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L383)*



Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="items"></a>

###  Items

► **Items**(): [IListItems](_definitions_list_items_.ilistitems.md)

► **Items**(id: *`number`*): [IListItem](_definitions_list_item_.ilistitem.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Items](_definitions_list_list_.ilistqueryprops.md#items)*

*Defined in [definitions/list/list.ts:388](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L388)*



Gets the list items in the list.




**Returns:** [IListItems](_definitions_list_items_.ilistitems.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Items](_definitions_list_list_.ilistqueryprops.md#items)*

*Defined in [definitions/list/list.ts:394](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L394)*



Gets the list item in the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `number`   |  The id of the list item. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)





___

<a id="onquicklaunch"></a>

###  OnQuickLaunch

► **OnQuickLaunch**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[OnQuickLaunch](_definitions_list_list_.ilistqueryprops.md#onquicklaunch)*

*Defined in [definitions/list/list.ts:399](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L399)*



Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="parentweb"></a>

###  ParentWeb

► **ParentWeb**(): [IWeb](_definitions_site_web_.iweb.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[ParentWeb](_definitions_list_list_.ilistqueryprops.md#parentweb)*

*Defined in [definitions/list/list.ts:404](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L404)*



Gets a value that specifies the site that contains the list.




**Returns:** [IWeb](_definitions_site_web_.iweb.md)





___

<a id="roleassignments"></a>

###  RoleAssignments

► **RoleAssignments**(): [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)

► **RoleAssignments**(id: *`string`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[RoleAssignments](_definitions_list_list_.ilistqueryprops.md#roleassignments)*

*Defined in [definitions/list/list.ts:409](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L409)*



Gets the role assignments for the securable object.




**Returns:** [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[RoleAssignments](_definitions_list_list_.ilistqueryprops.md#roleassignments)*

*Defined in [definitions/list/list.ts:415](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L415)*



Gets the role assignments for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The role assignment id. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)





___

<a id="rootfolder"></a>

###  RootFolder

► **RootFolder**(): [IFolder](_definitions_file_folder_.ifolder.md)

► **RootFolder**(url: *`string`*): [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[RootFolder](_definitions_list_list_.ilistqueryprops.md#rootfolder)*

*Defined in [definitions/list/list.ts:420](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L420)*



Gets the root folder of the list.




**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[RootFolder](_definitions_list_list_.ilistqueryprops.md#rootfolder)*

*Defined in [definitions/list/list.ts:426](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L426)*



Gets the file in the root folder of the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| url | `string`   |  The url of the file within the root folder. |





**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="schemaxml"></a>

###  SchemaXml

► **SchemaXml**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[SchemaXml](_definitions_list_list_.ilistqueryprops.md#schemaxml)*

*Defined in [definitions/list/list.ts:431](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L431)*



Gets a value that specifies the list schema of the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="subscriptions"></a>

###  Subscriptions

► **Subscriptions**(): [IBase](_definitions_lib_base_.ibase.md)[IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Subscriptions](_definitions_list_list_.ilistqueryprops.md#subscriptions)*

*Defined in [definitions/list/list.ts:433](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L433)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBase](_definitions_lib_base_.ibase.md)





___

<a id="titleresource"></a>

###  TitleResource

► **TitleResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[TitleResource](_definitions_list_list_.ilistqueryprops.md#titleresource)*

*Defined in [definitions/list/list.ts:435](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L435)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="usercustomactions"></a>

###  UserCustomActions

► **UserCustomActions**(): [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)

► **UserCustomActions**(id: *`string`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[UserCustomActions](_definitions_list_list_.ilistqueryprops.md#usercustomactions)*

*Defined in [definitions/list/list.ts:440](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L440)*



Gets the user custom actions for the list.




**Returns:** [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[UserCustomActions](_definitions_list_list_.ilistqueryprops.md#usercustomactions)*

*Defined in [definitions/list/list.ts:446](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L446)*



Gets the user custom action(s) for the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the user custom action. |





**Returns:** [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)





___

<a id="validationformula"></a>

###  ValidationFormula

► **ValidationFormula**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[ValidationFormula](_definitions_list_list_.ilistqueryprops.md#validationformula)*

*Defined in [definitions/list/list.ts:451](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L451)*



Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="validationmessage"></a>

###  ValidationMessage

► **ValidationMessage**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[ValidationMessage](_definitions_list_list_.ilistqueryprops.md#validationmessage)*

*Defined in [definitions/list/list.ts:456](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L456)*



Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="views"></a>

###  Views

► **Views**(): [IViews](_definitions_list_views_.iviews.md)

► **Views**(id: *`string`*): [IView](_definitions_list_view_.iview.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Views](_definitions_list_list_.ilistqueryprops.md#views)*

*Defined in [definitions/list/list.ts:461](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L461)*



Gets the views in the list.




**Returns:** [IViews](_definitions_list_views_.iviews.md)




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[Views](_definitions_list_list_.ilistqueryprops.md#views)*

*Defined in [definitions/list/list.ts:467](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L467)*



Gets the view in the list.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The id of the view. |





**Returns:** [IView](_definitions_list_view_.iview.md)





___

<a id="workflowassociations"></a>

###  WorkflowAssociations

► **WorkflowAssociations**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[WorkflowAssociations](_definitions_list_list_.ilistqueryprops.md#workflowassociations)*

*Defined in [definitions/list/list.ts:472](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L472)*



Gets a value that specifies the collection of all workflow associations for the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="writesecurity"></a>

###  WriteSecurity

► **WriteSecurity**(): [IBase](_definitions_lib_base_.ibase.md)`number`




*Inherited from [IListQueryProps](_definitions_list_list_.ilistqueryprops.md).[WriteSecurity](_definitions_list_list_.ilistqueryprops.md#writesecurity)*

*Defined in [definitions/list/list.ts:474](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L474)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)`number`





___

<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): `any`




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[breakRoleInheritance](_definitions_list_list_.ilistmethods.md#breakroleinheritance)*

*Defined in [definitions/list/list.ts:35](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L35)*



Creates unique role assignments for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| copyRoleAssignments | `any`   |  True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user. |
| clearSubScopes | `any`   |  True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object. |





**Returns:** `any`





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[delete](_definitions_list_list_.ilistmethods.md#delete)*

*Defined in [definitions/list/list.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L40)*



Deletes the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="done"></a>

###  done

► **done**(callback?: *function*): `any`

► **done**(callback?: *function*): `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:27](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L27)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[done](_definitions_lib_base_.ibase.md#done)*

*Defined in [definitions/lib/base.ts:33](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L33)*



Method to wait for the requests to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** `any`





___

<a id="execute"></a>

###  execute

► **execute**(callback?: *function*): [IList](_definitions_list_list_.ilist.md)

► **execute**(waitFl: *`boolean`*): [IList](_definitions_list_list_.ilist.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IList](_definitions_list_list_.ilist.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IList](_definitions_list_list_.ilist.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IList](_definitions_list_list_.ilist.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IList](_definitions_list_list_.ilist.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IListResult](_definitions_list_list_.ilistresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IListResult](_definitions_list_list_.ilistresult.md)





___

<a id="getbyentityname"></a>

###  getByEntityName

► **getByEntityName**(entityTypeName: *`string`*, callback: *function*, targetInfo?: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getByEntityName](_definitions_list_list_.ilistmethods.md#getbyentityname)*

*Defined in [definitions/list/list.ts:47](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L47)*



A static method to get the list by the entity name.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| entityTypeName | `string`   |  The entity type name of the list. |
| callback | function   |  The method to be executed after the request completes. |
| targetInfo | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="getchanges"></a>

###  getChanges

► **getChanges**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getChanges](_definitions_list_list_.ilistmethods.md#getchanges)*

*Defined in [definitions/list/list.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L53)*



Returns the collection of changes from the change log that have occurred within the list, based on the specified query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  The change query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





___

<a id="getitembyid"></a>

###  getItemById

► **getItemById**(id: *`any`*): [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItemById](_definitions_list_list_.ilistmethods.md#getitembyid)*

*Defined in [definitions/list/list.ts:59](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L59)*



Returns the list item with the specified list item identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The list item id. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)





___

<a id="getitems"></a>

###  getItems

► **getItems**(viewXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItems](_definitions_list_list_.ilistmethods.md#getitems)*

*Defined in [definitions/list/list.ts:65](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L65)*



Returns a collection of items from the list based on the view xml.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewXml | `any`   |  The view xml CAML query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getitemsbyquery"></a>

###  getItemsByQuery

► **getItemsByQuery**(camlQuery: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getItemsByQuery](_definitions_list_list_.ilistmethods.md#getitemsbyquery)*

*Defined in [definitions/list/list.ts:71](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L71)*



Returns a collection of items from the list based on the specified query.
*__camlquery__*: *   The caml query.



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| camlQuery | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getlistitemchangessincetoken"></a>

###  getListItemChangesSinceToken

► **getListItemChangesSinceToken**(query: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getListItemChangesSinceToken](_definitions_list_list_.ilistmethods.md#getlistitemchangessincetoken)*

*Defined in [definitions/list/list.ts:77](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L77)*



Returns a collection of items from the list based on the specified query.
*__query__*: *   The query that contains the change token.



**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___

<a id="getrelatedfields"></a>

###  getRelatedFields

► **getRelatedFields**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getRelatedFields](_definitions_list_list_.ilistmethods.md#getrelatedfields)*

*Defined in [definitions/list/list.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L82)*



Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getUserEffectivePermissions](_definitions_list_list_.ilistmethods.md#getusereffectivepermissions)*

*Defined in [definitions/list/list.ts:88](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L88)*



Gets the effective user permissions for the current user.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The user login name. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getviewbyid"></a>

###  getViewById

► **getViewById**(viewId: *`any`*): [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[getViewById](_definitions_list_list_.ilistmethods.md#getviewbyid)*

*Defined in [definitions/list/list.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L94)*



Returns the list view with the specified view identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewId | `any`   |  The view id. |





**Returns:** [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[recycle](_definitions_list_list_.ilistmethods.md#recycle)*

*Defined in [definitions/list/list.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L99)*



Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="renderlistdata"></a>

###  renderListData

► **renderListData**(viewXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[renderListData](_definitions_list_list_.ilistmethods.md#renderlistdata)*

*Defined in [definitions/list/list.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L105)*



Renders the list data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewXml | `any`   |  A CAML query that defines the items and fields that you want returned. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="renderlistformdata"></a>

###  renderListFormData

► **renderListFormData**(itemId: *`any`*, formId: *`any`*, mode: *`SPTypes.ControlMode`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[renderListFormData](_definitions_list_list_.ilistmethods.md#renderlistformdata)*

*Defined in [definitions/list/list.ts:115](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L115)*



Renders the list form data.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| itemId | `any`   |  The item id. |
| formId | `any`   |  The identifier of the form. |
| mode | `SPTypes.ControlMode`   |  The SP.ControlMode of the control used to display the item. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="reservelistitemid"></a>

###  reserveListItemId

► **reserveListItemId**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[reserveListItemId](_definitions_list_list_.ilistmethods.md#reservelistitemid)*

*Defined in [definitions/list/list.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L120)*



Reserves a list item ID for idempotent list item creation.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[resetRoleInheritance](_definitions_list_list_.ilistmethods.md#resetroleinheritance)*

*Defined in [definitions/list/list.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L125)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IListResult](_definitions_list_list_.ilistresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IListResult](_definitions_list_list_.ilistresult.md)>





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListMethods](_definitions_list_list_.ilistmethods.md).[update](_definitions_list_list_.ilistmethods.md#update)*

*Defined in [definitions/list/list.ts:131](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L131)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


