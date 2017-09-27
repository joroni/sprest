[gd-sprest](../README.md) > ["definitions/list/list"](../modules/_definitions_list_list_.md) > [IListMethods](../interfaces/_definitions_list_list_.ilistmethods.md)



# Interface: IListMethods


List Methods

## Hierarchy

**IListMethods**

↳  [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




↳  [IListResult](_definitions_list_list_.ilistresult.md)




↳  [IList](_definitions_list_list_.ilist.md)









## Methods
<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): `any`




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




*Defined in [definitions/list/list.ts:40](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L40)*



Deletes the list.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getbyentityname"></a>

###  getByEntityName

► **getByEntityName**(entityTypeName: *`string`*, callback: *function*, targetInfo?: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




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




*Defined in [definitions/list/list.ts:53](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L53)*



Returns the collection of changes from the change log that have occurred within the list, based on the specified query.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| query | `any`   |  The change query. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getitembyid"></a>

###  getItemById

► **getItemById**(id: *`any`*): [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




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




*Defined in [definitions/list/list.ts:82](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L82)*



Returns a collection of lookup fields that use this list as a data source and that have FieldLookup.IsRelationship set to true.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/list.ts:94](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L94)*



Returns the list view with the specified view identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| viewId | `any`   |  The view id. |





**Returns:** [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="recycle"></a>

###  recycle

► **recycle**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L99)*



Moves the list to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="renderlistdata"></a>

###  renderListData

► **renderListData**(viewXml: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/list.ts:120](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L120)*



Reserves a list item ID for idempotent list item creation.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:125](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L125)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/list.ts:131](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/list.ts#L131)*



Updates it's properties.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The list properties to update. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___


