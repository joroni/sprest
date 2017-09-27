[gd-sprest](../README.md) > ["definitions/list/items"](../modules/_definitions_list_items_.md) > [IListItemsMethods](../interfaces/_definitions_list_items_.ilistitemsmethods.md)



# Interface: IListItemsMethods


Methods

## Hierarchy

**IListItemsMethods**

↳  [IListItems](_definitions_list_items_.ilistitems.md)




↳  [IListItemResults](_definitions_list_items_.ilistitemresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(data: *`any`*): [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md)




*Defined in [definitions/list/items.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/items.ts#L14)*



Adds an item to the list item collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| data | `any`   |  The item properties. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)




*Defined in [definitions/list/items.ts:20](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/items.ts#L20)*



Gets an item by the specified id.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The item id. |





**Returns:** [IListItem](_definitions_list_item_.ilistitem.md)[IBase](_definitions_lib_base_.ibase.md)[IListItem](_definitions_list_item_.ilistitem.md), [IListItemResult](_definitions_list_item_.ilistitemresult.md), [IListItemQueryResult](_definitions_list_item_.ilistitemqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)




*Defined in [definitions/list/items.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/items.ts#L25)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IListItems](_definitions_list_items_.ilistitems.md), [IListItemResults](_definitions_list_items_.ilistitemresults.md)





___


