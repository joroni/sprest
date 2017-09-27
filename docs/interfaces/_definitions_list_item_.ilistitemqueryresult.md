[gd-sprest](../README.md) > ["definitions/list/item"](../modules/_definitions_list_item_.md) > [IListItemQueryResult](../interfaces/_definitions_list_item_.ilistitemqueryresult.md)



# Interface: IListItemQueryResult


List Item Query Result

## Hierarchy


 [IListItemMethods](_definitions_list_item_.ilistitemmethods.md)




 [IListItemProps](_definitions_list_item_.ilistitemprops.md)

**↳ IListItemQueryResult**








## Properties
<a id="attachmentfiles"></a>

###  AttachmentFiles

**●  AttachmentFiles**:  *[IAttachmentFilesMethods](_definitions_list_attachments_.iattachmentfilesmethods.md)[IResults](_definitions_lib_types_.iresults.md)[IAttachment](_definitions_lib_types_.iattachment.md)* 

*Defined in [definitions/list/item.ts:172](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L172)*



Get the attachment collection.




___

<a id="contenttype"></a>

###  ContentType

**●  ContentType**:  *[IContentTypeResult](_definitions_contenttype_contenttype_.icontenttyperesult.md)* 

*Defined in [definitions/list/item.ts:177](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L177)*



Gets a value that specifies the content type of the list item.




___

<a id="displayname"></a>

###  DisplayName

