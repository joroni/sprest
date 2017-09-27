[gd-sprest](../README.md) > ["definitions/list/item"](../modules/_definitions_list_item_.md) > [IListItem](../interfaces/_definitions_list_item_.ilistitem.md)



# Interface: IListItem


List Item

## Hierarchy


 [IListItemMethods](_definitions_list_item_.ilistitemmethods.md)




 [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md)




 [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)

**↳ IListItem**








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
<a id="attachmentfiles"></a>

###  AttachmentFiles

► **AttachmentFiles**(): [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)

► **AttachmentFiles**(fileName: *`string`*): [IBase](_definitions_lib_base_.ibase.md)[IAttachment](_definitions_lib_types_.iattachment.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[AttachmentFiles](_definitions_list_item_.ilistitemqueryprops.md#attachmentfiles)*

*Defined in [definitions/list/item.ts:93](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L93)*



Get the attachment collection.




**Returns:** [IAttachmentFiles](_definitions_list_attachments_.iattachmentfiles.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[AttachmentFiles](_definitions_list_item_.ilistitemqueryprops.md#attachmentfiles)*

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




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[ContentType](_definitions_list_item_.ilistitemqueryprops.md#contenttype)*

*Defined in [definitions/list/item.ts:104](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L104)*



Gets a value that specifies the content type of the list item.




**Returns:** [IContentType](_definitions_contenttype_contenttype_.icontenttype.md)





___

<a id="fieldvaluesashtml"></a>

###  FieldValuesAsHtml

► **FieldValuesAsHtml**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[FieldValuesAsHtml](_definitions_list_item_.ilistitemqueryprops.md#fieldvaluesashtml)*

*Defined in [definitions/list/item.ts:109](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L109)*



Gets the values for the list item as HTML.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldvaluesastext"></a>

###  FieldValuesAsText

► **FieldValuesAsText**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[FieldValuesAsText](_definitions_list_item_.ilistitemqueryprops.md#fieldvaluesastext)*

*Defined in [definitions/list/item.ts:114](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L114)*



Gets the list item's field values as a collection of string values.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="fieldvaluesforedit"></a>

###  FieldValuesForEdit

► **FieldValuesForEdit**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[FieldValuesForEdit](_definitions_list_item_.ilistitemqueryprops.md#fieldvaluesforedit)*

*Defined in [definitions/list/item.ts:119](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L119)*



Gets the formatted values to be displayed in an edit form.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="file"></a>

###  File

► **File**(): [IFile](_definitions_file_file_.ifile.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[File](_definitions_list_item_.ilistitemqueryprops.md#file)*

*Defined in [definitions/list/item.ts:124](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L124)*



Gets the file that is represented by the item from a document library.




**Returns:** [IFile](_definitions_file_file_.ifile.md)





___

<a id="firstuniqueancestorsecurableobject"></a>

###  FirstUniqueAncestorSecurableObject

► **FirstUniqueAncestorSecurableObject**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[FirstUniqueAncestorSecurableObject](_definitions_list_item_.ilistitemqueryprops.md#firstuniqueancestorsecurableobject)*

*Defined in [definitions/list/item.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L129)*



Gets the object where role assignments for this object are defined. If role assignments are defined directly on the current object, the current object is returned.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="folder"></a>

###  Folder

► **Folder**(): [IFolder](_definitions_file_folder_.ifolder.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[Folder](_definitions_list_item_.ilistitemqueryprops.md#folder)*

*Defined in [definitions/list/item.ts:134](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L134)*



Gets a folder object that is associated with a folder item.




**Returns:** [IFolder](_definitions_file_folder_.ifolder.md)





___

<a id="getdlppolicytip"></a>

###  GetDlpPolicyTip

► **GetDlpPolicyTip**(): [IBase](_definitions_lib_base_.ibase.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[GetDlpPolicyTip](_definitions_list_item_.ilistitemqueryprops.md#getdlppolicytip)*

*Defined in [definitions/list/item.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L136)*





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="hasuniqueroleassignments"></a>

###  HasUniqueRoleAssignments

► **HasUniqueRoleAssignments**(): [IBase](_definitions_lib_base_.ibase.md)`string`




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[HasUniqueRoleAssignments](_definitions_list_item_.ilistitemqueryprops.md#hasuniqueroleassignments)*

*Defined in [definitions/list/item.ts:141](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L141)*



Gets a value that specifies whether the role assignments are uniquely defined for this securable object or inherited from a parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)`string`





___

<a id="parentlist"></a>

###  ParentList

► **ParentList**(): [IList](_definitions_list_list_.ilist.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[ParentList](_definitions_list_item_.ilistitemqueryprops.md#parentlist)*

*Defined in [definitions/list/item.ts:146](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L146)*



Gets the parent list that contains the list item.




**Returns:** [IList](_definitions_list_list_.ilist.md)





___

<a id="properties"></a>

###  Properties

► **Properties**(): [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[Properties](_definitions_list_item_.ilistitemqueryprops.md#properties)*

*Defined in [definitions/list/item.ts:151](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L151)*



Property Bag




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IPropertyValues](_definitions_propertyvalues_.ipropertyvalues.md)





___

<a id="roleassignments"></a>

###  RoleAssignments

► **RoleAssignments**(): [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)

► **RoleAssignments**(id: *`string`*): [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[RoleAssignments](_definitions_list_item_.ilistitemqueryprops.md#roleassignments)*

*Defined in [definitions/list/item.ts:156](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L156)*



Gets the role assignments for the securable object.




**Returns:** [IRoleAssignments](_definitions_security_roleassignments_.iroleassignments.md)




*Inherited from [IListItemQueryProps](_definitions_list_item_.ilistitemqueryprops.md).[RoleAssignments](_definitions_list_item_.ilistitemqueryprops.md#roleassignments)*

*Defined in [definitions/list/item.ts:162](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L162)*



Gets the role assignment(s) for the securable object.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `string`   |  The role assignment id. |





**Returns:** [IRoleAssignment](_definitions_security_roleassignment_.iroleassignment.md)





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

► **execute**(callback?: *function*): [IListItem](_definitions_list_item_.ilistitem.md)

► **execute**(waitFl: *`boolean`*): [IListItem](_definitions_list_item_.ilistitem.md)

► **execute**(callback: *function*, waitFl: *`boolean`*): [IListItem](_definitions_list_item_.ilistitem.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L39)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:45](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L45)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[execute](_definitions_lib_base_.ibase.md#execute)*

*Defined in [definitions/lib/base.ts:52](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L52)*



Method to execute the request.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| callback | function   |  The method to be executed after the request completes. |
| waitFl | `boolean`   |  Flag to execute the request, after the previous requests have completed. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)





___

<a id="executeandwait"></a>

###  executeAndWait

► **executeAndWait**(): [IListItemResult](_definitions_list_item_.ilistitemresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[executeAndWait](_definitions_lib_base_.ibase.md#executeandwait)*

*Defined in [definitions/lib/base.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L57)*



Method to execute the request synchronously.




**Returns:** [IListItemResult](_definitions_list_item_.ilistitemresult.md)





___

<a id="getinfo"></a>

###  getInfo

► **getInfo**(): [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[getInfo](_definitions_lib_base_.ibase.md#getinfo)*

*Defined in [definitions/lib/base.ts:62](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L62)*



Method to get the request information.




**Returns:** [IRequestInfo](_definitions_lib_targetinfo_.irequestinfo.md)





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

<a id="query"></a>

###  query

► **query**(query: *[ODataQuery](_definitions_lib_odata_.odataquery.md)*): [IBase](_definitions_lib_base_.ibase.md)[IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[query](_definitions_lib_base_.ibase.md#query)*

*Defined in [definitions/lib/base.ts:68](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L68)*



Queries the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | [ODataQuery](_definitions_lib_odata_.odataquery.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)





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

<a id="then"></a>

###  then

► **then**(resolve?: *function*, reject?: *function*): `PromiseLike`.<[IListItemResult](_definitions_list_item_.ilistitemresult.md)>




*Inherited from [IBase](_definitions_lib_base_.ibase.md).[then](_definitions_lib_base_.ibase.md#then)*

*Defined in [definitions/lib/base.ts:75](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/base.ts#L75)*



Method to execute this request and previous ones to complete.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| resolve | function   |  Method to execute for successful requests. |
| reject | function   |  Method to execute for unsuccessful requests. |





**Returns:** `PromiseLike`.<[IListItemResult](_definitions_list_item_.ilistitemresult.md)>





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


