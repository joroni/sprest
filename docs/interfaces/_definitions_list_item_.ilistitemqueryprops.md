[gd-sprest](../README.md) > ["definitions/list/item"](../modules/_definitions_list_item_.md) > [IListItemQueryProps](../interfaces/_definitions_list_item_.ilistitemqueryprops.md)



# Interface: IListItemQueryProps


List Item Query Properties

## Hierarchy

**IListItemQueryProps**

↳  [IListItemResult](_definitions_list_item_.ilistitemresult.md)




↳  [IListItem](_definitions_list_item_.ilistitem.md)









## Methods
<a id="attachmentfiles"></a>

###  AttachmentFiles

► **AttachmentFiles**(): [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)

► **AttachmentFiles**(fileName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IAttachment](_definitions_lib_types_.iattachment.md)




*Defined in [definitions/list/item.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L93)*



Get the attachment collection.




**Returns:** [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)




*Defined in [definitions/list/item.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L99)*



Gets the specified attachment file.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| fileName | `string`   |  The filename of the attachment. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IAttachment](_definitions_lib_types_.iattachment.md)





___

<a id="contenttype"></a>

###  ContentType

► **ContentType**(): [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)




*Defined in [definitions/list/item.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L104)*



Gets a value that specifies the content type of the list item.




**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)





___

<a id="fieldvaluesashtml"></a>

###  FieldValuesAsHtml

► **FieldValuesAsHtml**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:109](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L109)*



Gets the values for the list item as HTML.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldvaluesastext"></a>

###  FieldValuesAsText

► **FieldValuesAsText**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L114)*



Gets the list item's field values as a collection of string values.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldvaluesforedit"></a>

###  FieldValuesForEdit

► **FieldValuesForEdit**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L119)*



Gets the formatted values to be displayed in an edit form.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="file"></a>

###  File

► **File**(): [IFile](_definitions_file_file_.ifile.md)




*Defined in [definitions/list/item.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L124)*



Gets the file that is represented by the item from a document library.




**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="firstuniqueancestorsecurableobject"></a>

###  FirstUniqueAncestorSecurableObject

► **FirstUniqueAncestorSecurableObject**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/item.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L129)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="folder"></a>

###  Folder

► **Folder**(): [IFolder](_definitions_file_folder_.ifolder.md)




*Defined in [definitions/list/item.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L134)*



Gets a folder object that is associated with a folder item.




**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)





___

<a id="getdlppolicytip"></a>

###  GetDlpPolicyTip

► **GetDlpPolicyTip**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L136)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="hasuniqueroleassignments"></a>

###  HasUniqueRoleAssignments

► **HasUniqueRoleAssignments**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Defined in [definitions/list/item.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L141)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="parentlist"></a>

###  ParentList

► **ParentList**(): [IList](_definitions_list_list_.ilist.md)




*Defined in [definitions/list/item.ts:146](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L146)*



Gets the parent list that contains the list item.




**Returns:** [IList](_definitions_list_list_.ilist.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Defined in [definitions/list/item.ts:151](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L151)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="roleassignments"></a>

###  RoleAssignments

► **RoleAssignments**(): [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)

► **RoleAssignments**(id: *`string`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Defined in [definitions/list/item.ts:156](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L156)*



Gets the role assignments for the securable object.




**Returns:** [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




*Defined in [definitions/list/item.ts:162](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L162)*



Gets the role assignment(s) for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The role assignment id. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)





___


