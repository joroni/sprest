[gd-sprest](../README.md) > ["definitions/list/lists"](../modules/_definitions_list_lists_.md) > [IListsMethods](../interfaces/_definitions_list_lists_.ilistsmethods.md)



# Interface: IListsMethods


Methods

## Hierarchy

**IListsMethods**

↳  [ILists](_definitions_list_lists_.ilists.md)




↳  [IListResults](_definitions_list_lists_.ilistresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IListCreationInformation](_definitions_lib_types_.ilistcreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md)




*Defined in [definitions/list/lists.ts:14](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L14)*



Adds a list to the list collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IListCreationInformation](_definitions_lib_types_.ilistcreationinformation.md)   |  The list creation information. |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md)





___

<a id="ensuresiteassetslibrary"></a>

###  ensureSiteAssetsLibrary

► **ensureSiteAssetsLibrary**(): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Defined in [definitions/list/lists.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L19)*



Gets a list that is the default asset location for images or other files, which the users upload to their wiki pages.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="ensuresitepageslibrary"></a>

###  ensureSitePagesLibrary

► **ensureSitePagesLibrary**(): [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Defined in [definitions/list/lists.ts:24](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L24)*



Gets a list that is the default location for wiki pages.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Defined in [definitions/list/lists.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L30)*



Returns the list with the specified list identifier.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The list id. |





**Returns:** [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="getbytitle"></a>

###  getByTitle

► **getByTitle**(title: *`any`*): [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)




*Defined in [definitions/list/lists.ts:36](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L36)*



Returns the list with the specified title from the collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `any`   |  The list title. |





**Returns:** [IList](_definitions_list_list_.ilist.md)[IBase](_definitions_lib_base_.ibase.md)[IList](_definitions_list_list_.ilist.md), [IListResult](_definitions_list_list_.ilistresult.md), [IListQueryResult](_definitions_list_list_.ilistqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[ILists](_definitions_list_lists_.ilists.md), [IListResults](_definitions_list_lists_.ilistresults.md)




*Defined in [definitions/list/lists.ts:41](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/lists.ts#L41)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[ILists](_definitions_list_lists_.ilists.md), [IListResults](_definitions_list_lists_.ilistresults.md)





___


