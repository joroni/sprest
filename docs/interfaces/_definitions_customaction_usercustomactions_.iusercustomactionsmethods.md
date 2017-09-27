[gd-sprest](../README.md) > ["definitions/customAction/userCustomActions"](../modules/_definitions_customaction_usercustomactions_.md) > [IUserCustomActionsMethods](../interfaces/_definitions_customaction_usercustomactions_.iusercustomactionsmethods.md)



# Interface: IUserCustomActionsMethods


Methods

## Hierarchy

**IUserCustomActionsMethods**

↳  [IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md)




↳  [IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IUserCustomActionCreationInformation](_definitions_lib_types_.iusercustomactioncreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md), [IUserCustomActionResult](_definitions_customaction_usercustomaction_.iusercustomactionresult.md)




*Defined in [definitions/customAction/userCustomActions.ts:15](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/customAction/userCustomActions.ts#L15)*



Adds a custom actino to the user custom action collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IUserCustomActionCreationInformation](_definitions_lib_types_.iusercustomactioncreationinformation.md)   |  The user custom action information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md), [IUserCustomActionResult](_definitions_customaction_usercustomaction_.iusercustomactionresult.md)





___

<a id="clear"></a>

###  clear

► **clear**(): [IBase](_definitions_lib_base_.ibase.md)




*Defined in [definitions/customAction/userCustomActions.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/customAction/userCustomActions.ts#L20)*



Deletes all custom actions in the collection.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)[IBase](_definitions_lib_base_.ibase.md)[IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md), [IUserCustomActionResult](_definitions_customaction_usercustomaction_.iusercustomactionresult.md), [IUserCustomActionQueryResult](_definitions_customaction_usercustomaction_.iusercustomactionqueryresult.md)




*Defined in [definitions/customAction/userCustomActions.ts:26](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/customAction/userCustomActions.ts#L26)*



Returns the custom action with the specified identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the user custom action to get. |





**Returns:** [IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md)[IBase](_definitions_lib_base_.ibase.md)[IUserCustomAction](_definitions_customaction_usercustomaction_.iusercustomaction.md), [IUserCustomActionResult](_definitions_customaction_usercustomaction_.iusercustomactionresult.md), [IUserCustomActionQueryResult](_definitions_customaction_usercustomaction_.iusercustomactionqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md), [IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)




*Defined in [definitions/customAction/userCustomActions.ts:31](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/customAction/userCustomActions.ts#L31)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IUserCustomActions](_definitions_customaction_usercustomactions_.iusercustomactions.md), [IUserCustomActionResults](_definitions_customaction_usercustomactions_.iusercustomactionresults.md)





___