**●  DisplayName**:  *`string`* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[DisplayName](_definitions_list_item_.ilistitemprops.md#displayname)*

*Defined in [definitions/list/item.ts:67](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L67)*



Gets a value that specifies the display name of the list item.




___

<a id="effectivebasepermissions"></a>

###  EffectiveBasePermissions

**●  EffectiveBasePermissions**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[EffectiveBasePermissions](_definitions_list_item_.ilistitemprops.md#effectivebasepermissions)*

*Defined in [definitions/list/item.ts:70](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L70)*



Gets a value that specifies the effective permissions on the list item that are assigned to the current user.




___

<a id="effectivebasepermissionsforui"></a>

###  EffectiveBasePermissionsForUI

**●  EffectiveBasePermissionsForUI**:  *[IBasePermissions](_definitions_lib_types_.ibasepermissions.md)* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[EffectiveBasePermissionsForUI](_definitions_list_item_.ilistitemprops.md#effectivebasepermissionsforui)*

*Defined in [definitions/list/item.ts:73](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L73)*



Gets the effective base permissions for the current user, as they should be displayed in UI.




___

<a id="fieldvaluesashtml"></a>

###  FieldValuesAsHtml

**●  FieldValuesAsHtml**:  *`Array`.<`string`>* 

*Defined in [definitions/list/item.ts:182](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L182)*



Gets the values for the list item as HTML.




___

<a id="fieldvaluesastext"></a>

###  FieldValuesAsText

**●  FieldValuesAsText**:  *`Array`.<`string`>* 

*Defined in [definitions/list/item.ts:187](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L187)*



Gets the list item's field values as a collection of string values.




___

<a id="fieldvaluesforedit"></a>

###  FieldValuesForEdit

**●  FieldValuesForEdit**:  *`Array`.<`string`>* 

*Defined in [definitions/list/item.ts:192](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L192)*



Gets the formatted values to be displayed in an edit form.




___

<a id="file"></a>

###  File

**●  File**:  *[IFileResult](_definitions_file_file_.ifileresult.md)* 

*Defined in [definitions/list/item.ts:197](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L197)*



Gets the file that is represented by the item from a document library.




___

<a id="filesystemobjecttype"></a>

###  FileSystemObjectType

**●  FileSystemObjectType**:  *`number`* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[FileSystemObjectType](_definitions_list_item_.ilistitemprops.md#filesystemobjecttype)*

*Defined in [definitions/list/item.ts:76](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L76)*



Gets a value that specifies whether the list item is a file or a list folder. Represents an SP.FileSystemObjectType value: Invalid = -1; File = 0; Folder = 1; Web = 2.




___

<a id="firstuniqueancestorsecurableobject"></a>

###  FirstUniqueAncestorSecurableObject

**●  FirstUniqueAncestorSecurableObject**:  *[IListResult](_definitions_list_list_.ilistresult.md)* 

*Defined in [definitions/list/item.ts:202](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L202)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




___

<a id="folder"></a>

###  Folder

**●  Folder**:  *[IFolderResult](_definitions_file_folder_.ifolderresult.md)* 

*Defined in [definitions/list/item.ts:207](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L207)*



Gets a folder object that is associated with a folder item.




___

<a id="hasuniqueroleassignments"></a>

###  HasUniqueRoleAssignments

**●  HasUniqueRoleAssignments**:  *`boolean`* 

*Defined in [definitions/list/item.ts:214](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L214)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




___

<a id="iconoverlay"></a>

###  IconOverlay

**●  IconOverlay**:  *`string`* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[IconOverlay](_definitions_list_item_.ilistitemprops.md#iconoverlay)*

*Defined in [definitions/list/item.ts:78](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L78)*





___

<a id="id"></a>

###  Id

**●  Id**:  *`number`* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[Id](_definitions_list_item_.ilistitemprops.md#id)*

*Defined in [definitions/list/item.ts:81](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L81)*



Gets a value that specifies the list item identifier.




___

<a id="parentlist"></a>

###  ParentList

**●  ParentList**:  *[IListResult](_definitions_list_list_.ilistresult.md)* 

*Defined in [definitions/list/item.ts:219](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L219)*



Gets the parent list that contains the list item.




___

<a id="properties"></a>

###  Properties

**●  Properties**:  *`Array`.<`string`>* 

*Defined in [definitions/list/item.ts:224](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L224)*



Property Bag




___

<a id="roleassignments"></a>

###  RoleAssignments

**●  RoleAssignments**:  *[IRoleAssignmentResults](_definitions_security_roleassignments_.iroleassignmentresults.md)* 

*Defined in [definitions/list/item.ts:229](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L229)*



Gets the role assignments for the securable object.




___

<a id="serverredirectedembedurl"></a>

###  ServerRedirectedEmbedUrl

**●  ServerRedirectedEmbedUrl**:  *`string`* 

*Inherited from [IListItemProps](_definitions_list_item_.ilistitemprops.md).[ServerRedirectedEmbedUrl](_definitions_list_item_.ilistitemprops.md#serverredirectedembedurl)*

*Defined in [definitions/list/item.ts:83](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L83)*





___


## Methods
<a id="getdlppolicytip"></a>

###  GetDlpPolicyTip

► **GetDlpPolicyTip**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:209](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L209)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[breakRoleInheritance](_definitions_list_item_.ilistitemmethods.md#breakroleinheritance)*

*Defined in [definitions/list/item.ts:23](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L23)*



Creates unique role assignments for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| copyRoleAssignments | `any`   |  True to copy the role assignments from the parent securable object; false to remove the inherited role assignments except one that contains the current user. |
| clearSubScopes | `any`   |  True to make all child securable objects inherit role assignments from the current object; false (default) to leave role assignments unchanged for child securable objects that do not inherit role assignments from their parent object. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="delete"></a>

###  delete

► **delete**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[delete](_definitions_list_item_.ilistitemmethods.md#delete)*

*Defined in [definitions/list/item.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L28)*



Deletes the list item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[getUserEffectivePermissions](_definitions_list_item_.ilistitemmethods.md#getusereffectivepermissions)*

*Defined in [definitions/list/item.ts:34](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L34)*



Gets the effective permissions that a specified user has on the list item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| loginName | `any`   |  The login name. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[recycle](_definitions_list_item_.ilistitemmethods.md#recycle)*

*Defined in [definitions/list/item.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L39)*



Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[resetRoleInheritance](_definitions_list_item_.ilistitemmethods.md#resetroleinheritance)*

*Defined in [definitions/list/item.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L44)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[update](_definitions_list_item_.ilistitemmethods.md#update)*

*Defined in [definitions/list/item.ts:50](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L50)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="validateupdatelistitem"></a>

###  validateUpdateListItem

► **validateUpdateListItem**(formValues: *`any`*, bNewDocumentUpdate: *`any`*): `any`




*Inherited from [IListItemMethods](_definitions_list_item_.ilistitemmethods.md).[validateUpdateListItem](_definitions_list_item_.ilistitemmethods.md#validateupdatelistitem)*

*Defined in [definitions/list/item.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L57)*



Validates and sets the values of the specified collection of fields for the list item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| formValues | `any`   |  The fields to change and their new values. Pass this parameter in the request body, as shown in the request example. |
| bNewDocumentUpdate | `any`   |  True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path. |





**Returns:** `any`





___


