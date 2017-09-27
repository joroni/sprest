[gd-sprest](../README.md) > ["definitions/list/list"](../modules/_definitions_list_list_.md) > [IListQueryProps](../interfaces/_definitions_list_list_.ilistqueryprops.md)



# Interface: IListQueryProps


List Query Properties

## Hierarchy

**IListQueryProps**

↳  [IListResult](_definitions_list_list_.ilistresult.md)




↳  [IList](_definitions_list_list_.ilist.md)









## Methods
<a id="contenttypes"></a>

###  ContentTypes

► **ContentTypes**(): [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)

► **ContentTypes**(id: *`string`*): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Defined in [definitions/list/list.ts:282](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L282)*



Gets the content types that are associated with the list.




**Returns:** [IContentTypes](_definitions_contenttype_contenttypes_.icontenttypes.md)




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




*Defined in [definitions/list/list.ts:293](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L293)*



Gets the data source associated with the list, or null if the list is not a virtual list. Returns null if the HasExternalDataSource property is false.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`Array`.<`string`>





___

<a id="defaultdisplayformurl"></a>

###  DefaultDisplayFormUrl

► **DefaultDisplayFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/list.ts:298](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L298)*



Gets a value that specifies the location of the default display form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaulteditformurl"></a>

###  DefaultEditFormUrl

► **DefaultEditFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/list.ts:303](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L303)*



Gets a value that specifies the URL of the edit form to use for list items in the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaultnewformurl"></a>

###  DefaultNewFormUrl

► **DefaultNewFormUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/list.ts:308](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L308)*



Gets a value that specifies the location of the default new form for the list. Clients specify a server-relative URL, and the server returns a site-relative URL.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="defaultview"></a>

###  DefaultView

► **DefaultView**(): [IView](_definitions_list_view_.iview.md)




*Defined in [definitions/list/list.ts:313](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L313)*



Gets the default list view.




**Returns:** [IView](_definitions_list_view_.iview.md)





___

<a id="defaultviewurl"></a>

###  DefaultViewUrl

► **DefaultViewUrl**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/list.ts:318](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L318)*



Gets the URL of the default view for the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="descriptionresouce"></a>

###  DescriptionResouce

► **DescriptionResouce**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Defined in [definitions/list/list.ts:320](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L320)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

► **EffectiveBasePermissions**(): [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)




*Defined in [definitions/list/list.ts:325](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L325)*



Gets a value that specifies the effective permissions on the list that are assigned to the current user.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)





___

<a id="effectivebasepermissionsforui"></a>

###  EffectiveBasePermissionsForUI

► **EffectiveBasePermissionsForUI**(): [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)




*Defined in [definitions/list/list.ts:330](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L330)*



Gets a value that specifies the effective permissions on the list that are for the user export interface.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)





___

<a id="eventreceivers"></a>

###  EventReceivers

► **EventReceivers**(): [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)

► **EventReceivers**(id: *`string`*): [IEventReceiver](_definitions_eventreceiver_eventreceiver_.ieventreceiver.md)




*Defined in [definitions/list/list.ts:335](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L335)*



Gets the event receivers associated with the list.




**Returns:** [IEventReceivers](_definitions_eventreceiver_eventreceivers_.ieventreceivers.md)




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




*Defined in [definitions/list/list.ts:346](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L346)*



Gets the fields in the list.




**Returns:** [IFields](_definitions_field_fields_.ifields.md)




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




*Defined in [definitions/list/list.ts:357](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L357)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="forms"></a>

###  Forms

► **Forms**(): [IBase](_definitions_lib_base_.ibase.md)

► **Forms**(id: *`string`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:362](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L362)*



Gets the list forms in the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/list.ts:373](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L373)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="informationrightsmanagementsettings"></a>

###  InformationRightsManagementSettings

► **InformationRightsManagementSettings**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:378](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L378)*



Gets a value that specifies the information rights management settings.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="issiteassetslibrary"></a>

###  IsSiteAssetsLibrary

► **IsSiteAssetsLibrary**(): [IBase](_definitions_lib_base_.ibase.md)`boolean`




*Defined in [definitions/list/list.ts:383](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L383)*



Gets a value that indicates whether the list is designated as a default asset location for images or other files which the users upload to their wiki pages.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="items"></a>

###  Items

► **Items**(): [IListItems](_definitions_list_items_.ilistitems.md)

► **Items**(id: *`number`*): [IListItem](_definitions_list_item_.ilistitem.md)




*Defined in [definitions/list/list.ts:388](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L388)*



Gets the list items in the list.




**Returns:** [IListItems](_definitions_list_items_.ilistitems.md)




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




*Defined in [definitions/list/list.ts:399](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L399)*



Gets or sets a value that specifies whether the list appears on the Quick Launch of the site. If true, the server sets the Hidden property to false.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`boolean`





___

<a id="parentweb"></a>

###  ParentWeb

► **ParentWeb**(): [IWeb](_definitions_site_web_.iweb.md)




*Defined in [definitions/list/list.ts:404](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L404)*



Gets a value that specifies the site that contains the list.




**Returns:** [IWeb](_definitions_site_web_.iweb.md)





___

<a id="roleassignments"></a>

###  RoleAssignments

► **RoleAssignments**(): [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)

► **RoleAssignments**(id: *`string`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Defined in [definitions/list/list.ts:409](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L409)*



Gets the role assignments for the securable object.




**Returns:** [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




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




*Defined in [definitions/list/list.ts:420](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L420)*



Gets the root folder of the list.




**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)




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




*Defined in [definitions/list/list.ts:431](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L431)*



Gets a value that specifies the list schema of the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="subscriptions"></a>

###  Subscriptions

► **Subscriptions**(): [IBase](_definitions_lib_base_.ibase.md)[IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:433](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L433)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IBase](_definitions_lib_base_.ibase.md)





___

<a id="titleresource"></a>

###  TitleResource

► **TitleResource**(): [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)




*Defined in [definitions/list/list.ts:435](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L435)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IResourcePath](_definitions_lib_types_.iresourcepath.md)





___

<a id="usercustomactions"></a>

###  UserCustomActions

► **UserCustomActions**(): [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)

► **UserCustomActions**(id: *`string`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)




*Defined in [definitions/list/list.ts:440](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L440)*



Gets the user custom actions for the list.




**Returns:** [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




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




*Defined in [definitions/list/list.ts:451](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L451)*



Gets or sets a value that specifies the data validation criteria for a list item. Its length must be <= 1023.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="validationmessage"></a>

###  ValidationMessage

► **ValidationMessage**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/list.ts:456](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L456)*



Gets or sets a value that specifies the error message returned when data validation fails for a list item. Its length must be <= 1023.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="views"></a>

###  Views

► **Views**(): [IViews](_definitions_list_views_.iviews.md)

► **Views**(id: *`string`*): [IView](_definitions_list_view_.iview.md)




*Defined in [definitions/list/list.ts:461](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L461)*



Gets the views in the list.




**Returns:** [IViews](_definitions_list_views_.iviews.md)




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




*Defined in [definitions/list/list.ts:472](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L472)*



Gets a value that specifies the collection of all workflow associations for the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="writesecurity"></a>

###  WriteSecurity

► **WriteSecurity**(): [IBase](_definitions_lib_base_.ibase.md)`number`




*Defined in [definitions/list/list.ts:474](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L474)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)`number`





___


