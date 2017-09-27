[gd-sprest](../README.md) > ["definitions/lib/helper"](../modules/_definitions_lib_helper_.md) > [IHelperJSLink](../interfaces/_definitions_lib_helper_.ihelperjslink.md)



# Interface: IHelperJSLink


JSLink Helper Methods


## Methods
<a id="disableedit"></a>

###  disableEdit

► **disableEdit**(ctx: *`any`*, field: *`any`*, requireValueFl?: *`boolean`*): `string`




*Defined in [definitions/lib/helper.ts:92](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L92)*



Disables edit for the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to disable edit. |
| requireValueFl | `boolean`   |  Flag to only disable the field, if a value exists. |





**Returns:** `string`





___

<a id="disablequickedit"></a>

###  disableQuickEdit

► **disableQuickEdit**(ctx: *`any`*, field: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:99](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L99)*



Disable quick edit for the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to disable edit. |





**Returns:** `any`





___

<a id="getlistview"></a>

###  getListView

► **getListView**(ctx: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:105](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L105)*



Returns the list view.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `any`





___

<a id="getlistviewitems"></a>

###  getListViewItems

► **getListViewItems**(ctx: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:111](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L111)*



Returns the list view items.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `any`





___

<a id="getlistviewselecteditems"></a>

###  getListViewSelectedItems

► **getListViewSelectedItems**(): `any`




*Defined in [definitions/lib/helper.ts:116](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L116)*



Returns the selected list view items




**Returns:** `any`





___

<a id="getwebpart"></a>

###  getWebPart

► **getWebPart**(ctx: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:122](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L122)*



Returns the webpart containing the JSLink field/form/view.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |





**Returns:** `any`





___

<a id="hidefield"></a>

###  hideField

► **hideField**(ctx: *`any`*, field: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:129](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L129)*



Hides the specified field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to hide. |





**Returns:** `any`





___

<a id="removefield"></a>

###  removeField

► **removeField**(ctx: *`any`*, field: *`any`*): `any`




*Defined in [definitions/lib/helper.ts:136](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L136)*



Removes the field and html from the page.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The field to remove. |





**Returns:** `any`





___

<a id="renderfield"></a>

###  renderField

► **renderField**(ctx: *`any`*, field: *`any`*, formType?: *`number`*): `any`




*Defined in [definitions/lib/helper.ts:144](https://github.com/gunjandatta/sprest/blob/3de79f1/src/definitions/lib/helper.ts#L144)*



Method to render the default html for a field.


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| ctx | `any`   |  The client context. |
| field | `any`   |  The form field. |
| formType | `number`   |  The form type. (Display, Edit, New or View) |





**Returns:** `any`





___


