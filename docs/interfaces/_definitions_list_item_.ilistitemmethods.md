[gd-sprest](../README.md) > ["definitions/list/item"](../modules/_definitions_list_item_.md) > [IListItemMethods](../interfaces/_definitions_list_item_.ilistitemmethods.md)



# Interface: IListItemMethods


List Item Methods

## Hierarchy

**IListItemMethods**

↳  [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




↳  [IListItemResult](_definitions_list_item_.ilistitemresult.md)




↳  [IListItem](_definitions_list_item_.ilistitem.md)









## Methods
<a id="breakroleinheritance"></a>

###  breakRoleInheritance

► **breakRoleInheritance**(copyRoleAssignments: *`any`*, clearSubScopes: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/item.ts:28](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L28)*



Deletes the list item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getusereffectivepermissions"></a>

###  getUserEffectivePermissions

► **getUserEffectivePermissions**(loginName: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/item.ts:39](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L39)*



Moves the list item to the Recycle Bin and returns the identifier of the new Recycle Bin item.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="resetroleinheritance"></a>

###  resetRoleInheritance

► **resetRoleInheritance**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/list/item.ts:44](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L44)*



Resets the role inheritance for the securable object and inherits role assignments from the parent securable object.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="update"></a>

###  update

► **update**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)




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




*Defined in [definitions/list/item.ts:57](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/item.ts#L57)*



Validates and sets the values of the specified collection of fields for the list item.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| formValues | `any`   |  The fields to change and their new values. Pass this parameter in the request body, as shown in the request example. |
| bNewDocumentUpdate | `any`   |  True if the list item is a document being updated after upload; otherwise false. Pass this parameter in the request body, as shown in the request example, or in the URI path. |





**Returns:** `any`





___


