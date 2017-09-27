[gd-sprest](../README.md) > ["definitions/list/views"](../modules/_definitions_list_views_.md) > [IViewsMethods](../interfaces/_definitions_list_views_.iviewsmethods.md)



# Interface: IViewsMethods


Methods

## Hierarchy

**IViewsMethods**

↳  [IViews](_definitions_list_views_.iviews.md)




↳  [IViewResults](_definitions_list_views_.iviewresults.md)









## Methods
<a id="add"></a>

###  add

► **add**(parameters: *[IViewCreationInformation](_definitions_lib_types_.iviewcreationinformation.md)*): [IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md)




*Defined in [definitions/list/views.ts:13](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/views.ts#L13)*



Adds a list view to the view collection.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| parameters | [IViewCreationInformation](_definitions_lib_types_.iviewcreationinformation.md)   |  - |





**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md)





___

<a id="getbyid"></a>

###  getById

► **getById**(id: *`any`*): [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




*Defined in [definitions/list/views.ts:19](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/views.ts#L19)*



Gets the list view with the specified ID.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| id | `any`   |  The ID of the view. |





**Returns:** [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="getbytitle"></a>

###  getByTitle

► **getByTitle**(title: *`any`*): [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)




*Defined in [definitions/list/views.ts:25](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/views.ts#L25)*



Gets the list view with the specified title.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| title | `any`   |  The case-sensitive title of the view. |





**Returns:** [IView](_definitions_list_view_.iview.md)[IBase](_definitions_lib_base_.ibase.md)[IView](_definitions_list_view_.iview.md), [IViewResult](_definitions_list_view_.iviewresult.md), [IViewQueryResult](_definitions_list_view_.iviewqueryresult.md)





___

<a id="next"></a>

###  next

► **next**(): [IBase](_definitions_lib_base_.ibase.md)[IViews](_definitions_list_views_.iviews.md)




*Defined in [definitions/list/views.ts:30](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/list/views.ts#L30)*



Method to get the next set of results.




**Returns:** [IBase](_definitions_lib_base_.ibase.md)[IViews](_definitions_list_views_.iviews.md)





___


